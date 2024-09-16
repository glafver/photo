import React from 'react';

const CitationSection: React.FC = () => {
    return (
        <section className="py-16 flex justify-center items-center">
            <div className="min-w-fit mx-auto px-4 text-center">
                <blockquote className="text-xl lg:text-2xl italic max-w-2xl mx-auto">
                    "Photography captures the character of a home, turning everyday moments into lasting memories. <br /> I help make those moments stand out."
                </blockquote>
                <p className="mt-4 text-end text-lg "> Glafira Veretennikova, photographer</p>
            </div>
        </section>
    );
};

export default CitationSection;