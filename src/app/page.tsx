"use client";
import { useEffect, useState } from "react";
import './globals.css';
import Card from './Card';
import cardsData from './cardsData.json';
import Image from "next/image";
import sponsors from '@/data/sponsors.json';

export default function Home() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0 });

  useEffect(() => {
    // Calculate the remaining time until September 11, 2024, 00:00 IST
    const targetDate = new Date("2024-09-11T00:00:00+05:30").getTime(); // 00:00 IST
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // Calculate remaining days and hours
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    // Update the countdown state
    setCountdown({
      days: Number(String(remainingDays).padStart(2, "0")),
      hours: Number(String(remainingHours).padStart(2, "0")),
    });

    // Update the countdown every second
    const interval = setInterval(() => {
      const newCurrentDate = new Date().getTime();
      const newTimeDifference = targetDate - newCurrentDate;
      const newRemainingDays = Math.floor(
        newTimeDifference / (1000 * 60 * 60 * 24)
      );
      const newRemainingHours = Math.floor(
        (newTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setCountdown({
        days: Number(String(newRemainingDays).padStart(2, "0")),
        hours: Number(String(newRemainingHours).padStart(2, "0")),
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Run this effect only once on component mount
  return (
    <main className="flex flex-col items-center justify-center">

      <div className="faded-dots w-full"></div>
      <div className="shape w-full"></div>
      {/* <div className="background-container w-full"> */}
      {/* </div> */}
      <section className="content flex flex-col items-center justify-center w-full">
        <div className="main-heading text-center flex flex-col items-center justify-center">
          <div className="heading-media heading-flex flex items-center justify-center">
            <img
              src="/logo.svg"
              alt="Open Tech Summit Logo"
              className="responsive-image max-w-[25%] max-h-[25%]"
            />
            <h1 className="text-3xl md:text-7xl font-bold">Open Tech Summit</h1>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="flex flex-col justify-center items-center bg-[#131415] px-10 max-w-[75%] py-6 rounded-2xl shadow-lg mt-8">
          {/* Date */}
          <h1 className="text-center md:pt-6">
            <span className="enlarge-text bg-white text-2xl md:text-4xl font-bold text-transparent bg-clip-text">11</span>
            <span className="enlarge-text bg-white text-2xl md:text-4xl text-transparent bg-clip-text">th</span>
            <span className="enlarge-text bg-white text-2xl md:text-4xl font-bold text-transparent bg-clip-text"> to 13</span>
            <span className="enlarge-text bg-white text-2xl md:text-4xl text-transparent bg-clip-text">th</span>
            <span className="enlarge-text bg-gradient-to-r from-white to-[#80d8de] text-2xl md:text-4xl font-bold text-transparent bg-clip-text"> September</span>
          </h1>
          {/* Countdown */}
          <div className="flex flex-row items-center justify-evenly text-transparent">
            <div className="bg-[#18181c] flex flex-col rounded-2xl items-center justify-center mr-2 md:mt-10 md:ml-5 md:mr-6 md:px-10 md:pt-5">
              <div className="bg-gradient-to-b from-white to-[#80d8de] text-transparent bg-clip-text flex flex-col items-center justify-center">
                <span className="my-2 mx-5 text-2xl md:text-5xl font-bold mb-2"> {countdown.days} </span>
                <span className="my-2 mx-5 text-base md:text-2xl font-bold mb-2"> Days </span>
              </div>
            </div>
            <div className="bg-[#18181c] flex flex-col rounded-2xl items-center justify-center ml-2 md:mt-10 md:ml-5 md:mr-6 md:px-10 md:pt-5">
              <div className="bg-gradient-to-b from-white to-[#80d8de] text-transparent bg-clip-text flex flex-col items-center justify-center">
                <span className="my-2 mx-5 text-2xl md:text-5xl font-bold mb-2"> {countdown.hours} </span>
                <span className="my-2 mx-5 text-base md:text-2xl font-bold mb-2"> Hours </span>
              </div>
            </div>
          </div>
          {/* Keep Me Updated Button */}
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="bg-gradient-to-r from-[#4fd4cd] to-[#275fe8] text-white rounded-lg md:mt-4 mb-8">
              {/* <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=OTS&details=Open Tech Summit 2024 IIIT-H&dates=20240911T103000/20240913T184500&location=IIIT Hyderabad"
                  className="hover:bg-blue-700 text-white font-bold py-2 md:px-4 rounded inline-block bg-gradient-to-r from-[#4fd4cd] to-[#275fe8] text-white"
                > */}
              <p className="px-5 py-2 text-sm md:text-2xl rounded-xl">Keep me updated</p>
              {/* </a> */}
            </div>
          </div>

        </div>

      </section>



      {/* Events */}
      <section className="p-30"><h2 className="text-center text-2xl md:text-4xl font-bold mb-8 pt-50">2 Days of Non-Stop Events</h2>
        <div className="flex flex-col w-full pl-8 lg:pl-16">

          <div className="cards-list mt-8">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                club={card.club}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>
      {/* About */}
      <div className="w-full mt-12 md:mt-24 px-4 py-10 flex flex-row flex-1">
        <div className="flex justify-center p-24">
          <img src='/ots_graphic.svg' alt="OTS Graphic" className="w-full" /></div>
        <div className="flex flex-col justify-center"><h2 className="bg-gradient-to-r from-white via-gray-300 to-gray-600 inline-block text-transparent bg-clip-text text-center text-2xl md:text-4xl font-bold mb-8"
>The goodness of all your favourite clubs!</h2><h2 className="bg-gradient-to-r from-white via-gray-300 to-gray-600 inline-block text-transparent bg-clip-text text-center text-2xl md:text-4xl font-bold mb-8">Packed into one MEGA Event</h2></div>

      </div>

      {/* Sponsors */}
      <section className="w-full mt-12 md:mt-24 px-4 bg-[#18181c] py-10">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">Our Past Sponsors</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="relative bg-[#000000] p-4 rounded-lg shadow-lg">
              <a href={sponsor.websiteURL} className="block w-full h-full">
                <Image src={sponsor.imageURL} alt={`${sponsor.name} Logo`} width={100} height={50} />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 opacity-0 flex justify-center items-center transition-opacity duration-300 hover:opacity-100 rounded-lg">
                  <p className="text-white text-center">{sponsor.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
