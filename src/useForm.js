import { createRef, useEffect, useRef, useState } from "react";

const useRegister = () => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  // const ref = useRef();


  return ({
    value: value,
    onChange: handleChange
  });
}

const useForm = () => {

  const [registerInputs, setRegisterInputs] = useState({});

  const registerRef = useRef(null);
  // const registerObj = useRegister();

  // useEffect(()=>{
  //   setRegisterInputs({
  //     ...registerInputs, 
  //     [inputId]: registerRef
  //   });
  // }, [registerObj])

  const register = (inputId, optionsObject = {}) => {
    const registeredInput = {
      ref: registerRef,
      // ...registerObj,
      ...optionsObject
    };

    if(!registerInputs[inputId]) {
      setRegisterInputs({
        ...registerInputs, 
        [inputId]: registeredInput
      });
    }

    return registeredInput;
  }

  console.log(registerInputs);
  return ({
    handleSubmit: () => {},
    register: register
  });
}

export default useForm;