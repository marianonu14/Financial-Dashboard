const Layout = (props) => {
    return ( 
        <div className="flex flex-col justify-between w-full">
            {props.children}
        </div>
     );
}
 
export default Layout;
