import Logo from '.././images/user.jpg'
function Header() {
    return (
        <div className="container-fluid p-3 text-dark text-center shadow">
            <img src={Logo} width="100" />
            <h3>Selamat Datang Di My Website</h3>
        </div>
    )

}

export default Header;