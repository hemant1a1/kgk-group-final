import Image from "next/image";
import thumb1 from "@/assets/images/u-event.png";

export default function UpcomingEvents() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-y-4 lg:gap-y-0 items-start">
          {/* Left: Event Image */}
          <div className="relative pt-[48px]">
            <div className="absolute -left-14 top-0 w-2/3 h-[124px] bg-gray-100 rounded-tr-lg rounded-br-lg z-0"></div>

            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[587px] rounded-xl overflow-hidden">
              <Image
                src={thumb1}
                alt="Event Group"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Event Details */}
          <div className=" lg:pl-24 lg:pr-12 pt-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-7">
                Upcoming Events
            </h2>
             <p className="max-w-2xl text-xl mb-5  leading-relaxed">
              Showcasing at global jewellery exhibitions, connecting with trade professionals and consumers alike.
            </p>
            <div className="flex items-center">
              <div className="flex-grow h-0.5 bg-light-gray mr-6"></div>
              <button className="bg-primary text-white text-sm rounded-full px-5 py-2">
                SEE ALL
              </button>
            </div>
              
           
           
            <div className="mt-14">
              <h3 className="font-cardo text-2xl font-normal">
                Celebrating Years of Commitment at <span></span>
              </h3>
              <p className="font-cardo text-2xl font-normal italic mt-1">
                “Long Service Appreciation Event”, 
              </p>
              <p className="font-cardo text-2xl font-normal mt-1">KGK Namibia</p>

              <p className="mt-4 mb-6 max-w-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              <button className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
