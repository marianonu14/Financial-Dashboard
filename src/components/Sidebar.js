import { NavLink, useLocation } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { ImParagraphLeft } from 'react-icons/im';
import { GoGraph } from 'react-icons/go';
import { BsGraphUp } from 'react-icons/bs';


const Sidebar = () => {
    let location = useLocation().pathname;

    const styleActive = 'block p-2 mb-5 bg-white border-r-8 border-slate-600'
    const styleInactive = 'block p-2 mb-5'

    return ( 
        <>        
        <nav className="bg-blue-300 hidden lg:block md:w-1/5">
            <h1 className='py-4 text-center text-gray-900 text-xl tracking-widest'><span className='font-bold'>Financial</span> Data</h1>
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
        <nav className="bg-blue-300 block lg:hidden w-[50px]">
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