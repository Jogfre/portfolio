import {Link} from 'react-scroll'

const NavLink = ( {href, title}) => {
  return (
      <Link to={href} duration={500} smooth={true} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white cursor-pointer'>{title}</Link>
  );
};


export default NavLink;