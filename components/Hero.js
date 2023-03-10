import React from 'react'
import DataOf2 from './Data/DataOf2';
import DataOf3 from './Data/DataOf3';
import DataOf4 from './Data/DataOf4';
import DataOf5 from './Data/DataOf5';
import DataOf6 from './Data/DataOf6';

const Hero = () => {
	return (
		<section className=' bg-[#1e1e1e] pt-5 px-5 md:flex md:flex-col md:justify-center md:items-center'>
			<DataOf3
				Heading='SETUP'
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
			<DataOf6
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
			/>
			<DataOf5
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
			/>
			<DataOf5
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
			/>
			<DataOf3
				Heading='TRACKING PATH CHANGES'
				Description='Versioning file removes and path changes'
				Code1='git rm [file]'
				Code1Desc='delete the file from project and stage the removal for commit'
				Code2='git mv [existing-path] [new-path]'
				Code2Desc='change an existing file path and stage the move'
				Code3='git log --stat -M'
				Code3Desc='show all commit logs with indication of any paths that moved'
			/>
			<DataOf5
				Heading='SHARE & UPDATE'
				Description='Retrieving updates from another repository and updating local repos'
				Code1='git remote add [alias] [url]'
				Code1Desc='add a git URL as an alias'
				Code2='git fetch [alias]'
				Code2Desc='fetch down all the branches from that Git remote'
				Code3='git merge [alias]/[branch]'
				Code3Desc='merge a remote branch into your current branch to bring it up to date'
				Code4='git push [alias] [branch]'
				Code4Desc='Transmit local branch commits to the remote repository branch'
				Code5='git pull'
				Code5Desc='fetch and merge any commits from the tracking remote branch'
			/>
			<DataOf2
				Heading='REWRITE HISTORY'
				Description='Rewriting branches, updating commits and clearing history'
				Code1='git rebase [branch]'
				Code1Desc='apply any commits of current branch ahead of specified one'
				Code2='git reset --hard [commit]'
				Code2Desc='clear staging area, rewrite working tree from specified commit'
			/>
			<DataOf4
				Heading='TEMPORARY COMMITS'
				Description='Temporarily store modified, tracked files in order to change branches'
				Code1='git stash'
				Code1Desc='Save modified and staged changes'
				Code2='git stash list'
				Code2Desc='list stack-order of stashed file changes'
				Code3='git stash pop'
				Code3Desc='write working from top of stash stack'
				Code4='git stash drop'
				Code4Desc='discard the changes from top of stash stack'
			/>
			<DataOf2
				Heading='IGNORING PATTERNS'
				Description='Preventing unintentional staging or commiting of files'
				Code1='logs/, *.notes, pattern*/'
				Code1Desc='Save a file with desired paterns as .gitignore with either direct string matches or wildcard globs.'
				Code2='git config --global core.excludesfile [file]'
				Code2Desc='system wide ignore patern for all local repositories'
			/>
		</section>
	)
}

export default Hero;