import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import stopwatch from './stopwatch';
import timer from './timer';
const host = window.location.host;
const devTools =
   process.env.REACT_APP_HOST === host
      ? false
      : process.env.REACT_APP_TEST_HOST === host
      ? true
      : false; // view for redux development logs
const store = configureStore({
   devTools,
   reducer: { stopwatch, timer },
   middleware: getDefaultMiddleware => {
      if (devTools) {
         return getDefaultMiddleware({ serializableCheck: false }).concat(
            logger
         );
      } else {
         return getDefaultMiddleware({ serializableCheck: false });
      }
   },
});
export default store;
