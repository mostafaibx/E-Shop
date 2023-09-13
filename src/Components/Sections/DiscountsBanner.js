import { Button, Container } from "react-bootstrap";
import "./DiscountsBanner.css";
import { useEffect, useState } from "react";

function DiscountBanner() {
  const [countDown, setCountDown] = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date("2023-09-22 23:59:59").getTime();
      const timeRemaining = targetDate - now;
      if (timeRemaining <= 0) {
        clearInterval(interval); // Stop the countdown when it reaches zero
        setCountDown({ day: 0, hour: 0, min: 0, sec: 0 });
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountDown({ day: days, hour: hours, min: minutes, sec: seconds });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container className="bg-dark d-flex flex-column flex-md-row mt-4 custom-container">
      <div className="text p-3">
        <h1>LAST CHANCE SALE!!</h1>
        <p>Unbeatable deals on everything you need to crush your goals.</p>
        <Button>Shop NOW</Button>
      </div>
      <div className="count-down border-top d-flex mx-4 ">
        <div className="day border-end mt-3">
          <h1>{countDown.day}</h1>
          <p>DAYS</p>
        </div>
        <div className="hour border-end mt-3">
          <h1>{countDown.hour}</h1>
          <p>HOURS</p>
        </div>
        <div className="min border-end mt-3">
          <h1>{countDown.min}</h1>
          <p>MINUTES</p>
        </div>
        <div className="sec mt-3">
          <h1>{countDown.sec}</h1>
          <p>SECONDS</p>
        </div>
      </div>
    </Container>
  );
}

export default DiscountBanner;
