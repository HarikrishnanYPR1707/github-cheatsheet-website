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
            <div className="border-2 border-green-500 lg:mt-5 lg:flex lg:justify-center lg:items-center">
                {/* Social Media */}
                <div className="border-2 border-red-500 flex justify-center mt-5 lg:mt-0 lg:flex-col">
                    <a href="https://www.youtube.com/@coding_adda" target='_blank' rel="noreferrer" className="px-2 lg:py-2">
                        {/* Youtube */}
                        <Image src={Youtube} alt='Youtube' className="w-[57px]" />
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/_coding_adda/" target='_blank' rel="noreferrer" className="px-2 lg:py-2">
                        <Image src={Instagram} alt='Instagram' className="w-[57px]" />
                    </a>
                    <a href="https://www.linkedin.com/company/addacoding" target='_blank' rel="noreferrer" className="px-2 lg:py-2">
                        {/* LinkedIn */}
                        <Image src={LinkedIn} alt='LinkedIn' className="w-[57px]" />
                    </a>
                    <a href="https://github.com/CodingAdda0506" target='_blank' rel="noreferrer" className="px-2 lg:py-2">
                        {/* Github */}
                        <Image src={GitHub} alt='GitHub' className="w-[57px]" />
                    </a>
                </div>
                {/* top section > mid section */}
                <div className="border-2 border-blue-500 md:my-6 md:flex md:justify-center md:items-center lg:ml-20">
                    {/* Coding Adda Icon */}
                    <div className='border-2 flex flex-col justify-center items-center md:pr-4 md:scale-90 lg:scale-100'>
                        <Image src={CodingAdda} alt='logo' className="w-[78px] lg:w-[95px]" />
                        <h1 className='-mt-2 text-[#2982B9] font-black text-[56px] lg:text-[4.25rem]'>Coding Adda</h1>
                    </div>

                    {/* Arrow Icon */}
                    <div className="border-2 -m-5 flex justify-center items-center gap-10 lg:m-5">
                        <Image src={arrowLeft} alt='arrow' className='w-[57px] h-[133px] md:hidden' />
                        <Image src={arrowMiddle} width={146.51} height={79.87} alt='arrow' className='w-[80px] h-[44px] rotate-90 md:rotate-0 lg:w-[146px] lg:h-[80px]' />
                        <Image src={arrowRight} alt='arrow' className='w-[57px] h-[133px] md:hidden' />
                    </div>
                    {/* Github Section */}
                    <div className='flex flex-col justify-center items-center border-2 md:pl-4 md:scale-90 lg:scale-100'>
                        <Image src={GitHubWhite} alt='GitHubWhite' className="w-[99px] lg:w-[120px] lg:h-[120px]"/>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className='-mt-8 text-white text-[45px] font-black'>Github </h1>
                            <h1 className="-mt-5 text-[#02DAC5] text-[45px] font-black lg:text-[54px]">&quot;CheatSheet&quot;</h1>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Main */}
            <div className='border-2 pb-10 pt-8 flex flex-col justify-center items-center md:pt-2 md:pb-5 md:scale-90 lg:scale-100'>
                {/* Playlist button */}
                <h1 className='text-white text-[31px] font-black'>Visit our Playlist</h1>
                <a href="" className="border-2 px-5 py-1 bg-[#D9D9D9] rounded-md">
                    <button className='text-black font-black'>Link to Playlist</button>
                </a>
            </div>
        </section>
    )
}

export default Header;