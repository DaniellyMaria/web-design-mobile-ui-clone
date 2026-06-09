import { useState } from 'react';
import MobileScreen from '../components/MobileScreen';
import ActionButton from '../components/ActionButton';
import ProfileHeader from '../components/ProfileHeader';
import RideRequestCard from '../components/RideRequestCard';

import {
  BellDot,
  Menu,
  Car,
  Mail,
  Heart,
  Activity,
} from 'lucide-react';

import motoristaImg from '../assets/motorista.jpg';
import pessoaImg from '../assets/pessoa-1.jpg';

function NewRideRequest() {
  const [activeAction, setActiveAction] = useState('Ride');

  return (
    <MobileScreen>
      <div className="top-bar">
        <Menu size={24} />
        <BellDot size={22} />
      </div>

      <ProfileHeader
        image={motoristaImg}
        name="Daniel Quite"
        phone="+29 0278 3850"
        role="Driver"
      />

      <section className="actions-row">
        <ActionButton
          icon={<Car size={20} />}
          label="Ride"
          active={activeAction === 'Ride'}
          onClick={() => setActiveAction('Ride')}
        />

        <ActionButton
          icon={<Mail size={20} />}
          label="Message"
          active={activeAction === 'Message'}
          onClick={() => setActiveAction('Message')}
        />

        <ActionButton
          icon={<Heart size={20} />}
          label="Rating"
          active={activeAction === 'Rating'}
          onClick={() => setActiveAction('Rating')}
        />

        <ActionButton
          icon={<Activity size={20} />}
          label="My feed"
          active={activeAction === 'My feed'}
          onClick={() => setActiveAction('My feed')}
        />
      </section>

      <RideRequestCard passengerImage={pessoaImg} />
    </MobileScreen>
  );
}

export default NewRideRequest;