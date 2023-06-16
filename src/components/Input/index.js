import { InputContainer } from "./styles";

const Input = ({value, error}) => {
    return (
      <InputContainer>
        <input disabled value={value}/>
        {error && <div className="error">{error}</div>}
      </InputContainer>
    );
  }
  
  export default Input;
  