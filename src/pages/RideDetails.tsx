import { useState } from 'react';
import MobileScreen from '../components/MobileScreen';
import CalendarSelector from '../components/CalendarSelector';
import RideCard from '../components/RideCard';
import CarSeatIcon from '../components/CarSeatIcon';

import {
  ChevronLeft,
  SlidersVertical,
} from 'lucide-react';

import pessoa1 from '../assets/pessoa-1.jpg';
import pessoa2 from '../assets/pessoa-2.jpg';
import pessoa3 from '../assets/pessoa-3.jpg';
import pessoa4 from '../assets/pessoa-4.jpg';
import pessoa5 from '../assets/pessoa-5.jpg';
import motorista from '../assets/motorista.jpg';

const calendarDays = [
  { day: 26, month: 'May' },
  { day: 27, month: 'May' },
  { day: 28, month: 'May' },
  { day: 29, month: 'May' },
  { day: 30, month: 'May' },
];

function RideDetails() {
  const [selectedDay, setSelectedDay] = useState(28);

  return (
    <MobileScreen variant="blue">
      <section className="ride-details-screen">
        <header className="ride-header">

          <div className="ride-top-icons">
            <button type="button" className="icon-button">
              <ChevronLeft size={22} strokeWidth={2.2} />
            </button>

            <button type="button" className="icon-button">
              <SlidersVertical size={20} strokeWidth={2.2} />
            </button>
          </div>

          <h1>Ride</h1>

          <CalendarSelector
            days={calendarDays}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
        </header>

        <main className="ride-content">
          <RideCard
            origin="Chicago"
            destination="Oak Park"
            distance="Distance 15,8 km"
            startTime="20:00"
            endTime="22:30"
            passengerImages={[pessoa2, pessoa4]}
          />

          <RideCard
            origin="New York"
            destination="Park Avenue"
            distance="Distance 19,3 km"
            startTime="21:45"
            endTime="22:40"
            passengerImages={[pessoa5, pessoa3]}
            showFoodIcon={false}
            extraPassengerIcon={
              <span className="pink-passenger">
                <CarSeatIcon size={21} />
              </span>
            }
          />
        </main>
      </section>
    </MobileScreen>
  );
}

export default RideDetails;