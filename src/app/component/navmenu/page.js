import ThemeToggle from "../themetoggle/page";

const NavMenu = ({className}) => {
  return (
    
      <div className={ className ? className : "flex space-x-5"}>
        <a href="#" className="block py-2 px-3 text-xxl text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500">Home</a>
        <a href="#" className="text-dark dark:text-white">About</a>
        <a href="#" className="text-dark dark:text-white">Services</a>
        <a href="#" className="text-dark dark:text-white">Contact</a>
      </div>
   
  );
};

export default NavMenu;
