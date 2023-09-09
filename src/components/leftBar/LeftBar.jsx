import { BrowseGalleryOutlined, DateRangeOutlined, GamepadOutlined, Groups2Outlined, LibraryBooksOutlined, MessageOutlined, MonetizationOnOutlined, MusicVideoOutlined, PersonPinCircleOutlined, StorefrontOutlined, VideoCameraBackOutlined, VideoChatOutlined, WatchLaterOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import './leftbar.scss'

function LeftBar() {

    const { currentUser } = useContext(AuthContext)

    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <PersonPinCircleOutlined className='icon' />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <Groups2Outlined className='icon' />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <StorefrontOutlined className='icon' />
                        <span>Market</span>
                    </div>
                    <div className="item">
                        <MusicVideoOutlined className='icon' />
                        <span>Video</span>
                    </div>
                    <div className="item">
                        <WatchLaterOutlined className='icon' />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span className='nocursor' style={{ fontSize: "12px" }}>Your shortcuts</span>
                    <div className="item">
                        <DateRangeOutlined className='icon' />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <GamepadOutlined className='icon' />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <BrowseGalleryOutlined />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <VideoCameraBackOutlined className='icon' />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <MessageOutlined />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span className='nocursor' style={{ fontSize: "12px" }}>Others</span>
                    <div className="item">
                        <MonetizationOnOutlined className='icon' />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <VideoChatOutlined className='icon' />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <LibraryBooksOutlined className='icon' />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar