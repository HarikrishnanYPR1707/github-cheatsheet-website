import Image from 'next/image';
import React from 'react';
import CodingAdda from '../public/CodingAdda.png';
import Vector from '../public/Vector.png';
import shape from '../public/shape.png';


const Footer = () => {

    return (
        <section className='bg-black p-5 text-[#2982B9] grid grid-cols-2 gap-2'>
            {/* Coding Adda  */}
            <div className=''>
                <div className='flex justify-start items-center gap-2'>
                    <Image src={CodingAdda} alt='logo' className="w-[36px] md:w-[45px] lg:w-[75px]" />
                    <h1 className='font-body font-black text-[21px] md:text-[30px] lg:text-[56px]'>
                        Coding Adda
                    </h1>
                </div>
                <p className='pt-1 text-[12px] font-pada md:text-[14px] lg:text-[20px]'>
                    Hello Everyone,
                    Presenting you CODING ADDA, We at Coding Adda will help you solve problems in Coding.
                    We at Coding Adda try to clarify the concepts of Coding through short videos and real-life examples.
                    Do support us in our journey.
                    Like, Share and Subscribe to the Channel.
                </p>
            </div>
            {/* CTA */}
            <div className='flex justify-end items-center'>
                {/* Mail */}
                <div className='flex justify-start items-center gap-2'>
                    <Image src={Vector} alt='Vector' className="w-[20px] h-[14px] md:w-[30px] md:h-[24px] lg:w-[38px] lg:h-[21px]" />
                    <a href='mailto:addacoding01@gmail.com' target='_blank' rel='noreferrer' className='text-[12px] font-pada md:text-[14px] lg:text-[23px]'>
                        addacoding01@gmail.com
                    </a>
                </div>
                {/* Website */}
                {/* <div className=''>
                    <Image src={shape} width={38.64} height={21.36} alt='shape' />
                    <a href='https://www.codingadda.com' target='_blank' className='ml-4 sm:ml-5'>
                        www.codingadda.com
                    </a>
                </div> */}
            </div>
        </section>

    )
}

export default Footer;
