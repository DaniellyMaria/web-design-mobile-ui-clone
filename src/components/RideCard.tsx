import type { ReactNode } from 'react';
import { Wifi, Briefcase, Utensils } from 'lucide-react';
import RouteInfo from './RouteInfo';

type RideCardProps = {
  origin: string;
  destination: string;
  distance: string;
  startTime: string;
  endTime: string;
  passengerImages: string[];
  showFoodIcon?: boolean;
  extraPassengerIcon?: ReactNode;
};

function RideCard({
  origin,
  destination,
  distance,
  startTime,
  endTime,
  passengerImages,
  showFoodIcon = true,
  extraPassengerIcon,
}: RideCardProps) {
  return (
    <article className="ride-card">
      <div className="ride-card-top">
        <div className="ride-icons">
          <span>
            <Wifi size={14} />
          </span>

          <span>
            <Briefcase size={14} />
          </span>

          {showFoodIcon && (
            <span>
              <Utensils size={14} />
            </span>
          )}
        </div>

        <div className="passengers">
          {extraPassengerIcon}

          {passengerImages.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`Passageiro ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <RouteInfo
        variant="ride"
        origin={origin}
        destination={destination}
        distance={distance}
        startTime={startTime}
        endTime={endTime}
      />
    </article>
  );
}

export default RideCard;