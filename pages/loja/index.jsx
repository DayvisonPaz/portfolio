import React,{useEffect,useState} from 'react'
import Image from 'next/image'
export default function Store(){
// states usados 
const [data,Setdata] = useState([]) // pegar os dados
const [view,Setview] = useState([]) // produto visualizado
const [unit,Setunit] = useState(1)  // unidade selecionada
const [cart,Setcart] = useState([]) // carrinho 
const [viewcart,Setviewcart] = useState([]) // observar carrinho
const [id,Setid] = useState(0) // criar id 
const [total,Settotal] = useState(0) // valor total da compra

// ao iniciar pegar os dados
useEffect(
   ()=>{buscar()
      async function buscar (){
          await fetch('http://localhost:3000/api/hello').then(dados=>dados.json()).then(response=>Setdata(response))}} ,[])
// aumentar e diminuir unidades
const units =(x)=>{
   if(unit<=0 ){Setunit(1)}else{x==='sum'?Setunit(unit+1):''
x==='subtract'?Setunit(unit-1):''}

}
// colocar produto no carrinho
const addcart = (x)=>{
Setid(id+1)
 let dados = {id:id+'x',name:view[0].name,backdrop:view[0].backdrop,total:unit,value:view[0].value};
cart.push(dados)
Setcart(cart)

cart.map((e)=>{Settotal(total+(e.total*e.value))})
Setview([])
Setunit(1)
}

const excluir = (x)=>{
   let buy =0
 let trash =  cart.filter((e)=>e.id !==x)

 trash.map((e)=>{buy += (e.total*e.value)})
 Settotal(buy)
Setcart(trash)
console.log(trash)
}

   
   return(<>
{/* header, e carrinho aqui*/}
  <header><div className="flex w-screen overflow-hidden fixed h-10 justify-center items-center text-white bg-indigo-900 ">LOJA DA COMUNIDADE</div> <div className='fixed right-7 w-8' > <Image onClick={()=>{Setviewcart(1)}} layout='fill' src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="" /></div>
<p className='fixed h-6 text-center w-6 top-2 right-2 rounded-full bg-red-500'>{cart.length}</p></header>  
    
{/*body e os elementos*/}
<section className="grid grid-cols-4 h-full  w-auto overflow-hidden " >

{view.length>0||viewcart>0?<div onClick={()=>{Setview([]),Setviewcart([])}} className='fixed bg-black w-screen h-full opacity-75'></div>:""}
{viewcart>0?<span className='bg-indigo-900 w-1/4 fixed mt-10 h-3/6 overflow-y-scroll text-white right-4'>{cart.length>0?cart.map((e)=> <div key={e.id} className='bg-black h-1/4 flex'><Image className='m-4' src={e.backdrop} alt="" /> <div className='w-3/6'><p className=''>{e.name}</p><p>{e.value} - x{e.total}</p></div><Image onClick={()=>excluir(e.id)} className='w-6 h-6 mr-4 mt-5 cursor-pointer ' src="https://cdn-icons.flaticon.com/png/512/5028/premium/5028066.png?token=exp=1650274686~hmac=dba0945408344560f629d8be22c1ccba" alt="" /> <p className='h-full p-4  w-1/4 bg-green-700'>{(e.total*e.value).toFixed(2)}</p></div>):''}<div className='fixed bg-red-500 top-80 mt-5 w-1/4 h-10'>total:{total} </div></span>:''}

   {view.length>0?<section className="fixed  right-1/3 top-20  w-1/3 h-3/3 bg-gray-200">
   <Image  layout='fill' onClick={()=>Setview([])} className='right-0 m-1 absolute w-4 cursor-pointer ' src="https://cdn-icons.flaticon.com/png/512/3541/premium/3541275.png?token=exp=1650231836~hmac=105442017e95adc8f2fd2041f0be27f5" alt="" />
   <div className=" w-full "><Image layout='fill' className='' src={view[0].backdrop} alt="" /> </div>
    <div className="pl-4 text-blue-600  ">{view[0].name}
    <p className="h-14 text-black">{view[0].desc}</p>
    <div className='flex justify-between'><p className="bg-green-600 w-3/6 rounded-3xl" >{view[0].value}</p> </div>
   
     <div className=" m-2 justify-around flex">
       <Image  layout='fill' onClick={()=>units('subtract')} className="w-6 hover:cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/463/463700.png" alt="" /> 
       {unit} <Image  layout='fill' onClick={()=>units('sum')} className="w-6 hover:cursor-pointer" width={'30px'} src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt ='bao'/>
       <p>{(unit*view[0].value).toFixed(2)}</p>
        <Image  layout='fill' onClick={()=>{addcart()}} className="w-6 cursor-pointer bg-green-400" src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png" alt="" /></div>
    </div>
   </section>:''}
   {data.length>0?data.map((e)=><div key={e.id} className="p-3  bg-gray-200 ">
    <div className=" w-full "><Image  layout='fill' className='' src={e.backdrop} alt="" /> </div>
    <div className="pl-4 text-blue-600  ">{e.name}
    <p className="h-14 text-black">{e.desc}</p>
    <div className='flex justify-between'><p className="text-center text-white bg-green-600 w-2/6 rounded-3xl" >{e.value}</p>  <button onClick={()=>Setview([e])} className='bg-green-500'>comprar</button></div>
    </div></div>):'carregando'}
    </section> </>)}