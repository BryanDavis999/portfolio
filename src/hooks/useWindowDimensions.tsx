import { useState, useEffect, useLayoutEffect } from 'react';

interface windowProps {
    innerWidth: number;
    innerHeight: number;
}

const getWindowDimensions = (window: windowProps) => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});
  
  //See if below can be refactored in NextJS
  useEffect(() => setWindowDimensions(getWindowDimensions(window)), []);

  useLayoutEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions(window));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions