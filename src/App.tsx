import type { Component } from 'solid-js';

import logo from './logo.svg';
import GhCard from './ghcard';
import pnkbg from './assets/pink.jpeg';
/*
   pfp    hi    |  socials  
	  blah      |
---------------------------
Top Repos: // fetch from ghs

Past Projects:
- PSU
*/

const GH_pfp = "https://avatars.githubusercontent.com/u/44528100?v=4"

const App: Component = () => {
	return (
		<>
			<div class='dark:bg-zinc-900/90 bg-white/70 min-h-screen overflow-hidden dark:text-neutral-200 flex flex-col relative' >
				<div class="container mx-auto">
					{/* Top Panels */}
					<div class='flex flex-row flex-[.2] min-w-full' >
						<div class='flex xl:flex-row flex-col min-w-full'>
							{/* top left panel */}
							<div class='flex-[.6] m-5 p-3 rounded-xl bg-pink-300/20 dark:bg-pink-400/20 dark:border-neutral-200/20 border-neutral-600/20 border shadow-xl'>
								<div class='flex justify-center items-center flex-col md:flex-row md:justify-start md:items-center h-full'>

									{/* ... */}

									<div class='md:flex-[.6] flex justify-center' >
										<img src={GH_pfp} width={256} height={256} alt='github pfp' class='rounded-xl mb-4 md:mb-0' />
									</div>
									<div class='md:flex-[.4]'>
										<h1 class='font-semibold text-xl'>
											Hi there, I'm Aixeria
										</h1>
										<p class='text-lg'>
											I like to program, play games, and listen to music.
										</p>
									</div>


								</div>
							</div>
							{/* top right panel */}
							<div class='flex-[.4] m-5 p-8 rounded-xl bg-pink-300/20 dark:bg-pink-400/20 dark:border-neutral-200/20 border-neutral-600/20 border shadow-xl'>

								{/* ... */}

								<h1 class='text-xl font-semibold' >Social Medias</h1>
								<ul class='list-disc list-inside text-lg'>
									<li>discord: <a class="hover:underline" href='https://discord.com/users/288062966803333120'>Aixeria#0001</a></li>
									<li>twitter: <a class="hover:underline" href='https://twitter.com/@aixeria/'>Aixeria</a></li>
									<li>steam:   <a class="hover:underline" href='https://steamcommunity.com/id/pozm/'>Aixeria</a></li>
									<li>twitch:  <a class="hover:underline" href='https://twitch.tv/qaixeria/'>qAixeria</a></li>
									<li>github:  <a class="hover:underline" href='https://github.com/pozm/'>Pozm</a></li>
									<li>last.fm: <a class="hover:underline" href='https://last.fm/user/pozm/'>Pozm</a></li>
								</ul>

							</div>
						</div>
					</div>
					{/* bottom panel */}
					<div class='flex-[.8] m-5 p-8 rounded-xl bg-pink-300/20 dark:bg-pink-400/20 dark:border-neutral-200/20 border-neutral-600/20 border shadow-xl'>

						{/* ... */}

						<h1 class='text-xl font-semibold mb-4' >About me</h1>
						<p class='text-lg mb-4 max-w-4xl ml-4'>
							I'm a 17 year old computer science student from the United Kingdom. I enjoy most programming whether that be frontend, backend or app related development.
							I'm also fond of reverse engineering and general low level programming. Rust is by far my favourite programming language as it allows me to create apps in all of the above categories while maintaining a high level of safety.
						</p>
						<h1 class='text-xl font-semibold mb-4' >Open Source Projects</h1>
						<div class='flex flex-wrap justify-around' >
							<GhCard fn='pozm/bsod-rs' />
							<GhCard fn='pozm/godot-key-extract' />
							<GhCard fn='pozm/folia' />
							<GhCard fn='pozm/poggers' />
							<GhCard fn='pozm/gdke' />
							<GhCard fn='pozm/mci' />
						</div>
						<h1 class='text-xl font-semibold mb-4' >Previous Works</h1>
						<ul class='list-disc list-inside text-lg ml-4' >
							<li>
								2020: NHS
								<p>I've made numerous 3d models for a mobile app to be created to provide patients a tour and numerous other utilities</p>
							</li>
							<li>
								2020: PSU
								<p>At psu i was tasked with creating a backend, frontend and a discord bot to interact with their Lua obfuscator.</p>
							</li>
						</ul>

					</div>
					{/* background image blurred */}
					<div class='top-0 left-0 -z-10 overflow-hidden h-full absolute'>
						<img class='overflow-hidden -z-10 w-screen h-full blur-xl object-cover' src={pnkbg} alt='how' />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
