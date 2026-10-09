"use client";
import { useEffect, useRef, useState } from "react";

interface BarDatum {
    label: string;
    value: number;
    note?: string;
}

interface BarChartProps {
    data: BarDatum[];
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
                            className={`w-full rounded-t transition-[height] duration-700 ease-out ${
                                d.note ? "bg-brand-200" : "bg-brand-400"
                            }`}
                            style={{ height: inView ? `${(d.value / max) * 100}%` : "0%" }}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-0.5 min-h-9">
                        <span className="text-[10px] lg:text-xs text-neutral-600 whitespace-nowrap">{d.label}</span>
                        {d.note && (
                            <span className="text-[9px] lg:text-[10px] text-brand-600 italic">{d.note}</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BarChart;
