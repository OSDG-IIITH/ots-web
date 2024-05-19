import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="background-container w-full">
        <div className="content flex flex-col items-center justify-center w-full">
          <div className="main-heading text-center flex items-center justify-center mt-8">
            <div className="heading-media heading-flex flex items-center justify-center mt-8 md:p-24">
              <img src="/ots.svg" alt="Open Tech Summit Logo" className=" responsive-image max-w-full max-h-full"/>
              <h1 className="text-5xl md:text-7xl font-bold ml-4">Open Tech Summit</h1>
            </div>
          </div>
          {/* Countdown Timer */}
          <div className="flex flex-col justify-center items-center bg-[#131415] px-10 py-6 rounded-2xl shadow-lg mt-12">
            {/* Date */}
            <h1 className="text-center pt-6 mx-10">
              <span className="bg-white text-4xl font-bold text-transparent bg-clip-text">11</span>
              <span className="bg-white text-4xl text-transparent bg-clip-text">th</span>
              <span className="bg-white text-4xl font-bold text-transparent bg-clip-text"> to 13</span>
              <span className="bg-white text-4xl text-transparent bg-clip-text">th</span>
              <span className="bg-gradient-to-r from-white to-[#80d8de] text-4xl font-bold text-transparent bg-clip-text"> September</span>
            </h1>
            {/* Countdown */}
            <div className="flex flex-row items-center justify-evenly text-transparent">
              <div className="bg-[#18181c] flex flex-col rounded-2xl items-center justify-center mt-10 ml-5 mr-6 mb-10 px-10 pt-5 pb-2">
                <div className="bg-gradient-to-b from-white to-[#80d8de] text-transparent bg-clip-text flex flex-col items-center justify-center">
                  <span className="my-2 mx-5 text-5xl font-bold mb-2"> 90 </span>
                  <span className="my-2 mx-5 text-lg font-bold mb-2"> Days </span>
                </div>
              </div>
              <div className="bg-[#18181c] flex flex-col rounded-2xl items-center justify-center mt-10 ml-6 mr-5 mb-10 px-10 pt-5 pb-2">
                <div className="bg-gradient-to-b from-white to-[#80d8de] text-transparent bg-clip-text flex flex-col items-center justify-center">
                  <span className="my-2 mx-5 text-5xl font-bold mb-2"> 13 </span>
                  <span className="my-2 mx-5 text-lg font-bold mb-2"> Hours </span>
                </div>
              </div>
            </div>
            {/* Keep Me Updated Button */}
            <div className="flex flex-col items-center justify-center mt-5">
              <div className="bg-gradient-to-r from-[#4fd4cd] to-[#275fe8] text-white rounded-lg mb-8">
                <p className="px-5 py-2 text-base">Keep Me Updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
