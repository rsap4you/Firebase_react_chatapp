import React, { useRef, useState } from 'react'

const RoomForm = ({ setCurrentRoom }) => {
  const [charts,setChats]=useState()

    let inputRef = useRef(null)

localStorage.getItem("auth")

localStorage.setItem("auth",true)
localStorage.setItem("chatsession",true)
// if(inputRef.current !== null){
// console.log("gdokpbgdo");
// }


console.log('setCurrentRoom',inputRef)
const HandleSession =()=>{
    console.log('chartsaaa: ', charts);
        localStorage.setItem("manage",'ss')
}

if( localStorage.getItem("auth" === true)){
   
    return (
        <div className='w-full h-full  py-4 flex items-center justify-center'>
            <div className='w-[22rem] h-[22rem] flex flex-col justify-center items-center gap-4 bg-slate-300 rounded-xl'>
                <h3 className='font-semibold text-2xl'>Enter the Id to join the Caht Room</h3>
                <input autoFocus ref={inputRef} onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        //joining the room
                        setCurrentRoom(inputRef.current.value)
                    }
                    onchange((e)=>{setChats(e.target.value)})
                }} type="text" placeholder='Enter Room-Id' className='p-3 font-medium focus:outline-none border-2 border-gray-500 rounded-lg' />
                <button onClick={() => setCurrentRoom(inputRef.current.value)} className='p-4 bg-blue-800 text-white rounded-lg'>
                    Enter Chat Room
                </button>
            </div>
        </div>
    )
}
    return (
        <div className='w-full h-full  py-4 flex items-center justify-center'>
            <div className='w-[22rem] h-[22rem] flex flex-col justify-center items-center gap-4 bg-slate-300 rounded-xl'>
                <h3 className='font-semibold text-2xl'>Enter the Id to join the Caht Room</h3>
                <input autoFocus ref={inputRef} onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        //joining the room
                        setCurrentRoom(inputRef.current.value)
                    }
                }} type="text" placeholder='Enter Room-Id' className='p-3 font-medium focus:outline-none border-2 border-gray-500 rounded-lg' />
                <button onClick={() => {setCurrentRoom(inputRef.current.value), HandleSession()}} className='p-4 bg-blue-800 text-white rounded-lg'>
                    Enter Chat Room
                </button>
            </div>
        </div>
    )
}

export default RoomForm