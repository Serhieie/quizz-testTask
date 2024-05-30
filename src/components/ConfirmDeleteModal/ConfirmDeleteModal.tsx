import { useDispatch } from 'react-redux';
import { Portal } from '../ModalPortal/ModalPortal';
import { ConfirmDeleteModalProps } from './ConfirmDeleteModal.types';
import { removeQuiz } from '../../redux/quiz/quizSlice';

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onCancel,
  quizId,
}) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const handleDelete = () => {
    dispatch(removeQuiz(quizId));
  };

  return (
    <Portal>
      <div className="fixed z-10 inset-2 overflow-y-auto">
        <div className="flex items-center justify-center min-h-[calc(100dvh-81px)] px-4">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gray-600 opacity-75 transition-colors
            duration-300"
            ></div>
          </div>

          <div className="relative z-10 bg-white rounded-lg p-6 max-w-md select-none">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold">Confirm Deletion</h2>
              <p>Are you sure you want to delete this item?</p>
            </div>

            <div className="flex justify-center gap-8">
              <button
                onClick={onCancel}
                className="px-4 py-2 bg-violet-200 hover:bg-violet-300
                  text-gray-800 rounded-md transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white
                 rounded-md transition-colors duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
