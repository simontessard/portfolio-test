import { projects } from "../data/data.js";
import { AiFillGithub } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi';
import './Default.css';

function ShowSkills(props) {
    if (props.id % 2 === 0) {
        return (
            <div className="text-4xl absolute right-1 opacity-0 xl:group-hover:opacity-100 xl:group-hover:translate-x-10 xl:group-hover:text-black xl:group-hover:bg-white xl:group-hover:border-4 duration-500 delay-100 bg-blue-900 text-blue-900 p-2 rounded-lg">
                <h1>{props.id}</h1>
                <AiFillGithub className='mb-3' />
                <BiShow className='mb-3' />
                <AiFillGithub className='mb-3' />
                <BiShow className='mb-3' />
            </div>
        );
    }
    else {
        return (
            <div className="text-4xl absolute left-1 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-x-10 xl:group-hover:text-black xl:group-hover:bg-white xl:group-hover:border-4 duration-500 delay-100 bg-blue-900 text-blue-900 p-2 rounded-lg">
                <h1>{props.id}</h1>
                <AiFillGithub className='mb-3' />
                <BiShow className='mb-3' />
                <AiFillGithub className='mb-3' />
                <BiShow className='mb-3' />
            </div>
        );
    }
}

function OneProject(props) {
    return (
        <div className="flex flex-col min-w-full lg:min-w-0 basis-100 lg:basis-1/3 h-80 shadow-lg shadow-[#040c16a1] justify-center text-center bg-cover rounded-xl" key={props.index}
            style={{ backgroundImage: `url(${props.image})` }}>
            <div className='group relative flex flex-col items-center justify-center h-80 opacity-0 delay-100 duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-blue-900 p-5 rounded-xl text-white font-bold'>
                <h3 className="text-4xl hover-underline-animation"> {props.name} </h3>
                <div className="flex flex-row gap-10">
                    <button className="bg-white hover:bg-black text-black hover:text-white hover:scale-125 delay-100 duration-300 mt-10 w-fit  group px-6 py-3 rounded flex items-center">
                        Code
                        <span className='group-hover:scale-125 delay-100 duration-300'>
                            <AiFillGithub className='ml-3 text-xl' />
                        </span>
                    </button>
                    <button className="bg-white hover:bg-black text-black hover:text-white hover:scale-125 delay-100 duration-300 mt-10 w-fit group px-6 py-3 rounded flex items-center">
                        Détails
                        <span className='group-hover:scale-125 delay-100 duration-300'>
                            <BiShow className='ml-3 text-xl' />
                        </span>
                    </button>
                </div>
                <ShowSkills id={props.id} />
            </div>
        </div>
    );
}

function Project() {
    return (
        <section className="flex flex-row gap-20 flex-wrap p-5 justify-center py-32 bg-gray-100">
            {projects.map((item, index) => (
                <OneProject name={item.name} index={index} image={item.image} id={item.id} />
            ))}
        </section>
    );
}

export default Project;