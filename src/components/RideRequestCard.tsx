import { Flame, Zap } from 'lucide-react';
import RouteInfo from './RouteInfo';

type RideRequestCardProps = {
  passengerImage: string;
};

function RideRequestCard({ passengerImage }: RideRequestCardProps) {
  return (
    <section className="ride-request-card">
      <h3>New ride request!</h3>

      <div className="request-user-row">
        <div className="request-icons">
          <span>
            <Zap size={16} strokeWidth={2.5} />
          </span>

          <span>
            <Flame size={16} strokeWidth={2.5} />
          </span>
        </div>

        <div className="request-user">
          <div className="request-user-text">
            <strong>Jeck, N.</strong>
            <span>158 ratings</span>
          </div>

          <img
            src={passengerImage}
            alt="Passageiro"
            className="request-user-img"
          />
        </div>
      </div>

      <div className="request-header">
        <div>
          <span className="date">25 May, 2019</span>
          <p>1 seat</p>
        </div>

        <strong>50 $</strong>
      </div>

      <RouteInfo
        origin="Chicago"
        destination="Oak Park"
        distance="Distance 15,8 km"
        startTime="20:00"
        endTime="22:30"
      />

      <div className="bottom-actions">
        <button className="decline-button">Decline</button>
        <button className="accept-button">Accept</button>
      </div>
    </section>
  );
}

export default RideRequestCard;