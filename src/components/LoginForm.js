import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLoading } from "../redux/actions";

const LoginForm = ({ user }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {admin} = useSelector(state => state.data);

    const {login, password} = admin;

    useEffect(() => {
        dispatch(adminLoading());
    }, [])

    const [loginState, setLoginState] = useState('');

    const [passwordState, setPasswordState] = useState('');

    const [err, setErr] = useState(false);
    
    if(loginState === login && passwordState === password) {
        user = true;
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginState === '' || passwordState === '' || loginState !== login || passwordState !== password) {
            setErr(true);
        }
        if(user) navigate('/')
        
    }

    const message = err ? <div className="text-red-500">Неверный логин или пароль!</div> : null;

    return (
        <form 
        className='grid place-content-center h-screen'
        onSubmit={handleSubmit}
        >
            <h1 className="font-bold text-center pb-3">Accounting System</h1>
            <input 
            type='text' 
            placeholder='Логин' 
            className='p-2 border-b-2 w-60 mb-3'
            name='login'
            value={loginState}
            onChange={(e) => setLoginState(e.target.value)}/> 
            <input 
            type='password' 
            placeholder='Пароль' 
            className='p-2 border-b-2 w-60 mb-3'
            name='password'
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}/> 
            <button 
            className='bg-slate-200 p-2 mb-3 hover:bg-slate-300 transition-all duration-300 ease-in-out'
            type='submit'>
                Войти
            </button>
            {message && message}
        </form>  
    )
}

export default LoginForm;