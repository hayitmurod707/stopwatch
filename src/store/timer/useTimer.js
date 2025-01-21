import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setExpireTimeStamp, updateSeconds } from './index';
const useTimer = ({ expireTimeStamp = 20000, onExpire }) => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(setExpireTimeStamp(expireTimeStamp));
   }, [expireTimeStamp, dispatch]);
   useEffect(() => {
      const interval = setInterval(() => dispatch(updateSeconds(onExpire)), 10);
      return () => clearInterval(interval);
   }, [dispatch, onExpire]);
};
export default useTimer;
