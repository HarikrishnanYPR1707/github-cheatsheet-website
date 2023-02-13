import Image from 'next/image';
import React from 'react'
import Instagram from '../public/Instagram.png';
import Youtube from '../public/Youtube.png';
import LinkedIn from '../public/Linkedin.png';
import GitHub from '../public/GitHub.png';
import GitHubWhite from '../public/GitHubWhite.png';
import CodingAdda from '../public/CodingAdda.png';
import arrowLeft from '../public/arrow1.png';
import arrowMiddle from '../public/arrow.png';
import arrowRight from '../public/arrow2.png';


const Header = () => {

    return (
        // Main Div
        <section className="bg-[#0d0d0d] border-2 border-black flex flex-col justify-center items-center">
            {/* Top Main */}
            <div className="border-2 border-green-500">
                {/* Social Media */}
                <div className="border-2 border-red-500 flex justify-center mt-5">
                    <a href="https://www.youtube.com/@coding_adda" target='_blank' rel="noreferrer" className="px-2">
                        {/* Youtube */}
                        <Image src={Youtube} alt='Youtube' className="w-[57px]" />
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/_coding_adda/" target='_blank' rel="noreferrer" className="px-2">
                        <Image src={Instagram} alt='Instagram' className="w-[57px]" />
                    </a>
                    <a href="https://www.linkedin.com/company/addacoding" target='_blank' rel="noreferrer" className="px-2">
                        {/* LinkedIn */}
                        <Image src={LinkedIn} alt='LinkedIn' className="w-[57px]" />
                    </a>
                    <a href="https://github.com/CodingAdda0506" target='_blank' rel="noreferrer" className="px-2">
                        {/* Github */}
                        <Image src={GitHub} alt='GitHub' className="w-[57px]" />
                    </a>
                </div>
                {/* top section > mid section */}
                <div className="border-2 border-blue-500">
                    {/* Coding Adda Icon */}
                    <div className='border-2 flex flex-col justify-center items-center'>
                        <Image src={CodingAdda} alt='logo' className="w-[78px]" />
                        <h1 className='-mt-2 text-[#2982B9] font-black text-[56px]'>Coding Adda</h1>
                    </div>

                    {/* Arrow Icon */}
                    <div className="border-2 -m-5 flex justify-center items-center gap-10">
                        <Image src={arrowLeft} alt='arrow' className='w-[57px] h-[133px]' />
                        <Image src={arrowMiddle} width={146.51} height={79.87} alt='arrow' className='w-[80px] h-[44px] rotate-90' />
                        <Image src={arrowRight} alt='arrow' className='w-[57px] h-[133px]' />
                    </div>
                    {/* Playlist Name */}
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={GitHubWhite} width={120.78} height={120.78} alt='GitHubWhite' />
                        <div className="flex flex-col justify-center items-center">
                            <h1 className='border-2 -mt-8 text-white text-[45px] font-black'>Github </h1>
                            <h1 className="border-2 -mt-5 text-[#02DAC5] text-[45px] font-black">&quot;CheatSheet&quot;</h1>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Main */}
            <div className='border-2 pb-10 flex flex-col justify-center items-center'>
                {/* Playlist button */}
                <h1 className='mt-8 text-white text-[31px] font-black'>Visit our Playlist</h1>
                <a href="" className="border-2 px-5 py-1 bg-[#D9D9D9] rounded-md">
                    <button className='text-black font-black'>Link to Playlist</button>
                </a>
            </div>
        </section>
    )
}

export default Header;