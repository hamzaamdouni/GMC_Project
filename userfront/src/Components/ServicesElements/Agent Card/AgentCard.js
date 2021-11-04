import React from 'react'
import './AgentCard.css'

const AgentCard = () => {
    return (
        <div className="container">
            <div className="cover-photo" >
                <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt='coverphoto' className="profile" />
            </div>
        <div className="profile-name">Beni Smith</div>
        <div className="about">
            <p>User Interface Designer</p>
            <p>front-end developer</p>
        </div>
        <button className="msg-btn">Message</button>
        <button className="follow-btn">Following</button>
</div>
    )
}

export default AgentCard
