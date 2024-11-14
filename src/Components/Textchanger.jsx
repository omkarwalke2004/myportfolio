import React, { useEffect, useState } from 'react'

const Textchanger = () => {
    const texts=["Hi, I'm Omkar Walke","Hi, I'm Omkar Walke","Hi, I'm Omkar Walke"]
    const[currenttext,setcurrenttext]=useState("");
    const [endvalue,setendvalue]=useState(true);
    const [isforward,setisforward]=useState(true)
    const[index,setindex]=useState(0)

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setcurrenttext(texts[index].substring(0,endvalue))
            if(isforward){
                setendvalue((prev)=>prev+1);

            }
            else{
                setendvalue((prev)=>prev-1);
            }
            if(endvalue>texts[index].length+10){
                setisforward(false)
            }
            if(endvalue<2.1){
                setisforward(true);
                setindex((prev)=>prev & texts.length);
            }
            

        }, 50);
        return ()=>clearInterval(intervalId)
    },[endvalue,isforward,index,texts])

  return (
    <div className='transition ease duration-300'>
        {currenttext}
      
    </div>
  )
}

export default Textchanger
