import {
    DarkModeOutlined,
    EmailOutlined,
    GridViewOutlined,
    HomeOutlined,
    NotificationsOutlined,
    PersonOutline,
    SearchOutlined,
    WbSunnyOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

function Navbar() {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>iSmile</span>
                </Link>
                <HomeOutlined />
                {darkMode ? (
                    <WbSunnyOutlined onClick={toggle} />
                ) : (
                    <DarkModeOutlined onClick={toggle} />
                )}
                <GridViewOutlined />
                <div className="search">
                    <SearchOutlined />
                    <input type="text" placeholder="Search people, posts, stories...." />
                </div>
            </div>
            <div className="right">
                <PersonOutline />
                <EmailOutlined />
                <NotificationsOutlined />
                <div className="user">
                    <img src={currentUser.profilePic} alt="profile" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
