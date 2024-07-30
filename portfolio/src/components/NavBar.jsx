
const NavBar = () => {
    return (
        <>
            {/* navbar container */}
            <div className="bg-black text-white w-screen h-18 p-5
            flex justify-between fixed top-0">
                {/* logo */}
                <div className="font-bold text-4xl">
                    <i>AE</i>
                </div>
                {/* contents */}
                    {/* links */}
                <div className="flex justify-between gap-5">
                    <div className="navbar-links">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Skills</a>
                        <a href="">Projects</a>
                        <a href="">Experience</a>
                    </div>
                    {/* button */}
                    <button className="p-2 w-28 border-white border border-solid bg-black
                    hover:bg-gradient-to-r hover:from-pink hover:to-purple">Contact</button>
                </div>

            </div>
        </>
    );
}

export default NavBar