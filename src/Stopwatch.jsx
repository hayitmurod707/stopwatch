import { useDispatch, useSelector } from 'react-redux';
import { reset, restart, resume, start, stop } from './store/stopwatch';
import { getStopwatch } from './store/stopwatch/selectors';
const Stopwatch = () => {
   const dispatch = useDispatch();
   const { hours, minutes, seconds, totalSeconds, state } =
      useSelector(getStopwatch);
   return (
      <div
         style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            width: '100%',
         }}
      >
         <div>
            <h1>Stopwatch</h1>
            <h2>
               {String(hours).padStart(2, '0')}:
               {String(minutes).padStart(2, '0')}:
               {String(seconds).padStart(2, '0')}
            </h2>
            <h2>{totalSeconds}</h2>
            <h2>{state}</h2>
         </div>
         <div>
            <button onClick={() => dispatch(start())}>Start</button>
            <button onClick={() => dispatch(stop())}>Stop</button>
            <button onClick={() => dispatch(resume())}>Resume</button>
            <button onClick={() => dispatch(restart())}>Restart</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
         </div>
      </div>
   );
};
export default Stopwatch;
