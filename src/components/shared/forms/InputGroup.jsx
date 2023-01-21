import styled from "styled-components";
import TextInput from "../../UI/inputs/Textnput";
import Label from "../../UI/inputs/Label";
import Button from "../../UI/buttons/Button";

const Container = styled.div`
width:100%;
padding:1rem;
border:1px solid #e1e1e1;
display:flex;
flex-direction:column;
gap:0.5rem;
`

const ErrorMessage = styled.div`
font-size:0.8rem;
color:red;
`
const InputGroup = ({label,name,handelBlur,placeholder,error,onChange,onFocus}) => {
  return (
    <Container>
      <Label htmlFor = {name} >{ label}</Label>
      <TextInput name={name} id={name} placeholder={placeholder ?? ''} onChange={onChange} onFocus={onFocus} error={error} onblur = {handelBlur} />
      {error && <ErrorMessage>{error} </ErrorMessage>}
    </Container>
  )
}

export default InputGroup