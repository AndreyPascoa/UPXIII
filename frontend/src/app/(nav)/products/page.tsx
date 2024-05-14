import FormProducts from '@/components/FormProduct/page'
import SideBarNav from '@/components/SideBarNav/page'
import React from 'react'

const page = () => {
  return (
    <div className='flex bg-[#F6F6F6] '>
      <SideBarNav />
      <FormProducts />
    </div>
  )
}

export default page