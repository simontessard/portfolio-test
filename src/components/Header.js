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
      <nav className="flex flex-row sm:justify-center space-x-4 p-5 flex-wrap">
        <div></div>
        <ul className='flex'>
          <NavItem title="À propos" url="/about"/>
          <NavItem title="Compétences" url="/skills"/>
          <NavItem title="Projets" url="/projects"/>
          <NavItem title="Contact" url="/contact"/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
