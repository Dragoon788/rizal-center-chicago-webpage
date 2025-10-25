import Calendar from '@/app/components/EventsPage/calendar'
import EventCard from '@/app/components/EventsPage/eventCard'

// interface EventPageProps {

// }

export default function Events(){

  return(
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col md:flex-row h-4/5 w-full bg-blue-500 items-center">
        <Calendar />
        <div className="flex h-full flex-col divide-solid divide-gray-500">
          <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/>
          <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/>
          {/* <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/> */}
          {/* <EventCard imgSrc={"/RizalPhoto1.jpg"} title={"HG Boxing"} description={"Join our boxing class at the Rizal Center"} startDate={new Date(2025, 10, 25, 12, 30)} endDate={new Date(2025, 10, 25, 13, 30)}/> */}

        </div>
      </div>
      {/* <Calendar /> */}
    </div>
  );
}