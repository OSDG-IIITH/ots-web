import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <div className="background-container">
        <div className="content flex justify-center w-full">
          <div className="main-heading text-center w-full flex items-center justify-center mt-8">
            <div className="heading-flex flex items-center justify-center">
              <img src="/ots.svg" alt="Open Tech Summit Logo" className="w-24 h-24 -mr-2" />
              <h1 className="text-2xl md:text-5xl font-bold ml-4">Open Tech Summit</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
