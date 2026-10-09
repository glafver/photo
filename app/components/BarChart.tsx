"use client";
import { useEffect, useRef, useState } from "react";

interface BarChartProps {
    data: { label: string; value: number }[];
    format?: (n: number) => string;
}

const BarChart: React.FC<BarChartProps> = ({ data, format = (n) => String(n) }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const max = Math.max(...data.map((d) => d.value));

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex items-end gap-1.5 sm:gap-3">
            {data.map((d) => (
                <div key={d.label} className="flex-1 flex flex-col items-center gap-2 min-w-0">
                    <span className="text-[11px] lg:text-xs text-neutral-500 tabular-nums">{format(d.value)}</span>
                    <div className="w-full flex items-end h-40 lg:h-52">
                        <div
                            className="w-full rounded-t bg-stone-400 transition-[height] duration-700 ease-out"
                            style={{ height: inView ? `${(d.value / max) * 100}%` : "0%" }}
                        />
                    </div>
                    <span className="text-[10px] lg:text-xs text-neutral-600 whitespace-nowrap">{d.label}</span>
                </div>
            ))}
        </div>
    );
};

export default BarChart;
