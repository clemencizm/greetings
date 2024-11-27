import React from 'react';
import Image from 'next/image';
import avatarPic from "/public/avatar.jpg";


export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Greetings!</a>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="rounded-full">
            <Image
              src={avatarPic} // Path to the image (ensure the file exists in the 'public' directory)
              alt="avatar picture"
              width={40} // Image width
              height={40} // Image height
            />
          </div>
        </div>
      </div>
    </div>
  )
}
