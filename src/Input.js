import useForm from "./useForm";

const Input = ({children}) => {
  const {register} = useForm();

  return (
    <label>
      {children}
      <input type="text" {...register('firstName', {required: true})} />
    </label>
  );
}

export default Input;