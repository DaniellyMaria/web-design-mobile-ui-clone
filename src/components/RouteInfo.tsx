type RouteInfoProps = {
  origin: string;
  destination: string;
  distance: string;
  startTime: string;
  endTime: string;
  variant?: 'request' | 'ride';
};

function RouteInfo({
  origin,
  destination,
  distance,
  startTime,
  endTime,
  variant = 'request',
}: RouteInfoProps) {
  if (variant === 'ride') {
    return (
      <div className="ride-route-card">
        <div className="ride-stop">
          <div className="ride-marker">
            <span className="ride-dot filled"></span>
            <span className="ride-line"></span>
          </div>

          <div className="ride-place">
            <h4>{origin}</h4>
            <span>{distance}</span>
          </div>

          <span className="ride-time">{startTime}</span>
        </div>

        <div className="ride-stop">
          <div className="ride-marker">
            <span className="ride-dot"></span>
          </div>

          <div className="ride-place">
            <h4>{destination}</h4>
          </div>

          <span className="ride-time">{endTime}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="route">
      <div className="route-line">
        <span className="dot filled"></span>
        <span className="line"></span>
        <span className="dot"></span>
      </div>

      <div className="route-content">
        <div>
          <h4>{origin}</h4>
          <span>{distance}</span>
        </div>

        <div>
          <h4>{destination}</h4>
        </div>
      </div>

      <div className="route-times">
        <span>{startTime}</span>
        <span>{endTime}</span>
      </div>
    </div>
  );
}

export default RouteInfo;