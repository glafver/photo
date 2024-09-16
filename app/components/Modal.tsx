import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl }: ModalProps) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-100"
            onClick={onClose}
        >
            <div
                className="relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-white text-3xl"
                    onClick={onClose}
                >
                    <MdClose />
                </button>
                <img src={imageUrl} alt="Modal Content" className="max-w-full max-h-screen rounded" />
            </div>
        </div>
    );
};

export default Modal;