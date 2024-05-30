import { RootState } from '../rootReducer';

export const selectUserName = (state: RootState): string => state.user.name;
export const selectTotalCorrectAnswers = (state: RootState): number =>
  state.user.totalCorrectAnswers;
export const selectCurrentCorrectAnswers = (state: RootState): number =>
  state.user.currentCorrectAnswers;
