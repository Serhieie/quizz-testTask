import { useDispatch } from 'react-redux';
import { QuizSlotProps } from './QuizzSlot.types';
import { setActiveQuizz, setIsLoading } from '../../../redux/quiz/quizSlice';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBackFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMedia } from '../../../hooks/useMedia';
import clsx from 'clsx';
import { ConfirmDeleteModal } from '../../ConfirmDeleteModal/ConfirmDeleteModal';

export const QuizSlot: React.FC<QuizSlotProps> = ({ quiz }) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, isTablet } = useMedia();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    dispatch(setActiveQuizz(quiz.id));
    dispatch(setIsLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(setIsLoading(false));

    navigate(quiz.id);
  };

  const handlMouseEnter = () => {
    setHovered(true);
  };
  const handlMouseLeave = () => {
    setHovered(false);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsOpen(false);
  };

  const handleEditClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(setActiveQuizz(quiz.id));

    dispatch(setIsLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(setIsLoading(false));

    navigate('/quizzForm');
  };

  return (
    <>
      <div
        onClick={handleClick}
        onMouseEnter={handlMouseEnter}
        onMouseLeave={handlMouseLeave}
        className="flex items-center justify-center shadow-custom
     bg-white h-[140px] rounded-lg cursor-pointer hover:bg-violet-300
      hover:text-slate-700 transition-colors duration-300 xl:text-2xl
       md:text-xl select-none relative text-center  px-2
       overflow-hidden break-words"
      >
        <p className="max-h-[62px] overflow-y-auto">{quiz.title}</p>
        <div className=" absolute top-0 right-0 flex items-center gap-0.5">
          <span
            className={clsx('py-1 px-1', {
              'text-transparent': !hovered && !isMobile && !isTablet,
              'text-red-400 py-1 px-1 hover:text-red-600 transition-colors duration-300':
                hovered,
            })}
            onClick={handleDeleteClick}
          >
            <RiDeleteBackFill />
          </span>
          <span
            className={clsx('py-1 px-1', {
              'text-transparent': !hovered && !isMobile && !isTablet,
              'text-slate-500 hover:text-slate-800 transition-colors duration-300':
                hovered,
            })}
            onClick={handleEditClick}
          >
            {' '}
            <FiEdit3 />
          </span>
        </div>
      </div>
      <ConfirmDeleteModal
        isOpen={isOpen}
        onCancel={handleCloseDeleteModal}
        quizId={quiz.id}
      />
    </>
  );
};
