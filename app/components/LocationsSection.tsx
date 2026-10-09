import { stats } from "../../lib/stats";

const LocationsSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-greige-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl lg:text-3xl font-cuba text-center mb-4">
                    Malmö, Lund &amp; everywhere in between
                </h2>
                <p className="text-center max-w-2xl mx-auto mb-10 text-neutral-600">
                    From city apartments to seaside villas, I photograph homes across {stats.areas} towns
                    and neighbourhoods in Skåne.
                </p>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.topLocations.map((loc) => (
                        <div key={loc.city} className="text-center p-5 bg-white rounded">
                            <div className="text-2xl lg:text-3xl font-semibold tabular-nums">{loc.bookings}</div>
                            <div className="mt-1 text-sm text-neutral-600">{loc.city}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
