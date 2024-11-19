import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container px-4 py-4 flex items-center justify-between">
        {/* Icon Wrapper */}
        <div className="hidden lg:flex gap-1">
          <div className="header_top_icon_wrapper">
            <a href="mailto:likithnirvan@gmail.com" target="_blank" rel="noopener noreferrer">
              <HiOutlineMail />
            </a>
          </div>
          <div className="header_top_icon_wrapper">
            <a href="https://x.com/LNirvsn?s=08/" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>
          </div>
          <div className="header_top_icon_wrapper">
            <a href="https://www.linkedin.com/in/likithnirvan/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
          </div>
          <div className="header_top_icon_wrapper">
            <a href="https://github.com/Likith077" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
          </div>
        </div>

        {/* Header Text */}
        <div className="text-gray-500 text-[12px]">
          <p>PLAY, WIN, REPEAT</p>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default HeaderTop
