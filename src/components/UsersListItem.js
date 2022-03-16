import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { deletedUser, getSingleUser } from '../redux/actions';

const UsersListItem = ({ name, phone, email, id, popUpForm, setPopUpForm }) => {

    const tableElems = [
        {elName: name},
        {elName: email},
        {elName: phone}
    ]

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if(window.confirm("Вы уверены?")) {
            dispatch(deletedUser(id));
        }
    }

    const handleEdit = () => {
        setPopUpForm(!popUpForm);
        if(!popUpForm) {
            dispatch(getSingleUser(id));
        }
        
    }

    const buttonElems = [
        {icon: <AiFillDelete/>, message: 'Удалить', func: () => handleDelete(id)},
        {icon: <AiFillEdit/>, message: 'Редактировать', func: handleEdit}
    ]

    const elems = tableElems.map((elem, i) => {
        const { elName } = elem;

        return (
            <td 
            key={i}
            className="border-b-2 py-">
                {elName}
            </td>
        )
    })

    const buttons = buttonElems.map((button, i) => {
        const { icon, message, func } = button;

        return (
            <button 
            onClick={func}
            key={i}
            className='group px-2 relative'>
                {icon}
                <span className='hidden absolute bg-slate-200 p-1 rounded-md group-hover:block'>
                    {message}
                </span>
            </button>
    )
    })

    return (
        <>
            <tr className='bg-white'>
                {elems}
                <td className="border-b-2 py-3">
                    {buttons}
                </td>
            </tr>
        </>
    )
}

export default UsersListItem;