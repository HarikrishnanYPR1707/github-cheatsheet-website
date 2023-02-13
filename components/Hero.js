import React from 'react'
import Data from './Data';

const Hero = () => {
	return (
		<section className=' bg-[#1e1e1e] font-body font-black flex flex-wrap justify-center items-center '>
			<Data
				Heading='Setup'
				Description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
				Code1='npm install tailwindcss@latest postcss@latest autoprefixer@latest'
				Code1Desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
				Code2='npm install tailwindcss@latest postcss@latest autoprefixer@latest'
				Code2Desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
			/>
			<Data
				Heading='Setup'
				Description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
				Code1='npm install tailwindcss@latest postcss@latest autoprefixer@latest'
				Code1Desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
				Code2='npm install tailwindcss@latest postcss@latest autoprefixer@latest'
				Code2Desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
			/>


		</section>
	)
}

export default Hero;