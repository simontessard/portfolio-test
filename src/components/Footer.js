import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai';

function FooterElement(props) {
    return (
        <div className="px-5 py-2">
            <a href={ '#' + props.url.slice(1) } className="text-base leading-6 hover:text-gray-300">
                {props.name} </a>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <FooterElement name="À propos" url="/about"/>
                    <FooterElement name="Compétences" url="/skills"/>
                    <FooterElement name="Projets" url="/project"/>
                    <FooterElement name="Contact" url="/contact"/>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <div className="hover:text-gray-300 text-2xl">
                        <span className="sr-only">Téléphone</span>
                        <AiFillPhone />
                    </div>
                    <div className="hover:text-gray-300 text-2xl">
                        <span className="sr-only">Email</span>
                        <AiFillMail />
                    </div>
                    <div className="hover:text-gray-300 text-2xl">
                        <span className="sr-only">GitHub</span>
                        <AiFillGithub />
                    </div>
                    <div className="hover:text-gray-300 text-2xl">
                        <span className="sr-only">LinkedIn</span>
                        <AiFillLinkedin />
                    </div>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400"> © 2023 - TESSARD Simon </p>
            </div>
        </footer>
    );
}

export default Footer;