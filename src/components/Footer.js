import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

function FooterElement(props) {
    return (
        <div class="px-5 py-2">
            <a href={ '#' + props.url.slice(1) } class="text-base leading-6 hover:text-gray-300">
                {props.name} </a>
        </div>
    );
}

function Footer() {
    return (
        <footer class="bg-black text-gray-400">
            <div class="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                    <FooterElement name="À propos" url="/about"/>
                    <FooterElement name="Compétences" url="/skills"/>
                    <FooterElement name="Projets" url="/project"/>
                    <FooterElement name="Contact" url="/contact"/>
                </nav>
                <div class="flex justify-center mt-8 space-x-6">
                    <a href="#" class="hover:text-gray-300 text-2xl">
                        <span class="sr-only">Email</span>
                        <AiFillMail />
                    </a>
                    <a href="#" class="hover:text-gray-300 text-2xl">
                        <span class="sr-only">GitHub</span>
                        <AiFillGithub />
                    </a>
                    <a href="#" class="hover:text-gray-300 text-2xl">
                        <span class="sr-only">LinkedIn</span>
                        <AiFillLinkedin />
                    </a>
                </div>
                <p class="mt-8 text-base leading-6 text-center text-gray-400"> © 2023 - TESSARD Simon </p>
            </div>
        </footer>
    );
}

export default Footer;