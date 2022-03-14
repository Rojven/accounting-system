import { useState } from "react";
import { useDispatch } from "react-redux";
import { addedUser } from "../redux/actions";
import { useInputChange } from "../utils/useInputChange";

const AddNewUser = () => {

    const dispatch = useDispatch();

    const {userInfo, setUserInfo, inputChange} = useInputChange();

    const [err, setErr] = useState('');

    const {name, email, phone} = userInfo;


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !phone) {
            setErr("Пожалуйста,заполните все поля!");
        } else {
            dispatch(addedUser(userInfo));
            setErr('');
            setUserInfo({
                name: '',
                email: '',
                phone: ''
            })
        }
    }
    
    return (
        <>
            <h2 className="font-bold mb-3">Добавить нового пользователя</h2>
            <form
            onSubmit={handleSubmit}>
                <div className="flex w-full justify-between flex-wrap">
                    <input
                    className="p-2 border-b-2 w-60 mb-3" 
                    type="text" 
                    name="name" 
                    placeholder="Имя"
                    value={name}
                    onChange={inputChange}/>
                    <input 
                    className="p-2 border-b-2 w-60 mb-3" 
                    type="email" 
                    name="email" 
                    placeholder="Почта"
                    value={email}
                    onChange={inputChange}/>
                    <input
                    className="p-2 border-b-2 w-60 mb-3"  
                    type="text" 
                    name="phone" 
                    placeholder="Телефон"
                    value={phone}
                    onChange={inputChange}/>
                    <button 
                    type="submit"
                    className="bg-slate-200 p-2 mb-3 hover:bg-slate-300 transition-all duration-300 ease-in-out">Добавить</button>
                </div>
            </form>
            {err && <h3 className="mb-3 text-red-500">{err}</h3>}
        </>
    )
}

export default AddNewUser;