
import Contact from "@/app/component/Contact"
import Link from "next/link";
import Projects from "./component/Projects";
import NavMobile  from "./component/NavMobile";
import AnimeScroll from "./Gsap/AnimeScroll";
import { AnimeText } from "./Gsap/AnimeText";
import { AnimeNumper } from "./Gsap/AnimeNumper";

export default function Home() {
 
   
 return (
    <>
      <AnimeScroll
  direction="left"
  targetId="About"
/>
   <AnimeScroll
  direction="bottom"
  targetId="Skills"
/>
   <AnimeScroll
  direction="bottom"
  targetId="Home"
/>
   <AnimeScroll
  direction="right"
  targetId="Services"
/>
   <AnimeScroll
  direction="bottom"
  targetId="Portfolio"
/>
   <AnimeScroll
  direction="left"
  targetId="Contact"
/>

    <div className=" w-full flex justify-between items-center px-6 py-4 md:py-5 bg-black z-50 fixed border-b-2 border-gray-600">
          <span className=" rounded-4xl w-25 responsWidth"><img src="..\imegs\Logo.png"></img></span>
          <div className="flex justify-center items-center gap-8 text-white cursor-pointer rsponsLink">
            <Link href="#Home">
            <p className="link">Home</p>
            </Link>

            <Link href="#About">
            <p className="link">About Me</p>
            </Link>

            <Link href="#Skills">
            <p className=" link">My Skills</p>
            </Link>

            <Link href="#Services">
            <p className="link">My Services</p>
            </Link>

            <Link href="#Portfolio">
            <p className="link">Portfolio</p>
            </Link>

            <Link href="#Contact">
            <p className="link">Contact Me</p>
            </Link>
            
          </div>
          
          <NavMobile />
        </div>
        <AnimeNumper/>
   <div className=" h-screen  w-full flex justify-between items-center max-w-7xl m-auto imeg-mobile" id="Home">
     
     <div className="text-white text-3xl CenterText">
      <span className=" text-green-400 text-3xl">Hey !</span> I'm <span className=" text-4xl  md:text-6xl">Asaad</span>
       <br/>
        <AnimeText/>
        <br/>
         <Link href="#Contact">
        <button className="btn">Her Me</button>
         </Link>
          <button className="btn ml-3">Download CV</button>
     </div>
       <div className=" border-2 border-green-500 rounded-full">
     
       <div className=" border-2 border-green-500 rounded-full border-dashed">
      <img src="..\imegs\picture.jpeg" className=" w-xl rounded-full img m-0.5 border-3 border-green-500"></img>
      </div>
      </div>
   </div>

   <div className="bg-black w-full flex justify-between max-w-7xl m-auto items-center gap-4 text-white " id="About">
       <img src="..\imegs\home.png" className="w-2xl imgAbout"></img>

       <div className="TextAboutMe">
          <h2 className=" text-6xl font-bold mb-3">About Me</h2>
          <h3 className="text-3xl text-green-500 font-bold mb-2">Hey ! Let's work on project together</h3>
          <p className="text-gray-500 mb-3" >I'm a passionate web developer who transforms my ideas into effective, production-ready web products. I specialize in building interactive interfaces, improving user experience, and optimizing websites for search engines. I'm constantly exploring advanced technologies in React and Next to enhance my projects.</p>
          <div className=" grid grid-cols-3 gap-4 mb-3 text-xl font-bold Advantages ">
             <span>1. Creative Thinking</span>
             <span>2. Problem Solving</span>
             <span>3. Generating Ideas</span>
             <span>4. Implementing Project</span>
             
          </div>
          <Link href="#Contact">
          <button className="btn">Contact Me</button>
          </Link>
       </div>
  </div>

  <div className=" max-w-7xl m-auto  border-t-2 border-green-300 mt-9" id="Skills">
    <h2 className="text-center font-bold text-4xl text-white mt-6">Skills</h2>
    <p className=" text-gray-300 text-center mt-2">
      I have experience with design tools such as Material UI <img className=" inline w-5 hover:scale-125" src="../imegs/Material.png"></img>, Bootstrap <img className=" inline w-5 hover:scale-125" src="../imegs/Bootstrap.png"></img>, and Tailwind <img className="inline w-5 hover:scale-125" src="../imegs/Tailwind.png"></img>, and I also have experience with GitHup and Git.
    </p>
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-3">

<div className="group border-2 border-green-600 hover:border-[#e34f26] transition-colors duration-500 rounded-3xl text-white text-2xl font-bold mt-10 text-center">
      <div className="w-44 pl-4 py-1 rounded-3xl transition-all duration-500 group-hover:w-full group-hover:bg-[#e34f26] group-hover:border-[#e34f26] cursor-pointer">
        HTML
      </div>
    </div>
    <div className="group border-2 border-green-600 hover:border-[#1572B6] transition-colors duration-500 rounded-3xl text-white text-2xl font-bold mt-10 text-center">
      <div className="w-44 pl-4 py-1 rounded-3xl transition-all duration-500 group-hover:w-full group-hover:bg-[#1572B6] group-hover:border-[#1572B6] cursor-pointer">
        Css
      </div>
    </div>
    <div className="group border-2 border-green-600 hover:border-[#F7DF1E] transition-colors duration-500 rounded-3xl text-white text-2xl font-bold mt-10 text-center">
      <div className="w-44 pl-4 py-1 rounded-3xl transition-all duration-500 group-hover:w-full group-hover:bg-[#F7DF1E] group-hover:border-[#F7DF1E] cursor-pointer">
      Java Script
      </div>
    </div>
    <div className="group border-2 border-green-600 hover:border-[#61DAFB] transition-colors duration-500 rounded-3xl text-white text-2xl font-bold mt-10 text-center">
      <div className="w-44 pl-4 py-1 rounded-3xl transition-all duration-500 group-hover:w-full group-hover:bg-[#61DAFB] group-hover:border-[#61DAFB] cursor-pointer">
      React js
      </div>
    </div>
    <div className="group border-2  border-green-600 hover:border-[#12141c] transition-colors duration-500 rounded-3xl text-white text-2xl font-bold mt-10 text-center">
      <div className="w-44 pl-4 py-1  rounded-3xl transition-all duration-500 group-hover:w-full group-hover:bg-[#12141c] group-hover:border-[#12141c] cursor-pointer">
      Next js
      </div>
    </div>
    <div className="group border-2  border-green-600 hover:border-[#F1502F] transition-colors duration-500 rounded-3xl text-white text-2xl font-bold mt-10 text-center">
      <div className="w-44 pl-4 py-1 rounded-3xl transition-all duration-500 group-hover:w-full group-hover:bg-[#F1502F] group-hover:border-[#F1502F] cursor-pointer">
       Git-GitHub
      </div>
    </div>
        </div>
        
  </div>
  

  <div className=" mt-10 text-white max-w-7xl mx-auto px-4" id="Services">
    <h2 className=" text-4xl font-bold text-center">My Services</h2>
    <h3 className=" text-xl font-bold text-center text-green-600 mt-3">Good design , Best Expirence</h3>
    <div className=" w-full bg-gray-700 mt-6  p-4 rounded-xl border-t-2 border-green-500">
      <h3 className="text-2xl text-center text-green-600 font-bold">Front-End Developer</h3>
      <span className="text-2xl md:text-3xl ">I build responsive, vibrant, and engaging websites with a focus on performance, accessibility, and SEO.</span>
    </div>
  </div>

  <div className=" mt-10 text-white max-w-7xl mx-auto px-4" id="Portfolio">
    <h2 className=" text-4xl font-bold text-center"  >My Porfolio</h2>
    <h3 className=" text-xl font-bold text-center text-green-600 mt-3">Spreading quality designs everywhere</h3>
    <div className=" grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
      <Projects/>
    </div>
  </div>
   <div id="Contact">
  <Contact/>
 </div>
  <div className=" w-full bg-green-700 p-1 text-white text-center mt-3">
  Developed by❤️ Asaad ❤️
  </div>
   </>
  );
}
