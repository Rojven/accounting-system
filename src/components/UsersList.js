import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../redux/actions";
import UsersListItem from "./UsersListItem";

const UsersList = ({ popUpForm, setPopUpForm }) => {

    const { users } = useSelector(state => state.data);

    const dispatch = useDispatch();

    
    useEffect(() => {
      dispatch(loadUsers());
    }, [])

    const usersListLoad = users.map(user => {

        const {id, name, email, phone} = user;

        return (
            <UsersListItem 
            key={id}
            id={id}
            name={name}
            email={email}
            phone={phone}
            popUpForm={popUpForm} 
            setPopUpForm={setPopUpForm}/>
        )
    })

    return (
        <table className="w-full ">
            <thead className="bg-slate-200">
                <tr>
                    <th>Имя</th>
                    <th>Почта</th>
                    <th>Номер телефона</th>
                    <th className="py-4">Действия</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {users && usersListLoad}
            </tbody>
        </table>
    )
}

export default UsersList;