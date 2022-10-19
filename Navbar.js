import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-danger shadow  ">
            <div class="container p-2">
                <a class="navbar-brand text-light" href="#" ><b>My Website</b></a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active text-light" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light " to={'/about'} >About Me</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link text-light " to={'/Galery'} >Galery</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;