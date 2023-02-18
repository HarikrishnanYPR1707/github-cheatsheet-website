import React from 'react'
import DataOf2 from './Data/DataOf2';
import DataOf3 from './Data/DataOf3';
import DataOf4 from './Data/DataOf4';
import DataOf5 from './Data/DataOf5';
import DataOf6 from './Data/DataOf6';

const Hero = () => {
	return (
		<section className=' bg-[#1e1e1e] pt-5 px-5'>
			<DataOf3
				Heading='Setup'
				Description='Configuring user information used across all local repositories'
				Code1='git config --global user.name “[firstname lastname]”'
				Code1Desc='set a name that is identifiable for credit when review version history'
				Code2='git config --global user.email “[valid-email]”'
				Code2Desc='set an email address that will be associated with each history marker'
				Code3='git config --global color.ui auto'
				Code3Desc='set automatic command line coloring for Git for easy reviewing'
			/>
			<DataOf2
				Heading='SETUP & INIT'
				Description='Configuring user information, initializing and cloning repositories'
				Code1='git init'
				Code1Desc='initialize an existing directory as a Git repository'
				Code2='git clone [url]'
				Code2Desc='retrieve an entire repository from a hosted location via URL'
			/>
		</section>
	)
}

export default Hero;