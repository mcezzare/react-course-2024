import { useForm } from 'react-hook-form';


type FormInputs = {
  email: string;
  password:string;
}


const FormsPage = () => {
  
  const { register } = useForm<FormInputs>({
    defaultValues: {
      email:'mcezzare@gmail.com',
      password: 'Abc123'
    }
  });
  
  
  return (
    <>
    <form>
    <h3>FormsPage</h3>

    <div style={{display:'flex' , flexDirection:'column'}}>
      <input type="text" placeholder="Email" {...register('email')} />
      <input type="text" placeholder="password" {...register('password')}/>
      <button type="submit">Entrar</button>
    </div>
    </form>
    
    </>
  )
}

export default FormsPage