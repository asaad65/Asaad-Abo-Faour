import Link from "next/link";
export default function Projects(){
    const projects = [
    {
        id : 0,
        name: "Portfolio",
        src:'../imegs/protofily.png',
        description: "A personal website where I showcase my work",
        technologies:['Next.js','Tailwind','js','css','html'],
        github: "",
        liveDemo: ""
    }, {
        id : 1,
        name: "E-commerce store",
        src:'../imegs/E-commerce.png',
        description: "It features adding products to the cart, searching, filtering, and changing mood (dark, light).",
        technologies:['Next.js','redux','js','css','html'],
        github: "https://github.com/asaad65/online-store",
        liveDemo: "https://online-store-blush-delta.vercel.app/"
    },
    {
        id : 2,
        name: "Weather App",
        src:'../imegs/WeatherInSyria.png',
        description: "It features language switching from Arabic to English and vice versa.",
        technologies:['react','redux','js','css','html'],
        github: "https://github.com/asaad65/Weather-in-Syria",
        liveDemo: "https://asaad65.github.io/Weather-in-Syria/"
    },
    {
        id : 3,
        name: "Tasks",
        src:'../imegs/Tasks.png',
        description: "It features the ability to add, edit, delete, and filter tasks.",
        technologies:['react','js','css','html'],
        github: "https://github.com/asaad65/Tasks",
        liveDemo: "https://asaad65.github.io/Tasks/"
    }
 ]
    
    const project = projects.map(p=>{
           const visibleTech = p.technologies.slice(0, 3);
        const hiddenCount = p.technologies.length - 3;

        return(
       
                <div key={p.id} className=" duration-500 transition-all bg-[#12141c] group text-white p-3 h-full rounded-xl cursor-pointer hover:scale-110">
                   
                    <img src={p.src}></img>
                    <div>
                         <h2 className=" font-bold text-2xl mt-2 border-b-2 border-[#12141c] group-hover:border-green-500">{p.name}</h2>
                      <p >
                         {p.description}
                      </p>
                      <div className="flex gap-1 mt-2">
          
                      {visibleTech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-green-300 rounded-3xl px-3 py-1 font-bold text-black text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {hiddenCount > 0 && (
                  <span className="bg-green-300 rounded-3xl px-3 font-bold py-1 text-black text-xs">
                    +{hiddenCount}
                  </span>
                )}


                        
                       
                      </div>
                    </div>
                    <div className=" flex justify-between items-center mt-2">

                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                            <img src=".\imegs\github-svgrepo-com.svg"  alt="GitHub"  className="border-2 border-white rounded-full w-10 bg-white group-hover:bg-green-500" />
                        </a>
                         <a href={p.liveDemo} target="_blank" rel="noopener noreferrer">
                       <button className="btn" style={{fontSize:'15px'}}>Live Preview</button>
                       </a>
                      
                    </div>
                      

                    
                    

                      
                   
                </div>
          
        )
    })
    return(
        <>
        {project}
        </>
    )
}