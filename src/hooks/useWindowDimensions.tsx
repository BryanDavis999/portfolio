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
  const handleResize = () => setWindowDimensions(getWindowDimensions(window));

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions