import { createSelector } from 'reselect';
export const getTimer = createSelector(
   [state => state?.timer],
   (timer = {}) => {
      const seconds = timer?.seconds || 0;
      const state = timer?.state?.state;
      const totalSeconds = Math.floor(seconds / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const newSeconds = Math.floor((seconds / 1000) % 60);
      const isRunning = ['START', 'RESUME', 'RESTART'].includes(state);
      const newTimer = {
         days,
         hours,
         isRunning,
         minutes,
         seconds: newSeconds,
         state,
         totalSeconds,
      };
      return newTimer;
   }
);
