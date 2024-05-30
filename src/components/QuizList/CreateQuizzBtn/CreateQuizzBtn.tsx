import { IoIosAdd } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export const CreateQuizBtn: React.FC = () => {
  return (
    <NavLink
      to="/quizzForm"
      className="flex items-center justify-center bg-lightGreen
       h-[140px] w-full max-w-none shadow-custom hover:bg-hoverGreen 
       transition-colors duration-300 hover:text-white rounded-lg"
    >
      <IoIosAdd size={50} />
    </NavLink>
  );
};
