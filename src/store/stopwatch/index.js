import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   seconds: 0,
   started_date: null,
   state: 'INITIAL',
   stopped_date: null,
};
export const stopwatch = createSlice({
   initialState,
   name: 'stopwatch',
   reducers: {
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
         if (stopwatchState === 'INITIAL') {
            state.started_date = started_date;
            state.state = 'START';
            state.stopped_date = null;
         }
      },
      stop(state) {
         const stopwatchState = state?.state;
         const started_date = state?.started_date || 0;
         const stopped_date = new Date().getTime();
         const runningStates = ['START', 'RESTART', 'RESUME'];
         const isRunning = runningStates.includes(stopwatchState);
         if (isRunning) {
            state.started_date = started_date;
            state.state = 'STOP';
            state.stopped_date = stopped_date;
         }
      },
      resume(state) {
         const stopwatchState = state?.state;
         const seconds = state?.seconds || 0;
         const startedDate = new Date().getTime() - seconds;
         const newStartedDate = new Date(startedDate).getTime();
         if (stopwatchState === 'STOP') {
            state.started_date = newStartedDate;
            state.state = 'RESUME';
            state.stopped_date = null;
         }
      },
      reset(state) {
         const stopwatchState = state?.state;
         const started_date = new Date().getTime();
         if (stopwatchState !== 'INITIAL') {
            state.started_date = started_date;
            state.state = 'INITIAL';
            state.stopped_date = null;
         }
      },
      restart(state) {
         const started_date = new Date().getTime();
         state.started_date = started_date;
         state.state = 'RESTART';
         state.stopped_date = null;
      },
   },
});
export const { reset, restart, resume, start, stop, updateSeconds } =
   stopwatch.actions;
export default stopwatch.reducer;
