import Link from 'next/link';
import { AttentionSeeker } from "react-awesome-reveal";

interface ButtonProps {
    text: string;
    src: string;
}

const ButtonDark: React.FC<ButtonProps> = ({ text, src }) => {
    return (
        <AttentionSeeker effect='pulse' className='text-center'>
            <Link href={src} className="inline-block px-6 py-3 mt-6 bg-brand-200 text-brand-800 rounded shadow-md hover:bg-brand-300 hover:text-brand-900 transition duration-300 ease-in-out font-cuba">
                {text}
            </Link>
        </AttentionSeeker >
    );
};

export default ButtonDark;