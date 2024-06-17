import { useState, useEffect } from 'react';

import Clock from "../components/Copyright.jsx";
import HomeApps from "../components/HomeApps.jsx";

function Home() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString('pt-BR', { hour12: false, zeroPad: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().toLocaleTimeString('pt-BR', { hour12: false, zeroPad: true }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Web Tools</h2>
      <HomeApps />
      <Clock hour={hour} />
    </>
  );
}

export default Home;
