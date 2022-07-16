import "./Login.scss";

const Login = () => {
    return (
     <div className='form-container'>
        <form className='login-form'>
        
            <h2 className='Login-form_label'>Login</h2> 

            <div className='Login-form_email'>
            <label > Email Address: </label> 
            <input type='text'></input>
            </div>

            <div className='Login-form_password'>
            <label > Password: </label> 
            <input type='text'></input>
            </div>
        
            <button className='Login-form_btn'> Login </button>


        </form>

     </div>

      
    );
  }
  
  export default Login;
  