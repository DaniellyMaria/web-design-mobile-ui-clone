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
  const prefix = variant === 'ride' ? 'ride-' : '';

  return (
    <div className={`${prefix}route`}>
      <div className={`${prefix}route-line`}>
        <span className={variant === 'ride' ? 'ride-dot filled' : 'dot filled'}></span>
        <span className={variant === 'ride' ? 'ride-line' : 'line'}></span>
        <span className={variant === 'ride' ? 'ride-dot' : 'dot'}></span>
      </div>

      <div className={variant === 'ride' ? 'ride-route-info' : 'route-content'}>
        <div>
          <h4>{origin}</h4>
          <span>{distance}</span>
        </div>

        <div>
          <h4>{destination}</h4>
        </div>
      </div>

      <div className={variant === 'ride' ? 'ride-route-times' : 'route-times'}>
        <span>{startTime}</span>
        <span>{endTime}</span>
      </div>
    </div>
  );
}

export default RouteInfo;