import { Component, For } from "solid-js";
import { createResource } from "solid-js";


const fetchGhRepo = async (fn:string) => (await fetch(`https://api.github.com/repos/${fn}`,{credentials:"omit",cache:"force-cache",mode:"cors"})).json()

const ConvLang = (lang : string) => {
	switch (lang) {
		case "C++":
			return "CPLUSPLUS";
		default:
			return lang

	}
}


const GhCard: Component<{fn:string}> = (props) => {
    const [repoData] = createResource(props.fn,fetchGhRepo); 
    return (
        <a class="w-96 inline-grid mb-4" href={`https://github.com/${props.fn}`} >
            {repoData.loading ? <div>
                <h1>Loading...</h1>
            </div> : <div class="p-4 rounded-xl bg-pink-400/30 border-pink-500/30 flex flex-col border transition-colors hover:bg-pink-400/70" >
				<div class="flex mb-3">
					{/* top */}
					<div class="flex-1">
						{/* left // strech */}
						<h1 class="font-semibold text-xl dark:text-white/80 text-black/80">{repoData().name}</h1>
						<p class="dark:text-neutral-300 text-neutral-600" >{repoData().description}</p>
					</div>
					<div class="flex flex-col items-end" >
						{/* right */}
						<p class="dark:text-neutral-300 text-neutral-900 mb-3 font-semibold" >⭐{repoData().stargazers_count}</p>
						<img width={32} height={32} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${ConvLang(repoData().language).toLowerCase()}/${ConvLang(repoData().language).toLowerCase()}-plain.svg`} alt={repoData().language} />
					</div>
				</div>
				{/* bottom */}
				<div class="flex flex-wrap mt-auto">

					<For each={repoData().topics} fallback={<></>}>
						{(topic) => <div class="bg-fuchsia-300/90 w-fit px-2 rounded-full mb-1 mr-2 text-black text-center border border-fuchsia-500/60" >{topic}</div>}
					</For>
				</div>
            </div>}
        </a>
    )

}

export default GhCard;