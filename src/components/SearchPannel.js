import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchUsers, loadUsers } from "../redux/actions";

const SearchPannel = () => {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if(search !== '') {
            dispatch(searchUsers(search));
        } else {
            dispatch(loadUsers());
        }
    }, [search])

    return (
        <form className="pt-16 pb-7">
            <input 
            type="text" 
            name="search"
            placeholder="Поиск..."
            className="w-full p-2 border-b-2 mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
        </form>
    
    )
}

export default SearchPannel;