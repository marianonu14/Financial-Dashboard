const Layout = (props) => {
    return ( 
        <div className="flex flex-col justify-between absolute ml-[50px] lg:w-4/5 right-0 h-screen">
            {props.children}
        </div>
     );
}
 
export default Layout;
