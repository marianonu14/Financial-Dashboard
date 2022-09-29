const Layout = (props) => {
    return ( 
        <div className="flex flex-col justify-between absolute pl-[50px] lg:pl-0 w-full lg:w-4/5 right-0 h-screen">
            {props.children}
        </div>
     );
}
 
export default Layout;
