import { useDispatch } from 'react-redux';
import { ComplitedQuizzProps } from './CompletedQuizz.types';
import greenCompletedImg from '../../assets/GreenComplited.png';
import redCompletedImg from '../../assets/RedComplited.png';
import { calculatePercentage } from '../../helpers/getPercentage';
import { useUserState } from '../../hooks/useUserState';
import {
  resetCurrentCorrectAnswers,
  setTotalCorrectAnswers,
} from '../../redux/user/userSlice';
import { useQuizeState } from '../../hooks/useQuizeState';
import { useMedia } from '../../hooks/useMedia';
import { useNavigate } from 'react-router-dom';
import { setActiveQuizz, setIsLoading } from '../../redux/quiz/quizSlice';

export const CompletedQuizz: React.FC<ComplitedQuizzProps> = () => {
  const { currentCorrectAnswers, totalCorrectAnswers, name } = useUserState();
  const { activeQuizz, isLoading } = useQuizeState();
  const { isMobile, isTablet } = useMedia();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalActiveQuizzes = activeQuizz?.questions.length;
  const percentage = calculatePercentage(
    currentCorrectAnswers,
    totalActiveQuizzes
  );

  //   if (!activeQuizz) return null;

  const handleClick = async () => {
    dispatch(setTotalCorrectAnswers(currentCorrectAnswers));

    dispatch(setIsLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(setIsLoading(false));

    dispatch(resetCurrentCorrectAnswers());
    dispatch(setActiveQuizz(''));
    navigate('/quizzes');
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-purple-200">
      <div className="mt-10 flex items-center justify-center flex-col min-h-[calc(100dvh-81px)] px-4">
        <div
          className={`${
            percentage && percentage > 60 ? ' bg-green-600 ' : ' bg-red-600  '
          } text-center text-white font-bold py-4 px-8 rounded-lg mb-4`}
        >
          <p>
            <span className="text-xl">{`${name}`}</span> you success comlete the
            quizz!
          </p>
          <p>{`You result is ${percentage}% correct answers ${currentCorrectAnswers}/${totalActiveQuizzes}`}</p>
          <p>{`You have ${totalCorrectAnswers} correct answers in total`}</p>
        </div>
        <img
          className="mb-4 select-none"
          src={
            percentage && percentage > 60 ? greenCompletedImg : redCompletedImg
          }
          alt="text image 'Completed"
          width={isMobile ? 300 : isTablet ? 500 : 740}
          height={isMobile ? 232 : isTablet ? 386 : 570}
        />
        <button
          className={`${
            percentage && percentage > 60 ? ' bg-green-600 ' : ' bg-red-600 '
          }  text-white font-bold text-xl py-4 px-8`}
          onClick={handleClick}
          type="button"
        >
          {isLoading ? 'Loading...' : 'Accept'}
        </button>
      </div>
    </div>
  );
};
