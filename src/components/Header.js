import './Default.css';

function NavItem(props) {
  return (
    <li><a href={props.url} className="rounded-lg text-xl mx-5 text-dark font-medium after:bg-blue-900 hover-underline-animation">{props.title}</a></li>
  );
}

function Header() {
  return (
    <header className="Portfolio-header mt-3">
      <nav className="flex flex-row sm:justify-center space-x-4 p-5 flex-wrap">
        <div></div>
        <ul className='flex flex-wrap gap-4 flex-col sm:flex-row'>
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
