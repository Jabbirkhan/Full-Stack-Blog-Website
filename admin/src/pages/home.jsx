import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../components/sideBar';

const Home = () => {

  const location = useLocation();

  return (
    <div className='flex justify-between items-start bg-gray-50'>
      <div>
        <SideBar />
      </div>
      <div className={`flex-1 ${location.pathname === '/login' || location.pathname === '/forget-password' ? 'ml-0' : 'sm:ml-52'} min-h-screen`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
