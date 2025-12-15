import React from "react";

import mongodbLogo from "../../assets/logo/mongodb.png";
import googleLogo from "../../assets/logo/google.png";
import microsoftLogo from "../../assets/logo/microsoft.png";
import metaLogo from "../../assets/logo/meta.png";

const SwiperSponsors = () => {
  const logos = [
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Google", logo: googleLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Meta", logo: metaLogo },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Slider */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation (Vite-safe) */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SwiperSponsors;
