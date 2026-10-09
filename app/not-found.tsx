import Link from "next/link";

export default function NotFound() {
    return (
        <section className="py-24 lg:py-40 flex flex-col items-center justify-center text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">404</h1>
                <p className="text-xl mb-8">Sorry, this page could not be found.</p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-stone-300 text-stone-600 rounded shadow-md hover:bg-stone-400 hover:text-white transition duration-300 ease-in-out font-cuba"
                >
                    Go back home
                </Link>
            </div>
        </section>
    );
}
