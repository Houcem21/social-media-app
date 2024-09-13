import { bottombarLinks } from '@/constants';
import {Link, useLocation} from 'react-router-dom'

const Bottombar = () => {
  const {pathname} = useLocation();

  return (
    <section className='bottom-bar'>
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link to={link.route} key={link.label} 
          className={`flex-center flex-col gap-1 p-5 transition
          ${isActive && 
          'bg-primary-500 rounded-[10px]'}`}>
            <img src={link.imgURL} alt={link.label} 
            className={`h-12 w-12 group-hover:invert-white 
            ${isActive && 'invert-white'}`} />
          </Link>
        )
      })}

    </section>
  )
}

export default Bottombar