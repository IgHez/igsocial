import React from 'react'
import './rightbar.scss'

function RightBar() {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://images.pexels.com/photos/4668535/pexels-photo-4668535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <span>Jane Doe</span>
                            </div>
                            <div className="buttons">
                                <button>Follow</button>
                                <button>Dimiss</button>
                            </div>
                        </div>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://img.freepik.com/free-photo/two-african-american-girls-walking-posed-street-city_627829-3042.jpg?size=626&ext=jpg&ga=GA1.2.1833632423.1658447476&semt=sph" alt="" />
                                <span>Isacc Doe</span>
                            </div>
                            <div className="buttons">
                                <button>Follow</button>
                                <button>Dimiss</button>
                            </div>
                        </div>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://img.freepik.com/free-photo/diverse-friends-students-shoot_53876-47012.jpg?size=626&ext=jpg&ga=GA1.2.1833632423.1658447476&semt=sph" alt="" />
                                <span>John Doe</span>
                            </div>
                            <div className="buttons">
                                <button>Follow</button>
                                <button>Dimiss</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://img.freepik.com/free-photo/two-african-american-girls-walking-posed-street-city_627829-3042.jpg?size=626&ext=jpg&ga=GA1.2.1833632423.1658447476&semt=sph" alt="" />
                            <p> Messaged you</p>
                        </div>
                        <div className="buttons">
                            <span>10 mins ago</span>

                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4862430/pexels-photo-4862430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>Changed their cover image</p>
                        </div>
                        <div className="buttons">
                            <span>16  mins ago</span>

                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://img.freepik.com/free-photo/diverse-friends-students-shoot_53876-47012.jpg?size=626&ext=jpg&ga=GA1.2.1833632423.1658447476&semt=sph" alt="" />
                            <p> Messaged you</p>
                        </div>
                        <div className="buttons">
                            <span>21 mins ago</span>

                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4668521/pexels-photo-4668521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p> Called you</p>
                        </div>
                        <div className="buttons">
                            <span>30 mins ago</span>

                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4668521/pexels-photo-4668521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className='online' />
                            <span>Jane Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://img.freepik.com/free-photo/diverse-friends-students-shoot_53876-47012.jpg?size=626&ext=jpg&ga=GA1.2.1833632423.1658447476&semt=sph" alt="" />
                            <div className="online" />
                            <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4668521/pexels-photo-4668521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className='online' />
                            <span>Issac Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://img.freepik.com/free-photo/diverse-friends-students-shoot_53876-47012.jpg?size=626&ext=jpg&ga=GA1.2.1833632423.1658447476&semt=sph" alt="" />
                            <div className="online" />
                            <span>Noah Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar