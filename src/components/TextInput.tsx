import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  id: string;
  label?: string;
}

const TextInput: FC<TextInputProps> = ({
  value,
  onChange,
  name,
  placeholder,
  id,
  label,
}) => {
  return (
    <Label htmlFor={id}>
      {label}
      <Input
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-testid={`${name}-text-input`}
      />
    </Label>
  );
};

const Input = styled.input``;

const Label = styled.label``;

export default TextInput;
