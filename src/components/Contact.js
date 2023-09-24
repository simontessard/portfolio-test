import { AiFillMail, AiFillPhone } from 'react-icons/ai';

function Contact() {
    return (
        <div className="mt-12 flex flex-col p-12 text-center">
            <div className='flex flex-row justify-center'>
                <h3 className="text-5xl">
                Contactez-moi
                </h3>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <AiFillMail className='h-6 w-10 mr-2' />
                <p className='my-10'>simon.tessard@gmail.com</p>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <AiFillPhone className='h-6 w-10 mr-2' />
                <p>06 99 99 99 99</p>
            </div>
        </div>
    );
}

export default Contact;