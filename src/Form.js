import { createRef, useRef } from "react";
import Input from "./Input";
import useForm from "./useForm";

const Form = () => {

  const {register} = useForm();
  // const firstNameRef = useRef(null);
  // const lastNameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    
  }


  // console.log("firstName ", firstNameRef);
  // console.log("lastName ", lastNameRef);
  // console.log("age ", ageRef);

  console.log('FORM RENDERS');
  return (
    <form onSubmit={handleSubmit}>
      <Input
        {...register('firstName', {required: true})} 
        // ref={firstNameRef}
        // {...obj} 
      >
        First NAME
      </Input>
      <Input
        {...register('lastName')} 
        // ref={lastNameRef}
        // {...obj} 
      >
        Last NAME
      </Input>
      <Input
        // {...register('firstName', {required: true})} 
        ref={ageRef}
        // {...obj} 
      >
        AGE
      </Input>
      {/* <label>
        First Name
        <input 
          type="text" 
          // {...register('firstName', {required: true})} 
          // {...obj} 
          // ref={firstNameRef}
        />
      </label>
      <label>
        Last Name
        <input 
          type="text" 
          // {...register('lastName')}
          // {...obj} 
          ref={lastNameRef}

        />
      </label>
      <label>
        Age
        <input 
          type="text" 
          {...register('age', {required: true})} 
          ref={ageRef}

        />
      </label> */}

      <input type="submit" value='Submit' />
    </form>
  );
}

export default Form;