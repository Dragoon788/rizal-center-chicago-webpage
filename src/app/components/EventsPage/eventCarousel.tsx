import EventCard from "./eventCard"

// interface EventCarouselProps {
    
// }

export default function EventCarouselProps () {

    return(
        <div className="w-full h-full m-5">
            <h2 className="text-4xl font-bold text-black mb-5 mt-5">
                Upcoming Events
            </h2>
            <div className="flex gap-5 h-full w-full flex-col overflow-x-hidden overflow-y-scroll divide-y-2 divide-gray-300">
                <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/>
                <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/>
                <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/>
                <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/>
            </div>
        </div>

    );
}