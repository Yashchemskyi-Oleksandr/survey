import { useState } from 'react';

type InputProps = {
  placeholder: string;
  onChange: (answer: string) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
