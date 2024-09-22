import Image from 'next/image';

interface HeroProps {
    imageUrl: string;
    imageAlt: string;
    heading: string;
    subheading: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, imageAlt, heading, subheading }) => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screentext-center p-8 lg:h-[80vh]">
            <div className="w-full h-full absolute top-0 left-0 ">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority={true}
                />
            </div>

            <div className="relative z-20 h-full container">
                <div className="absolute inset-0 bg-neutral-300 opacity-50 rounded"></div>
                <div className="relative p-6 text-center z-10 h-full flex flex-col justify-center items-center">
                    <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">{heading}</h1>
                    <p className="text-xl lg:text-2xl text-white font-cuba leading-[2]">{subheading}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
