import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Checkbox from '@/components/Checkbox';
import { useState } from 'react';
import styles from './RenderComponent.module.scss';

interface InputComponentProps {
  type: 'input';
  placeholder: string;
  options: string[];
}

interface ISelectComponentProps {
  type: 'select';
  options: string[];
}

interface ICheckboxComponentProps {
  type: 'checkbox';
  options: string[];
}

interface IBasicComponentProps {
  type: 'basicCard';
  options: string[];
}

export type Component =
  | InputComponentProps
  | ISelectComponentProps
  | ICheckboxComponentProps
  | IBasicComponentProps;

interface RenderComponentProps {
  component: Component;
  selectedOptions?: string[];
  setAnswer: (answer: string) => void;
  nextQuestion: () => void;
  showNextButton?: boolean;
}
const RenderComponent = ({
  component,
  selectedOptions,
  setAnswer,
  nextQuestion,
  showNextButton,
}: RenderComponentProps) => {
  const [localAnswer, setLocalAnswer] = useState<string>('');
  const setValue = (answer: string) => {
    setLocalAnswer(answer);
    setAnswer(answer);
  };

  const redirectHandler = () => {
    if (!localAnswer) {
      // eslint-disable-next-line no-alert
      alert('Please complete question');
    } else {
      nextQuestion();
    }
  };
  const componentOptions = component?.options?.length ? component?.options : [];

  return (
    <div className={styles.block}>
      {component.type === 'input' ? (
        <Input
          placeholder={component.placeholder}
          onChange={setValue}
        />
      ) : component.type === 'select' ? (
        <Select
          options={componentOptions}
          onChange={setValue}
        />
      ) : component.type === 'checkbox' ? (
        <>
          {componentOptions.map((option: string) => (
            <Checkbox
              key={option}
              option={option}
              active={selectedOptions?.includes(option)}
              onChange={setValue}
            />
          ))}
        </>
      ) : component.type === 'basicCard' ? (
        <>
          {componentOptions.map((option: string) => (
            <Button
              key={option}
              onClick={() => setValue(option)}
              active={selectedOptions?.includes(option)}
            >
              {option}
            </Button>
          ))}
        </>
      ) : null}
      {showNextButton && (
      <Button onClick={redirectHandler}>
        Next
      </Button>
      )}
    </div>
  );
};

export default RenderComponent;
