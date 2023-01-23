import styled from "styled-components";
import TextInput from "../../UI/inputs/Textnput";
import Label from "../../UI/inputs/Label";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
`;
const InputGroup = ({
  label,
  name,
  onBlur,
  placeholder,
  error,
  onChange,
  onFocus,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        onBlur={onBlur}
        name={name}
        id={name}
        placeholder={placeholder ?? ""}
        onChange={onChange}
        onFocus={onFocus}
        error={error}
      />
      {error && <ErrorMessage>{error} </ErrorMessage>}
    </Container>
  );
};

export default InputGroup