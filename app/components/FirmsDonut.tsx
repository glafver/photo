import DonutChart from "./DonutChart";
import { stats } from "../../lib/stats";

const FirmsDonut: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <DonutChart
                data={stats.firms.map((f) => ({
                    label: f.name,
                    percentage: f.percentage,
                    color: f.color,
                }))}
                centerValue="17"
                centerLabel="firms"
            />
            <ul className="space-y-4 text-left">
                {stats.firms.map((f) => (
                    <li key={f.name} className="flex items-center gap-3">
                        <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: f.color }} />
                        <span>{f.name}</span>
                        <span className="ml-auto pl-6 text-neutral-500 tabular-nums">{f.percentage}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FirmsDonut;
