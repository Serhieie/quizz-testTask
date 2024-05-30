import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeActiveQuizz } from '../../redux/quiz/quizSlice';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useUserState } from '../../hooks/useUserState';
import { resetCurrentCorrectAnswers } from '../../redux/user/userSlice';

export const Header = () => {
  const { name } = useUserState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = () => {
    dispatch(removeActiveQuizz());
    dispatch(resetCurrentCorrectAnswers());
    navigate('/');
  };

  const showBackBtn = currentPath !== '/quizzes' && currentPath !== '/';

  return (
    <header
      className="flex items-center gap-5 py-6 bg-violet-300	px-10 border-b
     border-gray-300 shadow-md w-[100dvw] h-[81px] justify-between"
    >
      {showBackBtn ? (
        <div
          onClick={handleClick}
          className="font-semibold px-4 py-1 bg-violet-300 rounded-md
         text-darkgrey hover:bg-violet-400 transition-colors 
         duration-1000 cursor-pointer select-none "
        >
          <span className="flex items-center gap-1 justify-center">
            {' '}
            <IoChevronBackOutline size={22} />
            Back to All Quizzes
          </span>
        </div>
      ) : (
        <>
          <span className="select-none  font-extrabold lg:text-3xl md:text-2xl xs:text-lg sm:text-sm">
            ¯\_(ツ)_/¯
          </span>
          <span className=" lg:text-3xl md:text-2xl xs:text-sm ">
            {!showBackBtn ? `Welcome! ${name}` : `Good Luck ${name}`}
          </span>
          <span className="ml auto select-none  font-extrabold lg:text-3xl md:text-2xl xs:hidden sm:inline-block sm:text-sm">
            \ (•◡•) /
          </span>
        </>
      )}
    </header>
  );
};
