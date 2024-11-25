import { useState } from 'react';

type SelectProps = {
  options: string[];
  onChange: (answer: string) => void;
};

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
    >
      <option
        value=''
        disabled
      >
        Select an option
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
