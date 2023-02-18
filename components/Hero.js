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
			{/* <DataOf6
				Heading='STAGE & SNAPSHOT'
				Description='Working with snapshots and the Git staging area'
				Code1='git status'
				Code1Desc='show modified files in working directory, staged for your next commit'
				Code2='git add [file]'
				Code2Desc='add a file as it looks now to your next commit (stage)'
				Code3='git reset [file]'
				Code3Desc='unstage a file while retaining the changes in working directory'
				Code4='git diff'
				Code4Desc='diff of what is changed but not staged'
				Code5='git diff --staged'
				Code5Desc='diff of what is staged but not yet commited'
				Code6='git commit -m “[descriptive message]”'
				Code6Desc='commit your staged content as a new commit snapshot'
			/> */}
			{/* <DataOf5
				Heading='BRANCH & MERGE'
				Description='Isolating work in branches, changing context, and integrating changes'
				Code1='git branch'
				Code1Desc='list your branches. a * will appear next to the currently active branch'
				Code2='git branch [branch-name]'
				Code2Desc='create a new branch at the current commit'
				Code3='git checkout'
				Code3Desc='switch to another branch and check it out into your working directory'
				Code4='git merge [branch]'
				Code4Desc='merge the specified branch’s history into the current one'
				Code5='git log'
				Code5Desc='show all commits in the current branch’s history'
			/> */}
			{/* <DataOf5
				Heading='INSPECT & COMPARE'
				Description='Examining logs, diffs and object information'
				Code1='git log'
				Code1Desc='show the commit history for the currently active branch'
				Code2='git log branchB..branchA'
				Code2Desc='show the commits on branchA that are not on branchB'
				Code3='git log --follow [file]'
				Code3Desc='show the commits that changed file, even across renames'
				Code4='git diff branchB...branchA'
				Code4Desc='show the diff of what is in branchA that is not in branchB'
				Code5='git show [SHA]'
				Code5Desc='show any object in Git in human-readable format'
			/> */}
		</section>
	)
}

export default Hero;