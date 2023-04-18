import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiArrowNarrowRight } from 'react-icons/hi';

function About() {
    return (
        <div className="flex flex-col items-center text-center p-8 mt-10">
            <h1 className="text-5xl font-bold text-blue-900">Simon TESSARD</h1>
            <h2 className="text-2xl font-bold mt-2">Développeur junior</h2>
            <p className="max-w-lg flex justify-center my-10 font-extralight">
                Je suis un Développeur Junior Web qui vient d'achever une formation de niveau 5 et ayant obtenu en 2021 un BTS Services Informatiques aux Organisations (SIO)
                option Solutions Logicielles et Applications Métiers (SLAM).
            </p>
            <div className="flex gap-5 text-3xl">
                <AiFillLinkedin className='cursor-pointer hover:text-blue-900 delay-100 duration-300' target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"/>
                <AiFillGithub className='cursor-pointer hover:text-blue-900 delay-100 duration-300' />
            </div>
            <button className='text-dark border-blue-900 font-bold border-2 group px-6 py-3 my-16 rounded flex items-center hover:bg-blue-900 hover:text-white'>
                Voir Projets
                <span className='group-hover:translate-x-2 delay-100 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </button>
        </div>
    );
}

export default About;