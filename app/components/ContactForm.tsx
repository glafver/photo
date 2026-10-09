"use client";
import { useState } from "react";
import { siteConfig } from "../../lib/site";

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Photography inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    };

    const inputClass =
        "w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition";

    return (
        <div>
            <h3 className="text-3xl font-semibold mb-4 font-cuba leading-[2] text-center md:text-left">
                Send me a message:
            </h3>
            <p className="text-neutral-600 mb-6 text-center md:text-left">
                If you have any questions, don’t hesitate to write — I’ll get back to you as soon as I can.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-neutral-700">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-neutral-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-neutral-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={inputClass}
                        placeholder="Tell me about your property and what you need..."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-greige-200 text-neutral-700 rounded-lg shadow-md hover:bg-greige-300 hover:text-neutral-800 transition duration-300 ease-in-out font-semibold"
                >
                    Send message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
