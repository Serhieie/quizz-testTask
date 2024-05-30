import { useSelector } from 'react-redux';
import {
  selectCurrentCorrectAnswers,
  selectTotalCorrectAnswers,
  selectUserName,
} from '../redux/user/userSelectors';

export interface UserState {
  name: string;
  totalCorrectAnswers: number;
  currentCorrectAnswers: number;
}

export const useUserState = (): UserState => {
  const name = useSelector(selectUserName);
  const totalCorrectAnswers = useSelector(selectTotalCorrectAnswers);
  const currentCorrectAnswers = useSelector(selectCurrentCorrectAnswers);

  return {
    name,
    totalCorrectAnswers,
    currentCorrectAnswers,
  };
};
