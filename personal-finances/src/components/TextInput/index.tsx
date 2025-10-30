import { ChangeEvent, useId } from "react";
import { Container, Input, Label } from "./styles";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  borderRadius?: "sm" | "md";
  type?: "text" | "password";
};

const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  borderRadius = "md",
  type = "text",
}: Props) => {
  const referenceId = useId();

  return (
    <Container>
      {label && <Label htmlFor={referenceId}>{label} </Label>}

      <Input
        id={referenceId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $borderRadius={borderRadius}
      />
    </Container>
  );
};

export default TextInput;
