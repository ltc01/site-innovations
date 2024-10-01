import React, { useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

const ProfileImageIcon = () => {
    const profileImage= localStorage.getItem("profileImage")
    return (
        <div>
            {profileImage ?
                <div className='size-8 rounded-full overflow-hidden'>
                    <img src={profileImage} alt="ProfileImage" className='w-full h-full object-cover' />
                </div> :
                <FaRegCircleUser
                    size={20}
                    className=" z-10 relative text-slate-700 dark:text-slate-200  cursor-pointer"
                />
                // <div className="rounded-full">{userName?.charAt(0)}</div>
            }
        </div>
    )
}

export default ProfileImageIcon