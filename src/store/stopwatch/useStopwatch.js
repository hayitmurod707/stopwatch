import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSeconds } from './index';
const useStopwatch = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      const interval = setInterval(() => dispatch(updateSeconds()), 10);
      return () => clearInterval(interval);
   }, [dispatch]);
};
export default useStopwatch;
