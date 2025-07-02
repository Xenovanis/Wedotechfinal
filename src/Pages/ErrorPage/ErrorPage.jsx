import React from 'react';
import Errorimg from '../../assets/404.png'

function ErrorPage() {
  return (
   <div className="h-screen bg-yellow-400 flex items-center justify-center">
  <main className="text-center px-6 py-24">
    <p className="mb-6">
      <img 
        src={Errorimg} 
        alt="404 Error" 
        className="w-80 mx-auto transform translate-x-6" 
      /> {/* Larger image, shifted right */}
    </p>
    <h1 className="text-3xl font-bold tracking-tight text-black sm:text-5xl">
      Page not found
    </h1>
    <p className="mt-4 text-lg font-medium text-black">
      Sorry, we couldn’t find the page you’re looking for.
    </p>
    <div className="mt-8 flex items-center justify-center gap-x-6">
      <a
        href='/home'
        className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 hover:text-black"
      >
        Go back home
      </a>
      <a href='/contact' className="text-sm font-semibold text-black hover:underline">
        Contact support <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </main>
</div>

  );
}

export default ErrorPage;
