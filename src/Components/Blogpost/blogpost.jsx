import React from 'react'
import image1 from '../../assets/blogpost1.jpg'
import image2 from '../../assets/blogpost2.jpg' 
import image3 from '../../assets/blogpost3.jpg'

const Blogpost = () => {
  return (
    <div className="w-full mt-20">
    <div className="flex flex-col md:flex-row justify-between items-stretch">
      {/* Card 1 */}
      <div className="w-full md:w-1/3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-2xl mb-6 md:mb-0 md:mr-4">
        <img 
          className="w-full h-64 object-cover rounded-t-xl" 
          src={image1} 
          alt="AI Minds"
        />
        <div className="p-6">
          <h2 className="font-sans font-medium text-2xl mb-4">AI Minds: Blowing Bots that we provide</h2>
          <div className="text-right">
            <a
              role="button"
              href="#"
              className="inline-block text-gray-500 border border-gray-300 bg-white px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-1/3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-2xl mb-6 md:mb-0 md:mx-2">
        <img 
          className="w-full h-64 object-cover rounded-t-xl" 
          src={image2} 
          alt="AI Minds"
        />
        <div className="p-6">
          <h2 className="font-sans font-medium text-2xl mb-4">AI Minds: Blowing Bots that we provide</h2>
          <div className="text-right">
            <a
              role="button"
              href="#"
              className="inline-block text-gray-500 border border-gray-300 bg-white px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-1/3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-2xl md:ml-4">
        <img 
          className="w-full h-64 object-cover rounded-t-xl" 
          src={image3}
          alt="AI Minds"
        />
        <div className="p-6">
          <h2 className="font-sans font-medium text-2xl mb-4">AI Minds: Blowing Bots that we provide</h2>
          <div className="text-right">
            <a
              role="button"
              href="#"
              className="inline-block text-gray-500 border border-gray-300 bg-white px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blogpost