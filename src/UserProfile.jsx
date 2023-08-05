import React from "react";



function UserProfile(user) {
    return (
        <>
        <p>
            {user.name}
            {user.email}
            {user.imgURL}
        </p>
        </>
    )
}

export default UserProfile;