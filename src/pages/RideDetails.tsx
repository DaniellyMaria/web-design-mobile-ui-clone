import { useState } from 'react';
import MobileScreen from '../components/MobileScreen';
import CalendarSelector from '../components/CalendarSelector';
import RideCard from '../components/RideCard';

import {
  ArrowLeft,
  SlidersHorizontal,
  MapPin,
} from 'lucide-react';

import pessoa1 from '../assets/pessoa-1.jpg';
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
            <ArrowLeft size={22} />
            <SlidersHorizontal size={22} />
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
            passengerImages={[pessoa1, motorista]}
          />

          <RideCard
            origin="New York"
            destination="Park Avenue"
            distance="Distance 19,3 km"
            startTime="21:45"
            endTime="22:40"
            passengerImages={[motorista, pessoa1]}
            showFoodIcon={false}
            extraPassengerIcon={
              <span className="pink-passenger">
                <MapPin size={14} />
              </span>
            }
          />
        </main>
      </section>
    </MobileScreen>
  );
}

export default RideDetails;