import { Button } from '../Button/Button';

interface ButtonsSetProps {
  skipKlick: () => void;
  acceptClick: () => void;
  skipText: string;
  accepText: string;
  skipType: 'submit' | 'reset' | 'button';
  acceptType: 'submit' | 'reset' | 'button';
}

export const ButtonsSet: React.FC<ButtonsSetProps> = ({
  skipKlick,
  acceptClick,
  skipText,
  accepText,
  skipType,
  acceptType,
}) => {
  return (
    <div className="flex md:justify-center   gap-4 mt-4 mr-4 w-full min-w-[240px]  max-w-[400px]">
      <Button
        type={skipType}
        text={skipText}
        handleClick={skipKlick}
        confirm={false}
      />
      <Button type={acceptType} text={accepText} handleClick={acceptClick} />
    </div>
  );
};
