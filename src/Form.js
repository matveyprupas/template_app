import Input from "./Input";
import useForm from "./useForm";

const Form = () => {

  const {register} = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    
  }

  // console.log(register('firstName'));


  console.log('FORM RENDERS');
  return (
    <form onSubmit={handleSubmit}>
     <Input>First NAME</Input>
      {/* <label>
        First Name
        <input type="text" {...register('firstName', {required: true})} />
      </label> */}
      <label>
        Last Name
        <input type="text" {...register('lastName')} />
      </label>
      <label>
        Age
        <input type="text" {...register('age', {required: true})} />
      </label>

      <input type="submit" value='Submit' />
    </form>
  );
}

export default Form;