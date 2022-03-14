import { LoginForm } from '../components';

const Login = ({ user }) => {
    return (
        <section className='w-full h-screen bg-slate-50'>
            <LoginForm user={user}/>
        </section>
    )
}

export default Login;