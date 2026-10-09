"use client";
import { Fade } from "react-awesome-reveal";
import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";
import BarChart from "../components/BarChart";
import ButtonDark from "../components/ButtonDark";
import { stats } from "../../lib/stats";

const Page: React.FC = () => {
    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-38.jpg"
                    imageAlt="Warm dusk light over a photographed home in Skåne"
                    heading="My Journey"
                    subheading="Six years, over a thousand homes, and countless stories captured through my lens."
                />
            </Fade>

            {/* Intro */}
            <Fade>
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <p className="text-lg lg:text-xl leading-relaxed text-neutral-700">
                            Numbers rarely tell the whole story — but these ones are close to my heart.
                            Every booking is a home I was trusted to capture, every photo a small moment
                            of someone’s life I was invited into. Here is a little of what the last six
                            years have looked like.
                        </p>
                    </div>
                </section>
            </Fade>

            {/* Key numbers */}
            <Fade>
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-greige-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl lg:text-3xl font-cuba text-center mb-12">
                            A few numbers I’m proud of
                        </h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            <StatsCounter value={stats.years} label="years behind the camera" />
                            <StatsCounter value={stats.totalBookings} label="homes photographed" />
                            <StatsCounter value={stats.totalImages} label="photos delivered" />
                            <StatsCounter value={stats.brokers} label="agents who trusted me" />
                        </div>
                    </div>
                </section>
            </Fade>

            {/* Seasonality */}
            <Fade>
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl lg:text-3xl font-cuba text-center mb-4">Through the seasons</h2>
                        <p className="text-center max-w-2xl mx-auto mb-10 text-neutral-600">
                            Skåne’s light changes with the year — and so does my calendar.
                            Late spring to early autumn is when I’m busiest, and when the light is at its most generous.
                        </p>
                        <div className="max-w-4xl mx-auto">
                            <BarChart data={stats.bookingsByMonth} />
                        </div>
                    </div>
                </section>
            </Fade>

            {/* Growth */}
            <Fade>
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-greige-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl lg:text-3xl font-cuba text-center mb-4">A growing story</h2>
                        <p className="text-center max-w-2xl mx-auto mb-10 text-neutral-600">
                            More homes every year — a trust I’ve worked hard to earn, one shoot at a time.
                        </p>
                        <div className="max-w-3xl mx-auto">
                            <BarChart data={stats.bookingsByYear} />
                        </div>
                    </div>
                </section>
            </Fade>

            {/* What I photograph */}
            <Fade>
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-2xl lg:text-3xl font-cuba text-center mb-4">What I photograph</h2>
                        <p className="text-center mb-10 text-neutral-600">
                            From cosy apartments to spacious villas — every home deserves its best light.
                        </p>
                        <div className="space-y-6">
                            {stats.propertyTypes.map((p) => (
                                <div key={p.type}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span>{p.type}</span>
                                        <span className="text-neutral-500 tabular-nums">{p.percentage}%</span>
                                    </div>
                                    <div className="h-3 bg-greige-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-brand-400"
                                            style={{ width: `${p.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Fade>

            {/* Where I work */}
            <Fade>
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
            </Fade>

            {/* Closing */}
            <Fade>
                <section className="py-16 lg:py-24 text-center">
                    <div className="container mx-auto px-4">
                        <p className="text-xl lg:text-2xl italic max-w-2xl mx-auto mb-8 text-neutral-700">
                            “Every home has a story — I’d love to help tell yours.”
                        </p>
                        <ButtonDark text="See my work" src="/portfolio" />
                    </div>
                </section>
            </Fade>
        </>
    );
};

export default Page;
