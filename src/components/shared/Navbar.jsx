import { NavLink } from 'react-router';
import navImg from '../../assets/images/logo.png'
import { FaGithub } from 'react-icons/fa';
import MyNavLinks from './MyNavLinks';

const navItems = [
    {
        path: '/',
        go: 'Home'
    },
    {
        path: '/apps',
        go: 'Apps'
    },
    {
        path: '/installed-apps',
        go: 'Installation'
    }
]

const Navbar = () => {
    return (
        <div className='container mx-auto mt-4'>
            <nav className='flex justify-between items-center'>
                <img src={navImg} alt=""
                    className='h-10 w-auto'
                />
                <ul className='flex justify-between gap-4'>
                    {
                        navItems.map((item, i)=> {
                            return <MyNavLinks key={i} to={item.path}>{item.go}</MyNavLinks>
                        })
                    }
                    {/* <li>
                        <MyNavLinks to={'/'}>Home</MyNavLinks>
                    </li>
                    <li>
                        <MyNavLinks to={'/apps'}>Apps</MyNavLinks>
                    </li>
                    <li>
                        <MyNavLinks to={'/installed-apps'}>Installation</MyNavLinks>
                    </li> */}
                </ul>
                <button className='btn bg-purple-500 text-white'>
                    <FaGithub></FaGithub> Contribute
                </button>
            </nav>
        </div>
    );
}

export default Navbar;