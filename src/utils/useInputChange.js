import { useState } from "react";

export const useInputChange = () => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const inputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    return {userInfo, setUserInfo, inputChange}  
}