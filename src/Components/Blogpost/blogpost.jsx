import React from 'react'
import { useTranslation } from 'react-i18next'
import image1 from '../../assets/Blob.jpg'
import image2 from '../../assets/blogpost2.jpg' 
import image3 from '../../assets/blogpost1.png'

const Blogpost = () => {
  const { t } = useTranslation()

  const blogPosts = [
    { image: image1, title: 'businessSuccess', alt: "Business Success" },
    { image: image2, title: 'marketingStrategy', alt: "Marketing Strategy" },
    { image: image3, title: 'aiMinds', alt: "AI Minds" }
  ]

  return (
    <div className="w-full mt-24">
      <div className="flex flex-col md:flex-row justify-between items-stretch">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full md:w-1/3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-2xl mb-6 md:mb-0 md:mx-2">
            <img 
              className="w-full h-64 object-cover rounded-t-xl" 
              src={post.image} 
              alt={post.alt}
            />
            <div className="p-6">
              <h2 className="font-sans font-medium text-2xl mb-4">{t(post.title)}</h2>
              <div className="text-right">
                <a
                  role="button"
                  href="#"
                  className="inline-block text-gray-500 border border-gray-300 bg-white px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300"
                >
                  {t('readMore')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogpost