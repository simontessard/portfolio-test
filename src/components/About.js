import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiArrowNarrowRight } from 'react-icons/hi';

function About() {
    return (
        <div className='flex flex-row flex-wrap justify-center my-6 mb-12 sm:my-20 gap-2 sm:gap-20'>
            <div className="flex flex-col p-8 ">
            <h1 className="text-5xl font-bold text-blue-900">Simon TESSARD</h1>
            <h2 className="text-3xl font-bold mt-2">Développeur junior</h2>
            <p className="max-w-lg flex justify-center my-10 font-extralight text-xl">
                Je viens d'achever une formation de niveau 5 et ayant obtenu en 2021 un BTS Services Informatiques aux Organisations (SIO)
                option Solutions Logicielles et Applications Métiers (SLAM). Je recherche actuellement une alternance pour la rentrée 2024.
            </p>
            <div className="flex gap-5 text-3xl">
                <AiFillLinkedin className='cursor-pointer hover:text-blue-900 delay-100 duration-300' target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"/>
                <AiFillGithub className='cursor-pointer hover:text-blue-900 delay-100 duration-300' />
            </div>
            </div>
            <div className='self-center'>
            <button className='text-lg text-dark border-blue-900 font-bold border-2 group px-6 py-3 rounded flex items-center hover:bg-blue-900 hover:text-white'>
                Voir Projets
                <span className='group-hover:translate-x-2 delay-100 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </button>
            </div>
        </div>
        
    );
}

export default About;