import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/images/logo.png'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

    return ( 
        <footer className="footer footer-horizontal footer-center bg-[#001931] text-primary-content p-10">
            <aside>
                <img src={logo} alt="logo" className='h-12.5 w-auto' />
                <p className="font-bold">
                HERO.IO
                <br />
                ALL APPS IN ON PLACE
                </p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="">
                        <FaXTwitter size={30}></FaXTwitter>
                    </a>
                    <a href="">
                        <FaLinkedinIn size={30}></FaLinkedinIn>
                    </a>
                    <a href="">
                        <FaFacebook size={30}></FaFacebook>
                    </a>
                </div>
            </nav>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
     );
}
 
export default Footer;