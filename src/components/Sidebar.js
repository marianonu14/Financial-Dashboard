import { NavLink, useLocation } from 'react-router-dom';

import { MdDashboard } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { ImParagraphLeft } from 'react-icons/im';
import { GoGraph } from 'react-icons/go';
import { BsGraphUp } from 'react-icons/bs';

const Sidebar = () => {
    let location = useLocation().pathname;

    const styleActive = 'block p-2 mb-5 bg-white border-r-8 border-cyan-500'
    const styleInactive = 'block p-2 mb-5 text-gray-300'

    return ( 
        <>        
        <nav className="bg-slate-800 hidden lg:block h-screen md:w-1/5 fixed text-xl">
            <h1 className='py-4 text-center text-gray-300 text-2xl tracking-widest'><span className='font-bold text-cyan-500'>Financial</span> Data</h1>
            <ul className='py-2'>
                <li>
                    <NavLink 
                    to='/'
                    className={
                    location === '/' ?
                    styleActive : 
                    styleInactive 
                    }
                    >General
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='income'
                    className={({ isActive }) =>
                    isActive ?
                    styleActive : 
                    styleInactive 
                    }>
                    Income Statement
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='balance'
                    className={({ isActive }) =>
                    isActive ?
                    styleActive : 
                    styleInactive 
                    }>
                    Balance Sheet
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='cashflow'
                    className={({ isActive }) =>
                    isActive ?
                    styleActive : 
                    styleInactive 
                    }>
                    Cash Flow
                    </NavLink>
                </li>      
            </ul>
        </nav>
        <nav className="bg-slate-800 fixed lg:hidden h-screen w-[50px] z-10">
            <span className='py-4 flex justify-center text-white'><MdDashboard size={30}/></span>
            <ul className='py-2'>
                <li>
                    <NavLink 
                    to='/'
                    className={
                    location === '/' ?
                    styleActive : 
                    styleInactive 
                    }
                    ><AiOutlineHome size={30}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='income'
                    className={({ isActive }) =>
                    isActive ?
                    styleActive : 
                    styleInactive 
                    }>
                    <ImParagraphLeft size={30}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='balance'
                    className={({ isActive }) =>
                    isActive ?
                    styleActive : 
                    styleInactive 
                    }>
                    <GoGraph size={30}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='cashflow'
                    className={({ isActive }) =>
                    isActive ?
                    styleActive : 
                    styleInactive 
                    }>
                    <BsGraphUp size={30}/>
                    </NavLink>
                </li>      
            </ul>
        </nav>
        </>
     );
}
 
export default Sidebar;