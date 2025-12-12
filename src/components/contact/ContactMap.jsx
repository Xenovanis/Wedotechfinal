import React from "react";
import img from '../../assets/Contact/mapbackground.png';

export default function ContactMap() {
  return (
    <div className="flex justify-center items-center min-h-screen px-[50px]">
      <div className="relative w-full max-w-[1320px]">
        <img
          src={img}
          alt="Map showing our location"
          className="mx-auto h-auto object-cover"
        />

        <div className="absolute inset-0 flex items-start justify-center lg:mt-16 p-4">
          <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-2xl z-10 mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">Where to find us</h2>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition-colors">
                  Rabat Location
                </button>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <p className="text-gray-600">
                  Avenue Moulay Hassan
                  <br />
                  Hassan, Rabat
                </p>
                <a href="tel:+212697741937" className="text-gray-600 block mt-1">
                  +212 6 97 74 19 37
                </a>
                <a
                  href="https://maps.app.goo.gl/yEQqv3rx3diRrTuG6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black text-white px-6 py-2 rounded-full mt-2 font-semibold hover:bg-gray-800 transition-colors">
                    View location
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
