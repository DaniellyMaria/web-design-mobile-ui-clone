import MobileScreen from '../components/MobileScreen';
import ProfileHeader from '../components/ProfileHeader';
import ActionButton from '../components/ActionButton';
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
        <ActionButton icon={<Car size={20} />} label="Ride" active />
        <ActionButton icon={<Mail size={20} />} label="Message" />
        <ActionButton icon={<Heart size={20} />} label="Rating" />
        <ActionButton icon={<Activity size={20} />} label="My feed" />
      </section>

      <RideRequestCard passengerImage={pessoaImg} />
    </MobileScreen>
  );
}

export default NewRideRequest;