import "./Navbar.css";

const Navbar = () => {

    return (      
        <>
        <div className="Navbar-Container">
            <div className="Navbar-Section">
                <div className="Navbar-Section-Top">
                <div className="Navbar-Section-SearchBar">
                    <input className="Navbar-Section-SearchBar-Input" placeholder="Search for Reports, Interventions, Biomarkers..." />
                    <img className="Navbar-Section-SearchBar-Icon" src="./icons/search.svg" alt="" />
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
                <div className="Navbar-Section-Bottom">
                    <img className="Navbar-Section-Profile-Pic" src="./icons/person2.svg" alt="" />
                    <p className="font-medium">Robert Fox</p>
                    <div className="Navbar-Section-Profile-Info">
                        <p>Age: 48</p>
                        <span className="Navbar-Section-Profile-Info-Divider"></span>
                        <p>Male: Man</p>
                        <span className="Navbar-Section-Profile-Info-Divider"></span>
                        <p>Activity Status: Low</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar