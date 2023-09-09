import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { Link } from "react-router-dom";
import { ArrowBackIosNewSharp } from "@mui/icons-material";

const Profile = () => {
    return (
        <div className="profile">
            <Link to="../../." style={{ textDecoration: "none" }}>
                <span className="back" >
                    <ArrowBackIosNewSharp />
                </span>
            </Link>
            <div className="images">
                <img
                    src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className="cover"
                />
                <img
                    src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon />
                        </a>
                        <a href="http://facebook.com">
                            <PinterestIcon />
                        </a>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>UK</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>jane.org</span>
                            </div>
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;