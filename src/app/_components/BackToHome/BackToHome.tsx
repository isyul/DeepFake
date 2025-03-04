import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Ensure lucide-react is installed (npm install lucide-react)

export default function BackToHome() {
    return (
        <div className="absolute top-6 left-6">
            <Link href="/deepfake/public" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg font-semibold">Back to Home</span>
            </Link>
        </div>
    );
}
