import { useState } from 'react';
import { AddNewUser, Header, SearchPannel, UsersList, EditUser } from '../components';

const Home = () => {

    const [popUpForm, setPopUpForm] = useState(false);

    return (
        <>
            <Header/>
            <section className='h-screen w-full bg-slate-50'>
                <div className='w-4/5 my-0 mx-auto'>
                    <SearchPannel/>
                    {popUpForm && <EditUser setPopUpForm={setPopUpForm}/>}
                    <AddNewUser/>
                    <UsersList popUpForm={popUpForm} setPopUpForm={setPopUpForm}/>
                </div>
            </section>
        </>
    )
}

export default Home;