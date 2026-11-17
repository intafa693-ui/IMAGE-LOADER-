import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = ()  => {
  const [img, setImg] = useState([])
  const [index, setIndex] = useState(1)
  const [page, setPage] = useState([])

 const getdata= async ()=>{
  const url=`https://picsum.photos/v2/list?page=${index}&limit=14`
  const { data} = await axios.get(url)
  setImg(data)
  setPage(data)
  console.log(data[0].id)
   console.log(data)
}
  useEffect(()=>{
    getdata()
  },[index])

  
    
  return (
    <>
    <div className=' min-h-screen bg-slate-950  flex flex-col items-center px-3 '>
        <h1 className='text-white animate-bounce bg-gray-600 px-3 py-4 rounded-xl mt-4 text-2xl uppercase '>images </h1>

        <div className='flex gap-4  flex-wrap'>
          {img.map((elm,idx)=>{
            return  <div key={idx} className='h-50 w-50 mt-15'>
         <a href={elm.url}> <img className=' object-cover h-50 w-50 rounded-xl ' src={elm.download_url} alt="" />
         </a>
    
         <h1 className='text-white text-2xl text-center rounded-2xl '>{elm.author}</h1>
          </div>
        })}
        </div>
          
  
        <div className='flex gap-4 mt-10 cursor-pointe fixed top-[80%]'>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setImg([])
          }
        }} className='py-3 transition active:scale-95 rounded-xl px-5 mt-8 bg-amber-300 text-2xl mb-10 cursor-pointer'>Prev</button>
        <h4 className='text-white text-2xl mt-10'>Page {index}</h4>
         <button onClick={()=>{
          setIndex(index+1)
          setImg([])
         }}  className='py-3  transition active:scale-95 rounded-xl px-5 mt-8 bg-amber-300 text-2xl mb-10 cursor-pointer'>Next</button>
         </div>
      </div>
    </>  
  )
}
export default App

