import Link from "next/link";

// Define a prop type for Card component
interface ServiceType {
    id: number;
    link: string;
    service: string;
    image: string;
}

interface CardProps {
    data: ServiceType;
}

function Card({ data }: CardProps) { // Explicitly typed data
    return (
        <Link href={data.link} className="w-full h-60 bg-white border flex border-gray-300 rounded-sm shadow">
            <p className="m-auto">{data.service}</p> {/* Display the service name */}
        </Link>
    );
}

export default Card;
