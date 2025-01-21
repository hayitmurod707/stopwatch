import { Fragment } from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import useStopwatch from './store/stopwatch/useStopwatch';
import useTimer from './store/timer/useTimer';
const App = () => {
   useStopwatch();
   useTimer(20 * 1000);
   return (
      <Fragment>
         <Timer />
         <Stopwatch />
      </Fragment>
   );
};
export default App;
