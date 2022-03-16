import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedUser } from "../redux/actions";
import { useInputChange } from "../utils/useInputChange";

const EditUser = ({ setPopUpForm }) => {

    const {user} = useSelector(state => state.data);

    const dispatch = useDispatch();

    const {userInfo, setUserInfo, inputChange} = useInputChange();

    const {name, email, phone} = userInfo;

    useEffect(() => {
        if(user) {
            setUserInfo({...user})
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatedUser(userInfo, user.id));
        setPopUpForm(false);
    }
    
    return (
        <>
            <h2 className="font-bold mb-3">Изменить данные пользователя</h2>
            <form
            onSubmit={handleSubmit}>
                <div className="flex w-full justify-between flex-wrap">
                    <input
                    className="p-2 border-b-2 w-60 mb-3 rounded-md" 
                    type="text" 
                    name="name" 
                    value={name || ''}
                    onChange={inputChange}/>
                    <input 
                    className="p-2 border-b-2 w-60 mb-3 rounded-md" 
                    type="email" 
                    name="email" 
                    value={email  || ''}
                    onChange={inputChange}/>
                    <input
                    className="p-2 border-b-2 w-60 mb-3 rounded-md"  
                    type="text" 
                    name="phone" 
                    value={phone  || ''}
                    onChange={inputChange}/>
                    <button 
                    type="submit"
                    className="bg-slate-200 p-2 mb-3 hover:bg-slate-300 transition-all duration-300 ease-in-out rounded-md">
                        Сохранить
                    </button>
                </div>
            </form>
        </>
    )
}

export default EditUser;