import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

interface Props {
  name: string;
  description: string;
  image: StaticImageData;
}

function Card({ name, image, description }: Props) {
  return (
    <div className="cursor-pointer rounded-md overflow-hidden shadow-md mb-5 min-w-lg flex">
    
        <Image width={2000} height={200} src={image} alt="Coffee" objectFit="cover" />
   
      <div className="px-4 py-4 flex-shrink-0 w-96">
        <div className="font-medium mb-1">{name || "Coffee"}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}

const HowItWorks = () => {
  const screen1 = require("../public/static/screen1.png");
  const screen2 = require("../public/static/screen2.png");
  const screen4 = require("../public/static/screen4.png");

  return (
    <div className="w-full px-6 sm:px-10 py-9">
      <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
        <div className="mb-4">
          <h2 className="font-bold text-2xl">How HAPNIN works</h2>
        </div>

        <Swiper spaceBetween={100} breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}>
          <SwiperSlide>
            <Card image={screen1} description={findEventDesc} name={'Find Events'} />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={screen2} description={createEventDesc} name={'Create Events'} />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={screen4} description={attendEventDesc} name={'Host Events'} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};


const findEventDesc = "Looking for something to do in your local area? With HAPNIN, you can easily find events that match your interests and location. Whether you're into music, sports, or food, HAPNIN's user-friendly interface makes it easy to browse and discover new events that are happening near you. Simply search by category or location, and you'll be on your way to discovering new and exciting events in no time"
const createEventDesc = "Looking to bring people together for a fun and exciting event? HAPNIN makes it easy to host events that are tailored to your interests and goals. Whether you're planning a birthday party, charity event, or conference, HAPNIN provides all the tools and resources you need to create an engaging and successful event. From event promotion to ticket sales, HAPNIN has you covered every step of the way."
const attendEventDesc = "Love attending events, but hate the hassle of buying tickets and organizing logistics? With HAPNIN, attending events has never been easier. Our streamlined process lets you easily purchase tickets and coordinate with friends and family, so you can focus on enjoying the event itself. Plus, with helpful features like event reminders and in-app messaging, you'll always stay in the loop and be able to make the most of your event experience."


export default HowItWorks;