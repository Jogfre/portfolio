import {Link} from 'react-scroll'

const NavLink = ( {href, title, offset}) => {
  return (
      <Link to={href} duration={1000} offset={offset} smooth={true} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white cursor-pointer'>{title}</Link>
  );
};


export default NavLink;