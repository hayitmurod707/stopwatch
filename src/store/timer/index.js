import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   seconds: 0,
   expireTimeStamp: 10 * 1000,
   state: 'INITIAL',
   started_date: null,
   stopped_date: null,
};
export const timer = createSlice({
   initialState,
   name: 'timer',
   reducers: {
      setExpireTimeStamp(state, { payload }) {
         state.expireTimeStamp = payload;
      },
      updateSeconds(state) {
         const { state: stopwatchState, started_date, stopped_date } = state;
         const current_date = new Date().getTime();
         const seconds =
            stopwatchState === 'START'
               ? current_date - started_date
               : stopwatchState === 'STOP'
               ? stopped_date - started_date
               : stopwatchState === 'INITIAL'
               ? 0
               : stopwatchState === 'RESTART'
               ? current_date - started_date
               : current_date - started_date;
         state.seconds = seconds;
      },
      start(state) {
         const stopwatchState = state?.state;
         const started_date = new Date().getTime();
         const isInitialState = ['INITIAL'].includes(stopwatchState);
         const newState = isInitialState
            ? {
                 started_date,
                 state: 'START',
                 stopped_date: null,
              }
            : state?.state;
         state.state = newState;
      },
      stop(state) {
         const stopwatchState = state?.state;
         const started_date = state?.started_date || 0;
         const stopped_date = new Date().getTime();
         const runningStates = ['START', 'RESTART', 'RESUME'];
         const isRunning = runningStates.includes(stopwatchState);
         const newState = isRunning
            ? {
                 started_date,
                 state: 'STOP',
                 stopped_date,
              }
            : state?.state;
         state.state = newState;
      },
      resume(state) {
         const stopwatchState = state?.state;
         const seconds = state?.seconds || 0;
         const startedDate = new Date().getTime() - seconds;
         const newStartedDate = new Date(startedDate).getTime();
         const isStopped = ['STOP'].includes(stopwatchState);
         const newState = isStopped
            ? {
                 started_date: newStartedDate,
                 state: 'RESUME',
                 stopped_date: null,
              }
            : state?.state;
         state.state = newState;
      },
      reset(state) {
         const stopwatchState = state?.state;
         const started_date = new Date().getTime();
         const newState =
            stopwatchState === 'INITIAL'
               ? state?.state
               : {
                    started_date,
                    state: 'INITIAL',
                    stopped_date: null,
                 };
         state.state = newState;
      },
      restart(state) {
         const started_date = new Date().getTime();
         const newState = {
            started_date,
            state: 'RESTART',
            stopped_date: null,
         };
         state.state = newState;
      },
   },
});
export const {
   reset,
   restart,
   resume,
   setExpireTimeStamp,
   start,
   stop,
   updateSeconds,
} = timer.actions;
export default timer.reducer;
