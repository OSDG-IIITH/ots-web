"use client";
import { useEffect, useState } from "react";
import './globals.css';
import Card from './Card';
import cardsData from '@/data/cardsData.json';
import Image from "next/image";
import sponsors from '@/data/sponsors.json';
import carouselData from '@/data/carouselData.json';

export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const actualImagesToShow = carouselData.slice(1, -1);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselData.length - 2 ? 1 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const [countdown, setCountdown] = useState({ days: 0, hours: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-09-11T00:00:00+05:30").getTime(); // 00:00 IST
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setCountdown({
      days: String(remainingDays).padStart(2, "0"),
      hours: String(remainingHours).padStart(2, "0"),
    });
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
        days: String(newRemainingDays).padStart(2, "0"),
        hours: String(newRemainingHours).padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex flex-col items-center justify-center">

      <div className="faded-dots w-full"></div>
      <div className="shape w-full"></div>
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
              {/* To Add: Link Not Working */}
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
      <section className="p-8 md:p-30">
        <h2 className="flex items-center justify-center text-2xl md:text-4xl font-bold mt-8 md:mt-24">
          2 Days of Non-Stop Events
        </h2>
        <div className="flex flex-wrap justify-center w-full mt-8 gap-4">
          {cardsData.map((card, index) => (
            <div className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card
                key={index}
                title={card.title}
                club={card.club}
                description={card.description}
                icon={card.icon}
              />
            </div>
          ))}
        </div>
      </section>


      {/* About */}
      <div className="w-full px-4 py-10 flex flex-row flex-1">
        <div className="flex justify-center">
          <img src='/ots_graphic.svg' alt="OTS Graphic" className="w-full" /></div>
        <div className="flex flex-col justify-center"><h2 className="bg-gradient-to-r from-white via-gray-300 to-gray-600 inline-block text-transparent bg-clip-text text-center text-2xl md:text-4xl font-bold mb-8"
>The goodness of all your favourite clubs!</h2><h2 className="bg-gradient-to-r from-white via-gray-300 to-gray-600 inline-block text-transparent bg-clip-text text-center text-2xl md:text-4xl font-bold mb-8">Packed into one MEGA Event</h2></div>

      </div>

      {/* Sponsors */}
      <section className="w-full px-4 bg-[#18181c] py-10">
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

      {/* Background section */}
      <div className="globes w-full"></div>
      
      {/* Image Catalog */}
      <section className="mt-16">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">Let's Recreate These Great Moments!</h2> 
        <div className="carousel">
            {carouselData.map((currentImage, index) => {
                const adjustedIndex = index - 1;
                const isCurrentImage = adjustedIndex === currentImageIndex - 1;
                const isPrevImage = adjustedIndex === currentImageIndex - 2;
                const isNextImage = adjustedIndex === currentImageIndex;

                return (
                    <img
                        key={currentImage.index}
                        src={currentImage.imageLink}
                        alt={`Image ${index + 1}`}
                        className={`carousel-image ${isPrevImage ? 'prev' : isCurrentImage ? 'current' : isNextImage ? 'next' : ''}`}
                    />
                );
            })}
        </div>
        <div className="carousel-dots">
            {actualImagesToShow.map((_, index) => (
                <div
                    key={index}
                    className={`carousel-dot ${index + 1 === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index + 1)}
                ></div>
            ))}
        </div>
      </section>
      {/* Footer */}
      <section className="bg-[#18181c] mt-12 w-full pt-16 py-4">
        <div className="flex flex-row items-center justify-center">
          <a href="https://www.instagram.com/osdg.iiith" target="_blank" className="instagram h-8 w-8 md:h-16 md:w-16 mx-2"> </a>
          <a href="https://www.linkedin.com/company/74330374" target="_blank" className="linkedin h-8 w-8 md:h-16 md:w-16 mx-2"> </a>
          <a href="https://discord.com/invite/wRpUHeJrmM" target="_blank" className="discord h-8 w-8 md:h-16 md:w-16 mx-2"> </a>
        </div>
        <p className="flex justify-center items-center text-sm md:text-base mt-9 md:mt-18">
          All Rights Reserved @OSDG 2024
        </p>
      </section>
    </main>
  );
}
