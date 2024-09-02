
import { ActiveLink } from '@/components/common'
import { menuItems } from '@/constants'
import { TMenuItems } from '@/types'
import { UserButton } from '@clerk/nextjs'

import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 border-r border-r-gray-200 bg-white flex flex-col'>
      <a href="/" className='font-bold text-3xl inline-block mb-5'>
        <span className='text-primary'>E</span>
        duVerse
      </a>
      <ul className='flex flex-col gap-2'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} url={item.url} title={item.title} icon={item.icon} />
        ))}
      </ul>
      <div className='flex mt-auto justify-end items-center'>
        <UserButton />
      </div>
    </div>

  )
}

function MenuItem({ url = "/", title = "", icon }: TMenuItems) {

  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  )
}

export default Sidebar