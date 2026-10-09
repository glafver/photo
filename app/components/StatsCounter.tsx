"use client";
import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
    value: number;
    suffix?: string;
    label: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, suffix = "", label }) => {
    const [display, setDisplay] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        let raf = 0;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(value * eased));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [started, value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl lg:text-5xl font-semibold tabular-nums text-brand-600">
                {display.toLocaleString("en-US")}
                {suffix}
            </div>
            <p className="mt-3 text-sm lg:text-base text-neutral-500">{label}</p>
        </div>
    );
};

export default StatsCounter;
