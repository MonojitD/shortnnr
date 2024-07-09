import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LinkIcon, LogOut } from 'lucide-react'
import { UrlState } from '@/Context'
import { logout } from '@/db/apiAuth'
import useFetch from '@/hooks/use-fetch'
import { BarLoader } from 'react-spinners'
import { ModeToggle } from './ModeToggle'


const Header = () => {
  const navigate = useNavigate()
  const {isAuthenticated, user, fetchUser} = UrlState();
  const {loading, fn: fnLogout} = useFetch(logout);
  const userDetails = user?.user_metadata;

  return (
    <>
    <nav className="py-4 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" className='sm:h-16' alt="Shrotnnr logo" />
      </Link>

      <div className='flex'>
      <ModeToggle />
      <div className='ml-3'>
        {!isAuthenticated ?
          <Button onClick={() => navigate('/auth')}>Login</Button>
        :
        <DropdownMenu>
          <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
            <Avatar>
              <AvatarImage src={userDetails?.profile_bucket} />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{userDetails?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/dashboard" className='flex'>
                <LinkIcon className='mr-2 h-4 w-4'/>
                <span>My Links</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                fnLogout().then(() => {
                  fetchUser();
                  navigate("/auth");
                });
              }}  
             className="text-red-400 cursor-pointer">
              <LogOut className='mr-2 h-4 w-4'/>
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        }
      </div>
      </div>
    </nav>
    {loading && <BarLoader className="mb-4" width={"100%"} color="#facc15" />}
    </>
  )
}

export default Header