import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
    
            <nav className = "sidenav">
                <div className="cpulogo">
                   <Image src ="/cpulogo.png" width ={50} height = {50}/>
                </div>
              
            </nav>
        
    );
}

export default Navbar;