import Calendar from '@/app/components/EventsPage/calendar'

// interface EventPageProps {

// }

export default function Events(){

  return(
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-4/5 w-full bg-blue-500">
        <Calendar />
      </div>
      {/* <Calendar /> */}
    </div>
  );
}