import React from 'react';
import vid from '../assets/video.mp4'
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Hero = () => {
    return (
      <>
      <Navbar></Navbar>
        <div className="relative h-screen w-screen overflow-hidden bg-gray-900 text-white flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    />
            </div>

            <div className="relative z-10 text-center px-6 md:px-12">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-pulse">
                    <span
                        style={{
                            background: 'linear-gradient(90deg, #399918 0%, #BEDC74 50%, #6C946F 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                          }}
                          >
                        Welcome To The Future of Farming
                    </span>
                </h1>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
    <Link to="/home" className="bt px-4 py-2 font-bold text-md rounded-lg transition ease-in-out transform hover:scale-105 hover:shadow-lg">
        <button style={{
            background: 'linear-gradient(90deg, #A8E063 0%, #56AB2F 50%, #A8E063 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '20px',
            padding: '8px 16px',
            borderRadius: '10px',
            boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #56AB2F 0%, #A8E063 100%)';
            e.currentTarget.style.color = '#000';
        }}>
            Get Started
        </button>
    </Link>
    <Link to="/home" className="bt px-4 py-2 font-bold text-md rounded-lg transition ease-in-out transform hover:scale-105 hover:shadow-lg">
        <button style={{
            background: 'linear-gradient(90deg, #A8E063 0%, #56AB2F 50%, #A8E063 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '20px',
            padding: '8px 16px',
            borderRadius: '10px',
            boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #56AB2F 0%, #A8E063 100%)';
            e.currentTarget.style.color = '#000';
        }}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
            Learn More
        </button>
    </Link>
</div>


            </div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-20 top-1/3 w-48 h-48 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute -right-20 top-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute left-1/3 -bottom-10 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>
        </div>
                          </>
    );
};

export default Hero;