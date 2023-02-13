import Image from 'next/image';
import React from 'react';
import CodingAdda from '../public/CodingAdda.png';
import Vector from '../public/Vector.png';
import shape from '../public/shape.png';


const Footer = () => {
    return (
        <section className=' h-[267px] bg-[#0d0d0d] flex flex-row p-10 justify-around items-center '>
            {/* Coding Adda  */}
            <div>
                <div className=' flex flex-row '>
                    <Image src={CodingAdda} width={95} height={95} alt='logo' />
                    <h1 className=' text-[#2982b9] font-body font-black text-[66.78px] '>Coding Adda</h1>
                </div>
                <p className=' text-[#2982b9] text-[20.29px] font-pada w-[86%] mt-5'>An Edtech Channel where we teach you about coding and provide you with Coding And Tech Hacks.</p>
            </div>
            {/* CTA */}
            <div>
                {/* Mail */}
                <div className=' text-[#2982b9] text-[23.75px] font-pada flex flex-row '>
                    <Image src={Vector} width={38.64} height={21.36} alt='Vector' />
                    <a href="mailto:addacoding01@gmail.com" target='_blank' rel="noreferrer" className='ml-5'>addacoding01@gmail.com</a>
                </div>
                {/* Website */}
                <div className=' text-[#2982b9] text-[23.75px] font-pada flex flex-row mt-10 '>
                    <Image src={shape} width={38.64} height={21.36} alt='shape' />
                    <a href="www.codingadda.com" target='_blank' className='ml-5'>www.codingadda.com</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;