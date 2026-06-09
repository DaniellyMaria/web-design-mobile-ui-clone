import './App.css';

import NewRideRequest from './pages/NewRideRequest';
import RideDetails from './pages/RideDetails';

function App() {
  return (
    <main className="app">
      <section className="screens-wrapper">
        <NewRideRequest />
        <RideDetails />
      </section>
    </main>
  );
}

export default App;