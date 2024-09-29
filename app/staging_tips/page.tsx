"use client";
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";
import { FaCheck } from "react-icons/fa6";

const tips = [
    {
        id: 1,
        title: "Kitchen",
        tips: [
            "Clear the countertops of any clutter and leave only a few decorative items for a clean look.",
            "Add a bowl of fresh fruit or flowers to brighten up the space.",
            "Ensure all appliances are clean and any personal items are put away.",
            "Polish the sink and faucets to give them a fresh sparkle.",
            "Open blinds or curtains to let natural light fill the room.",
        ],
        image: "https://storage.googleapis.com/photo_website/photo_website-21.jpg",
        alt: "Kitchen Tips",
    },
    {
        id: 2,
        title: "Bathroom",
        tips: [
            "Replace old towels with fresh, neatly folded ones to create a spa-like atmosphere.",
            "Remove all personal items like toothbrushes, shampoos, and soaps from surfaces.",
            "Polish mirrors and glass for a spotless, reflective finish.",
            "Add a small plant or scented candles for a touch of warmth.",
            "Put up beautiful packaging for cosmetics or perfume. Brands are always welcome to create a more chic look.",
        ],
        image: "https://storage.googleapis.com/photo_website/photo_website-54.jpg",
        alt: "Bathroom Tips",
    },
    {
        id: 3,
        title: "Bedroom",
        tips: [
            "Make the bed with crisp, clean linens and layer with pillows and throws for a cozy look.",
            "Declutter nightstands and keep them simple with maybe a lamp, a book or a small plant.",
            "Tidy up closets if they will be photographed, keeping items organized.",
            "Use neutral bedding and decor to appeal to a wide audience.",
            "Open curtains or blinds to maximize natural light in the room.",
        ],
        image: "https://storage.googleapis.com/photo_website/photo_website-52.jpg",
        alt: "Bedroom Tips",
    },
    {
        id: 4,
        title: "Living room",
        tips: [
            "Arrange furniture to create an open, inviting flow and remove any unnecessary pieces.",
            "Add accent pillows or throws to sofas for a cozy, welcoming look.",
            "Hide personal items such as remote controls or toys to keep the space clean.",
            "Use plants or flowers to bring some life and color into the room.",
            "Ensure any artwork or wall decor is symmetrical and properly aligned.",
        ],
        image: "https://storage.googleapis.com/photo_website/photo_website-27.jpg",
        alt: "Living Room Tips",
    },
    {
        id: 5,
        title: "Hall",
        tips: [
            "Keep the hallway clear of shoes, coats, or any personal belongings.",
            "Hang a few neutral colored jackets and put out a couple pairs of shoes.",
            "Remove the doormat if it is dirty or old.",
            "Ensure the flooring is clean and polished for a fresh look.",
            "Consider adding a small console table with minimal decor to enhance the space.",
        ],
        image: "https://storage.googleapis.com/photo_website/photo_website-17.jpg",
        alt: "Hall Tips",
    },
    {
        id: 6,
        title: "Dusk",
        tips: [
            "Turn on all the interior and exterior lights to create a warm, inviting glow.",
            "Light as many candles as possible. If it is windy, prepare led-candles.",
            "Prepare a bottle of wine and two glasses, as if inviting a guest to a cozy evening at your home.",
            "Place candles in the windows to create a cozy atmosphere.",
            "Be sure to light a fireplace if you have one, because it creates a feeling of warmth.",
        ],
        image: "https://storage.googleapis.com/photo_website/photo_website-51.jpg",
        alt: "Dusk Tips",
    },
];

const Page: React.FC = () => {
    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-24.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="Let Your Home Shine for Every Shot"
                    subheading="Discover easy and thoughtful tips to beautifully prepare your space for photography, making it feel inviting and picture-perfect"
                />
            </Fade>
            <section className="py-16 lg:py-32 ">
                <div className="container mx-auto px-4">
                    <div className="space-y-6">
                        {tips.map((tip, index) => (
                            <div
                                key={tip.id}
                                className={`py-6 lg:py-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse bg-neutral-100' : 'md:flex-row bg-white'} items-center`}
                            >
                                <div className="flex-1 p-6 flex items-center">
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold mb-3 font-cuba text-center">{tip.title}</h3>
                                        <ul className="list-none pl-0">
                                            {tip.tips.map((item, idx) => (
                                                <li key={idx} className="flex items-start mb-3">
                                                    <span className="md:text-2xl mr-6 text-neutral-500"><FaCheck /></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex-1 px-6 flex justify-center w-full aspect-[1.5]">
                                    <img
                                        src={tip.image}
                                        alt={tip.alt}
                                        className="w-full h-full object-cover rounded"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
