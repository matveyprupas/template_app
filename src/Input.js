import { forwardRef } from "react";
import useForm from "./useForm";

const Input = forwardRef(({children, ...props}, ref) => {
  // const {register} = useForm();
  console.log(props);

  return (
    <label>
      {children}
      <input 
        {...props}
        ref={ref} 
        type="text"
        // {...register('firstName', {required: true})} 

      />
    </label>
  );
})

export default Input;