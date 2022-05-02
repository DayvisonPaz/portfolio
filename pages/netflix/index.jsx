import Image from 'next/image'
import React,{useState,useEffect} from 'react'
export default function Netflix(){
    const [filmes,Usefilmes]= useState([])
const [data,Usedata] = useState([])
const url = 'https://api.themoviedb.org/3/discover/movie?api_key='
const apikey = 'e7b99a4588c70c8538cfff5bca735206'
const config = '&language=pt-BR&with_genres='
const genres = ['28','12','16','35','80','99','18','14','10751','36','27','10749','878']
const [leftaction,Useleftaction] = useState(0)
const [counter,Setcounter] = useState(0)
const painel = []

 const genresall= [
      {
          "id": 28,
          "name": "Ação"
      },
      {
          "id": 12,
          "name": "Aventura"
      },
      {
          "id": 16,
          "name": "Animação"
      },
      {
          "id": 35,
          "name": "Comédia"
      },
      {
          "id": 80,
          "name": "Crime"
      },
      {
          "id": 99,
          "name": "Documentário"
      },
      {
          "id": 18,
          "name": "Drama"
      },
      {
          "id": 10751,
          "name": "Família"
      },
      {
          "id": 14,
          "name": "Fantasia"
      },
      {
          "id": 36,
          "name": "História"
      },
      {
          "id": 27,
          "name": "Terror"
      },
      
      {
          "id": 10749,
          "name": "Romance"
      },
      {
          "id": 878,
          "name": "Ficção científica"
      },

  ]




useEffect(()=>{
genres.map((e)=>{buscar(e)})
 async function buscar(e){
   
   await fetch(url+apikey+config+e).then(respo=>respo.json()).then(respo=>{ if(data.length === genres.length){return Usefilmes(data)} ;painel.push(data[0]) ;data.push(respo.results);backdrop()})}}, [])

function backdrop(){

setInterval(()=>{counter+=1;Setcounter(counter);counter===19?Setcounter(0):''},10000)
let this_genres=[]
//let datas = 
//(data[0][counter].genre_ids).map((e)=> {let position =genres.indexOf(e);this_genres.push(genres[position])})
//console.log(this_genres)
}
  
return(<>
<div id='body'>{filmes.length>0?

<div className='w-screen overflow-hidden'>
<section className=' text-white bg-gray-900 w-screen h-96 overflow-hidden flex'>
  <div className='w-4/12 h-full '>
  
  <p className='text-3xl'>{data[0][counter].title?data[0][counter].title:'sem titulo' }</p>
  <p className='m-4'>{(data[0][counter].release_date).substring(0,4)}</p>
  
  <p>{(data[0][counter].overview).substring(0,300)+'...'}</p>
  {}

  </div><Image
  className=' w-8/12 ' src={'https://image.tmdb.org/t/p/original'+data[0][counter].backdrop_path} alt='capa' /></section>

  <section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image 
 onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[0].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[1].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[2].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[3].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[4].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[5].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[5].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[6].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[7].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[8].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[9].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[10].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[11].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>
<section style={{marginLeft:leftaction,'grid-template-columns':'repeat(20,1fr)',"width":"4000px"}} className=' w-screen overflow-hidden h-44 hover:h-80 bg-black grid grid-flow-col grid-rows-1 p-4 '>
<div className=' left-0 right-0  absolute text-white flex justify-between'> <p><Image onClick={()=>{Useleftaction(leftaction+200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="bao" /></p><p><Image onClick={()=>{Useleftaction(leftaction-200)}} className='w-10 bg-white' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bao" /></p></div>
{filmes[12].map((e)=><div key={e.id} className='m-4 font text-xs hover:scale-125  text-black hover:text-white  '>  <Image alt='capa' src={"https://image.tmdb.org/t/p/original" +e.backdrop_path}/>
<p>{e.title}</p><p >{ e.overview.substring(0,135)+'...'}</p></div>)}</section>

</div>:'carregando...'}</div></>)}