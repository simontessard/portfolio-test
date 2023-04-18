import './Default.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';

function NavItem(props) {
  return (
    <li><a href={props.url} className="rounded-lg text-lg mx-5 text-dark font-medium after:bg-blue-900 hover-underline-animation">{props.title}</a></li>
  );
}

function Header() {
  return (
    <header className="Portfolio-header">
      <nav className="flex flex-row sm:justify-between space-x-4 p-5 flex-wrap">
        <div></div>
        <ul className='flex'>
          <NavItem title="À propos" url="/about"/>
          <NavItem title="Compétences" url="/skills"/>
          <NavItem title="Projets" url="/projects"/>
          <NavItem title="Contact" url="/contact"/>
        </ul>
        <ul className="flex space-x-5 text-dark">
          <GrLanguage className='cursor-pointer text-xl hover:text-blue-900 delay-100 duration-300'/>
          <BsFillMoonStarsFill className='cursor-pointer text-xl hover:text-blue-900 delay-100 duration-300'/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
