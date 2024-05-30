import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../redux/user/userSlice';
import { Button } from '../components/Button/Button';

export const EnterNamePage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    dispatch(setUserName(name));
  };

  return (
    <div className="py-12 px-6 mx-auto w-full max-w-[500px] xs:px-1">
      <label
        className="flex flex-col gap-4 text-2xl select-none mb-6"
        htmlFor="nameInput"
      >
        Enter your name:
        <input
          className="rounded-md"
          value={name}
          onChange={handleChange}
          type="text"
          id="nameInput"
          placeholder="Andy Machine"
        />
      </label>
      <Button type="button" text="Accept" handleClick={handleClick}>
        Save
      </Button>
    </div>
  );
};
