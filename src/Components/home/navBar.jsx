import { useState , useEffect } from "react";
import logo from "../../images/logo.png" 
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <nav className={scrolled? "navbar navbar-scrolled" : "navbar "} id="navBarContainer" >
            <div className='logo' id="navBarLogo" >
                <a href="/">
                <img src={logo} alt="" width='55'/>
                </a>
         </div >
         <ul>
             <li><a href="/">HOME</a></li>
             <li><a href="/menu">OUR MENUS</a></li>
             <li><a href="/store">SHOP</a></li>
             <li><a href="">FIND US</a></li>
         </ul>
         <div className='logo'>
             <a className='btn' href="/register">JOIN US</a>
         </div>
     </nav >
    )
}

export default NavBar;