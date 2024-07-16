import { Sidebar, SidebarItem, SidebarItemGroup } from 'flowbite-react'
import React from 'react'
import { HiUser, HiArrowSmRight } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState ('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }  
  }, [location.search]);
  return (
    <div>
      <Sidebar className="w-full md:w-56">
        <SidebarItemGroup>
          <Link to='/dashboard?tab=profile'>
          <SidebarItem 
            active={tab === 'profile'} 
            icon={HiUser} 
            label={'Usuário'} 
            labelColor='dark'
            as='div'
            >
            Perfil
          </SidebarItem>
          </Link>
          <SidebarItem icon={HiArrowSmRight}>
            Sair
          </SidebarItem>
        </SidebarItemGroup>
      </Sidebar>
    </div>
  )
}
