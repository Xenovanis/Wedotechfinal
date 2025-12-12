import React from "react";
import pattern from "../assets/ErrorPage/pattern.png";
import newspaper from "../assets/ErrorPage/newspaper.png";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      
      {/* 404 Number with image over the 0 */}
      <div className="relative z-10 h-[130px] flex justify-center items-end">
        <h1 className="text-[100px] sm:text-[120px] font-black text-[#0A0F1F] leading-none tracking-tight relative">
          404

          {/* Newspaper image centered on 0 */}
          <img
            src={newspaper}
            alt="Newspaper"
            className="absolute top-[15%] left-1/2 -translate-x-1/2 w-14 sm:w-16"
          />
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-xl sm:text-2xl font-semibold mt-4 text-[#0A0F1F]">
        THIS PAGE IS NOT AVAILABLE
      </p>

      {/* Action buttons */}
      <div className="mt-8 flex gap-6 items-center justify-center flex-wrap">
        <button
          onClick={() => window.history.back()}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Go back
        </button>
        <a
          href="/contact"
          className="text-[#0A0F1F] underline hover:text-gray-700 transition"
        >
          Contact Support
        </a>
      </div>

      {/* Pattern in bottom-right corner */}
      <div className="absolute -bottom-7 -right-7 z-0 w-[150px] md:w-[220px] opacity-50 pointer-events-none">
        <img src={pattern} alt="Pattern" />
      </div>
    </div>
  );
}
