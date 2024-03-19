import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Customer", path: "/shop" },
        { link: "Transtion", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ]
    return (
        <header>
            <nav>
                <div>
                    {/* {logo} */}
                    <Link to="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block' />Customer</Link>

                    {/* {nav items for large device} */}

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ Link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{Link}</Link>)

                        }
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                    </div>

                    {/* {menu btn for the mobile device} */}
                    <div className='md:hidden'>
                        <button>{
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar