import StatsCounter from "./StatsCounter";
import { stats } from "../../lib/stats";

const StatsBand: React.FC = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatsCounter value={stats.years} label="years behind the camera" />
            <StatsCounter value={stats.totalBookings} label="homes photographed" />
            <StatsCounter value={stats.totalImages} label="photos delivered" />
            <StatsCounter value={stats.brokers} label="agents who trusted me" />
        </div>
    );
};

export default StatsBand;
