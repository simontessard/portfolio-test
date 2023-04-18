import { skills } from "../data/data.js";
import { FaReact, FaJava } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiCodeigniter } from 'react-icons/si';
import { TbCSharp } from 'react-icons/tb';

function Skill(props) {

    function WhichButton() {
        if (props.name === 'React') {
            return (<FaReact className="text-6xl bg-white rounded-lg p-2 text-blue-400" />);
        } else if (props.name === 'CSS') {
            return (<SiCss3 className="text-6xl text-blue-600 bg-white rounded-lg p-2" />);
        } else if (props.name === 'Javascript') {
            return (<SiJavascript className="text-6xl text-yellow-400 bg-white rounded-lg p-2" />);
        } else if (props.name === 'Tailwind') {
            return (<SiTailwindcss className="text-6xl bg-blue-400 rounded-lg p-2" />);
        } else if (props.name === 'Bootstrap') {
            return (<SiBootstrap className="text-6xl bg-purple-400 rounded-lg p-2" />);
        } else if (props.name === 'CodeIgniter') {
            return (<SiCodeigniter className="text-6xl bg-red-500 rounded-lg p-2" />);
        } else if (props.name === 'Java') {
            return (<FaJava className="text-6xl bg-red-700 rounded-lg p-2" />);
        } else if (props.name === 'CSharp') {
            return (<TbCSharp className="text-6xl bg-purple-700 rounded-lg p-2" />);
        }else {
            return (<SiHtml5 className="text-6xl text-red-500 bg-white rounded-lg p-2" />);
        }
    }

    return (
        <div className="text-center md:hover:scale-125 duration-200 delay-50 flex flex-col items-center">
            <WhichButton  />
            <h3 className="text-xs mt-3 font-medium">{props.name}</h3>
        </div>
    );
}

function Skills() {
    return (
        <section className="flex flex-row gap-20 flex-wrap justify-center py-10 bg-gradient-to-l from-gray-900 via-blue-800 to-blue-900 text-white items-center">
            {skills.map((item, index) => (
                <Skill name={item.name} index={index} />
            ))}
        </section>
    );
}

export default Skills;