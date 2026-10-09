"use client";

interface DonutSegment {
    label: string;
    percentage: number;
    color: string;
}

interface DonutChartProps {
    data: DonutSegment[];
    centerValue: string;
    centerLabel: string;
    size?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, centerValue, centerLabel, size = 220 }) => {
    const strokeWidth = 28;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const center = size / 2;

    let offset = 0;
    const segments = data.map((d) => {
        const length = (d.percentage / 100) * circumference;
        const seg = { ...d, length, offset };
        offset += length;
        return seg;
    });

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="-rotate-90"
                role="img"
                aria-label="Property type distribution"
            >
                <circle cx={center} cy={center} r={radius} fill="none" stroke="#e0dad0" strokeWidth={strokeWidth} />
                {segments.map((s) => (
                    <circle
                        key={s.label}
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${s.length} ${circumference - s.length}`}
                        strokeDashoffset={-s.offset}
                    />
                ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-3xl lg:text-4xl font-semibold tabular-nums text-brand-600">{centerValue}</span>
                <span className="text-xs lg:text-sm text-neutral-500">{centerLabel}</span>
            </div>
        </div>
    );
};

export default DonutChart;
