import React from 'react';

const services = [
    {
        id: 1,
        title: "Daytime Photography",
        description: "I’m passionate about capturing the warmth and personality of your home through my photography. Each shoot is approached with a personal touch to ensure every image highlights your space’s unique charm. Daytime photography allows me to showcase your home in its most vibrant state, with bright, clear light bringing out the true colors and details. This creates inviting, true-to-life images that reflect the essence of your home.",
        image: "https://storage.googleapis.com/photo_website/photo_website-02.jpg",
        alt: "Property Photography",
    },
    {
        id: 2,
        title: "Dusk Photography",
        description: "I specialize in dusk photography to capture your home in its most enchanting light. The soft, glowing hues of twilight create a warm, inviting atmosphere that highlights your property’s charm. This unique lighting brings out the cozy aspects of your home, often revealing features that daylight can’t. Dusk photos not only enhance the visual appeal but also help potential buyers or guests feel a deeper connection to the space.",
        image: "https://storage.googleapis.com/photo_website/photo_website-39.jpg",
        alt: "Twilight Photography",
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-32 bg-neutral-100">
            <div className="container mx-auto px-4">
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
                        >
                            <div className="flex-1 p-6 flex items-center">
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold mb-2 font-cuba">{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            <div className="flex-1 p-6 flex justify-center w-full aspect-[1.5]">
                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full h-full object-cover rounded"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
