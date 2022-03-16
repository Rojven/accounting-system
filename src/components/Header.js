import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/login');
    }

    return (
        <header className='w-full bg-slate-200 h-12 fixed rounded-b-md'>
            <div className="w-4/5 my-0 mx-auto h-12 flex justify-between items-center">
                <h2 className="font-bold ">Accounting System</h2>
                <button 
                className="p-1 bg-slate-300 hover:bg-slate-400 transition-all duration-300 ease-in-out rounded-md"
                onClick={handleExit}>
                    Выход
                </button>
            </div>
        </header>
    )
}

export default Header;