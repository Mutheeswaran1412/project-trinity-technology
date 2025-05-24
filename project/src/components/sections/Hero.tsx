import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

const bgImages = [
  "https://media.gettyimages.com/id/1182227329/video/4k-complex-connections-emerging-and-forming-a-network-loopable-artificial-intelligence.jpg?s=640x640&k=20&c=Hu507-xJNScp9BQ5DVKdh1acpUgVaMSrLLoU9kwtAh8=",
  "https://www.shutterstock.com/image-illustration/abstraction-composition-on-black-white-260nw-1905777484.jpg",
  "https://media.istockphoto.com/id/1265497626/vector/city-background-architectural-with-drawings-of-modern-for-use-web-magazine-or-poster-vector.jpg?s=612x612&w=0&k=20&c=AvE2cemK4jU6trdKWtcvxX7qS0EHK_69auFlYsnNn-o=",
  "https://t4.ftcdn.net/jpg/13/08/75/07/360_F_1308750716_DyeOEdIQFoHfD2hZLmZYkZOQhWaEMY4T.jpg",
  "https://media.istockphoto.com/id/1038737098/vector/glowing-ai-brain-network-vector-illustration.jpg?s=612x612&w=0&k=20&c=Z2vbMCmbKiQzimULCjbhA6OO2z4SZftBh8wr4iTuB7A="
];

const cardData = [
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg',
    alt: 'Data strategy',
    label: 'Data strategy',
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg',
    alt: 'Remote Work',
    label: 'Remote Work',
  },
  {
    type: 'image',
    src: 'https://www.shutterstock.com/image-photo/business-intelligence-concept-data-analysis-600nw-2301861865.jpg',
    alt: 'buisness Intelligence',
    label: 'buisness Intelligence',
  },
  {
    type: 'image',
    src: 'https://cdn.asp.events/CLIENT_Nineteen_F7A1E73F_5056_B725_6BE81DEAAC036B43/sites/The-Security-Event-2020/media/Pages/JOB3094W3575.jpg',
    alt: 'trinity Connect Live',
    label: 'trinity connect live',
  },
  {
    type: 'video',
    src: 'https://v.ftcdn.net/10/73/27/29/700_F_1073272989_QsQCWwaYeelXn3vGCKPgBHS14IZCfbH4_ST.mp4',
    alt: 'Team collabration',
    label: 'Team collabration',
  },
  {
    type: 'image',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyWl_I4oIokXwTymF12fhvjYN1ADPrEO9pA&s',
    alt: 'trinity Cloud Analytics',
    label: 'trinity Cloud Analytics',
  },
];

const cardGridStyles = [
  "row-start-1 col-start-2 h-[150px] w-[220px] mt-8",
  "row-start-1 col-start-3 h-[150px] w-[220px]",
  "row-start-2 col-start-1 h-[150px] w-[220px] -mt-8",
  "row-start-3 col-start-1 h-[150px] w-[220px] -mt-8",
  "row-span-2 col-start-2 row-start-2 h-[320px] w-[220px]",
  "row-span-2 col-start-3 row-start-2 h-[320px] w-[220px] -mt-8",
];


const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJtv2KX5wBcTHbVpmP2gSdySVtSbpG3pHaHn9Jyz022CCboo4O9mQWz1Eq6h_sPTqo1A&usqp=CAU",
  "https://www.getdbt.com/_next/image?url=%2Fimg%2Flogos%2Fdbt-labs-logo.svg&w=256&q=75",
  "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", // AWS logo added
];


const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-32 pb-16 min-h-screen overflow-hidden bg-white">
      {/* Animated background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
          opacity: 1, // Make background fully visible
        }}
      >
        <div className="absolute inset-0 bg-white/20" /> {/* Light overlay for readability */}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Logo Row */}
            <div className="flex items-center gap-4 bg-white rounded-full px-7 py-2 w-fit mb-16 mt-6 shadow-md border border-blue-900/40 backdrop-blur-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png"
                alt="Databricks"
                className="h-18 w-12 object-contain"
              />
              <span className="text-[#22396b] font-medium text-base tracking-wide">
                Trinity-databricks consulting partner
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-[#22396b]">
              Empowering Data-<span style={{ color: '#3d3dff' }}>Driven Decisions Across the Globe</span>
            </h1>
            <p
              className="text-xl mb-8 text-[#22396b]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Harnessing the power of data analytics to transform businesses in Oman, Netherlands, USA, and India.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-[#22396b] hover:bg-[#3d3dff] text-lg px-8 font-bold rounded-full"
              style={{ color: '#fff', width: '250px', height: '56px' }}
            >
              See What's Different
            </Button>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className={
                  cardGridStyles[idx] +
                  " rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col justify-end relative"
                }
              >
                {card.type === 'video' ? (
                  <video
                    src={card.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={card.poster}
                  />
                ) : (
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-base font-semibold px-4 py-3">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer section */}
        <div className="mt-16">
          <div className="text-center mb-20">
            <p
              className="text-lg mt-8 font-semibold"
              style={{ color: '#22396b', fontFamily: 'Roboto, sans-serif' }}
            >
              Trusted by industry leaders in data and analytics
            </p>
          </div>
        </div>

        {/* Moving Logo Carousel under the footer */}
        <section className="logo-carousel overflow-hidden relative pt- pb-5 mt-0">
          <div className="w-full">
            <div className="logo-track flex items-center gap-16 w-max">
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
                  loading="eager"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;