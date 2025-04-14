import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'       style={{
      background:
        "linear-gradient(318deg, rgba(234,176,255,1) 0%, rgba(255,255,255,1) 38%, rgba(255,255,255,1) 52%, rgba(255,255,255,1) 67%, rgba(234,176,255,1) 98%)",
    }}
>
      
      <div><Sidebar role="admin"/></div>
      <div><Outlet/></div>
    </div>
  )
}

export default AdminLayout