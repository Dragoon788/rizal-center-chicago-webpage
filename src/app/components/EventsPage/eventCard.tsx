import Image from 'next/image';
import { getTime, format } from 'date-fns'

interface EventCardProps {
    imgSrc: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
}

export default function EventCard ( {imgSrc, title, description, startDate, endDate } : EventCardProps) {
    
    return(
        <div className="flex w-full h-1/4 m-5">
            <figure className="relative h-full aspect-3/2 m-5">
                <Image src={imgSrc} alt={imgSrc + ' image'} fill={true} style={{ objectFit: 'cover' }}/>
            </figure>
            <div className="flex flex-col m-5">
                <h3 className="flex items-center flex-row text-black gap-5 mb-5">
                    <span className="text-2xl">
                        {title}
                    </span>
                    <span className= "text-sm">
                        {format(startDate, 'p')} - {format(endDate, 'p')}
                    </span>
                </h3>
                <p className="text-gray-300 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}