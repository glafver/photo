"use client";
import { useState } from "react";

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const body = new URLSearchParams({
            "form-name": "contact",
            "bot-field": "",
            name,
            email,
            message,
        });

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            });
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
        }
    };

    const inputClass =
        "w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition";

    if (status === "success") {
        return (
            <div>
                <h3 className="text-3xl font-semibold mb-4 font-cuba leading-[2] text-center md:text-left">
                    Thank you!
                </h3>
                <p className="text-neutral-600 text-center md:text-left">
                    Your message has been sent — I’ll get back to you as soon as I can.
                </p>
            </div>
        );
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold mb-4 font-cuba leading-[2] text-center md:text-left">
                Send me a message:
            </h3>
            <p className="text-neutral-600 mb-6 text-center md:text-left">
                If you have any questions, don’t hesitate to write — I’ll get back to you as soon as I can.
            </p>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-neutral-700">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
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
                        name="email"
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
                        name="message"
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
                    disabled={status === "sending"}
                    className="px-6 py-3 bg-greige-200 text-neutral-700 rounded shadow-md hover:bg-greige-300 hover:text-neutral-800 transition duration-300 ease-in-out font-cuba disabled:opacity-50"
                >
                    {status === "sending" ? "Sending…" : "Send message"}
                </button>
                {status === "error" && (
                    <p className="text-sm text-red-600">
                        Something went wrong. Please try again or email me directly.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
