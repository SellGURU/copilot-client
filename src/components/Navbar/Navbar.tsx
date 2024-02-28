import "./Navbar.css";

const Navbar = () => {

    return (      
        <>
        <div className="Navbar-Container">
            <div className="Navbar-Section">
                <div className="Navbar-Section-Top">
                    <div className="Navbar-Section-SearchBar">

                    </div>
                    <div className="flex flex-row">
                        <div className="Navbar-Section-Notification ">
                            <img className=" w-6 h-6" src="./icons/notification.svg" alt="" />
                        </div>
                        <div className="Navbar-Section-Profile ">
                            <img className=" Navbar-Section-Profile-ProfilePic" src="./icons/profilePic.svg" alt="" />
                            <div className="flex flex-col">
                                <p className="Navbar-Section-Profile-ProfileName">DR.Jacob Jones</p>
                                <p className="Navbar-Section-Profile-ProfileEmail">DR.JacobJones@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="Navbar-ItemsPart">

                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar