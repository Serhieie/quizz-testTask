import { IoIosAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsLoading } from '../../../redux/quiz/quizSlice';

export const CreateQuizBtn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    dispatch(setIsLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(setIsLoading(false));

    navigate('/quizzForm');
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center bg-lightGreen
       h-[140px] w-full max-w-none shadow-custom hover:bg-hoverGreen 
       transition-colors duration-300 hover:text-white rounded-lg 
       cursor-pointer"
    >
      <IoIosAdd size={50} />
    </div>
  );
};
