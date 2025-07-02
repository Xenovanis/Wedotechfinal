
import wedotechwhyuslogo from '../../assets/wedotechwhyuslogo.png' // Adjust path as needed

const Wedotechwhy = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 py-16 bg-white">
      
      <img
        src={wedotechwhyuslogo}
        alt="Why us"
        className="mb-8 w-400 h-full"
      />

      {/* Description text */}
      <p className="max-w-4xl text-gray-600 text-lg md:text-xl font-normal leading-relaxed">
        WeDoTech is a full-service media agency that helps businesses drive sustainable growth in the new world of marketing.
        With a rich heritage in performance, we apply that mindset to everything we do; brand planning, strategy, integrated
        media, social, creative, and data.
      </p>
    </div>
  )
}

export default Wedotechwhy
