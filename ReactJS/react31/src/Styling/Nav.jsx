const Nav=()=>{
    return <>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <a href="./index" className='navbar-brand'>Logo</a>
                <div className="ml-auto">
                    <ul className='navbar-nav'>
                        <li><a href="./home" className='nav-link'>Home</a></li>
                        <li><a href="./home" className='nav-link'>Services</a></li>
                        <li><a href="./home" className='nav-link'>About</a></li>
                        <li><a href="./home" className='nav-link'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
}
export default Nav;