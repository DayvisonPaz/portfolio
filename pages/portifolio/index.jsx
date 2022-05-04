import Image from "next/image"
export default function Portfolio(){

    return(
    <> <section className="w-full overflow-hidden"> 
    
<svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036"  d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,165.3C672,149,768,171,864,181.3C960,192,1056,192,1152,208C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    
    <div className=" text-5xl bg-gray-400 w-screen h-screen flex items-center flex-col justify-center" > 
    
    <h1 className=" text-center">HI, IM </h1>
    <h1 className=" text-white font-mono font-black  ">Dayvison Augusto da Paz Pereira</h1>    
    <h1>A Front-end Developer</h1></div>

    
    <div><p className=" flex m-20 justify-around bg-slate-500">Estudante de Analise e Desenvolvimenro de Sistemas <Image className="w-10 " width='40px' height='40px' src="/desc1.png" alt="" /></p> 
  
    
    <p className="flex justify-around text-right m-20 bg-slate-300" ><Image className="w-10" width='40px' height='40px' src="/desc2.png" alt="" /> Fascinado por conhecimento </p>


<p className="flex justify-around m-20 bg-gray-400">Amante e Fascinado por Tecnologia <Image width='40px' height='40px' className='w-10' src="/desc3.png" alt="" /></p>
    </div>
    
    
    
    <p className=" block m-40 text-center">Projetos</p>
    
    <div className="flex flex-wrap justify-around">

  <div className="h-96  w-1/3 m-1 border-2 bg-gray-500 border-gray-600">
    <div className="w-full h-4/5 relative"><Image layout="fill"   src="/documentacao.png" alt="doto" />
    </div> <p className="text-center">clone netflix</p></div>
  <div className="h-96  w-1/3 m-1 border-2 bg-gray-500 border-gray-600">
  <div className="w-full h-4/5 relative"><Image   layout="fill"  src="/manuscrito.png" alt="" /></div><p className="text-center">Loja de calçados</p></div>
  <div className="h-96 w-1/3 m-1 border-2 bg-gray-500 border-gray-600">
  <div className="w-full h-4/5 relative"><Image  layout="fill"  src="/store.png" alt="" /></div><p className="text-center">Manuscrito</p></div>
  <div className="h-96  w-1/3 m-1 border-2 bg-gray-500 border-gray-600">
  <div className="w-full h-4/5 relative"><Image  layout="fill"  src="/loja.png" alt="" />  </div> <p className="text-center">Tribut Santos Dumont</p></div>
  <div className="h-96  w-1/3 m-1 border-2 bg-gray-500 border-gray-600">
  <div className="w-full h-4/5 relative"><Image  layout="fill"  src="/santos dumont.png" alt="" /></div><p className="text-center">Loja Piano</p></div>
  <div className="h-96  w-1/3 m-1 border-2 bg-gray-500 border-gray-600">
  <div className="w-full h-4/5 relative"><Image  layout="fill"  src="/netflix.png" alt="" /> </div><p className="text-center">Documentação</p></div>


    </div>
    
<div className='justify-around mt-5 bg-gray-500 w-full flex pl-28'> 
<div>  <Image  width='8%' height='8%' src="/instagram.png" alt="" /><p>instagram</p></div>
<div><Image  width='8%' height='8%' src="/twitter.png" alt="" /><p>twitter</p></div>
<div><Image  width='8%' height='8%' src="/codepen.png" alt="" /><p>codepen</p></div>
<div><Image  width='8%' height='8%' src="/github.png" alt="" /><p>github</p></div>

</div>

    
    <div > 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    
    
   
    
   
      
    </section>
    </>
    )}