import { FaGithub } from "react-icons/fa";

export default function Project({name, image}) {
    return (
        <div className="flex flex-col">
            <h1 className="p-4 text-start bg-gradient-to-r from-blue-500 to-blue-900 text-white text-2xl">{name}</h1>
            <div className="m-3 min-w-full lg:min-w-0 lg:basis-1/3 h-80 shadow-lg justify-center text-center bg-cover" 
                style={{ backgroundImage: `url(${image})` }}>
                <div className='group relative flex flex-col items-center justify-center h-80 opacity-0 delay-100 duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-blue-900 p-5 text-white font-bold'>
                    <h3 className="text-4xl hover-underline-animation"> {name} </h3>
                    <FaGithub className="mt-5 text-4xl"/>
                </div>
            </div>
        </div>
    );
}