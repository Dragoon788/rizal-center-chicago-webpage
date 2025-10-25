import Calendar from '@/app/components/EventsPage/calendar'
import EventCarousel from '@/app/components/EventsPage/eventCarousel'

// interface EventPageProps {

// }

export default function Events(){

  return(
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col md:flex-row h-2/3 w-full bg-blue-500 items-center">
        <Calendar />
        <EventCarousel />
      </div>
      {/* <Calendar /> */}
    </div>
  );
}