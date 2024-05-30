import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../../../public/assets/images/logo.png";

const Custom404: React.FC = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000); 

    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 10000);
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <>
      <div className='flex items-center justify-center h-screen w-full bg-custom-bg bg-cover text-white md:flex-row flex-col'>
        <div className='flex justify-center items-start flex-col h-full'>
          <h1 className='text-5xl font-semibold my-10'>
            Oops!! You ran out of Oxygen.
          </h1>
          <p className='text-xl text-gray-300 font-semibold'>
            The page you are looking for is now beyond our reach.
          </p>
          <p className='text-xl text-gray-300 font-semibold'>
            Let's get you ..{" "}
          </p>
          <h1 className='my-10 text-xl font-semibold'>Back Home in {counter} seconds</h1>
        </div>
        <div>
          <img
            src={image}
            alt=''
            className='absolute md:top-16 md:right-60 md:w-60 w-40'
          />
          <h1 className=' text-[10rem] md:text-[17rem] font-bold'>404</h1>
        </div>
      </div>
    </>
  );
};

export default Custom404;