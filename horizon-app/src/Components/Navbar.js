function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-color">
            <a class="navbar-brand" href="#"
                ><img src="images/archi.jpg" alt="Architectural website" class="archi"
            /></a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <a class="nav-link navsn" href="#">Sign Up/Log In</a>
                
        </nav>
        </>
    )
}

export default Navbar