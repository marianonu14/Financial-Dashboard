import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    let location = useLocation().pathname;

    const styleActive = 'block p-2 mb-4 bg-white border-r-8 border-indigo-500'
    const styleInactive = 'block p-2 mb-4'

    return ( 
        <nav className="bg-slate-300 hidden md:block md:w-1/5">
            <h1 className='py-4 text-center text-xl tracking-wide'>Financial Data</h1>
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
     );
}
 
export default Sidebar;