import clsx from 'clsx';
import React from 'react';

interface ICheckbox {
  option: string;
  active?: boolean;
  onChange: (option: string) => void;
}

const Checkbox = ({ option, active, onChange }: ICheckbox) => (
  <label
    htmlFor={option}
    className={clsx({ active })}
  >
    <input
      id={option}
      type='checkbox'
      checked={active}
      onChange={() => onChange(option)}
    />
    {option}
  </label>
);

export default Checkbox;
