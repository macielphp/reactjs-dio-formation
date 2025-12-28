import { useState, useEffect } from 'react'

function Hook1() {
    const [contador, setContador] = useState(0)
    const [isOn, setIsOn] = useState(false);
    const [text, setText] = useState("");

    return (
        <div className="bg-blue-300 text-black flex flex-col items-center
 gap-3 py-10">
            <h2 className="self-center text-3xl">1️⃣ useState — Estado local</h2>
            <div className="flex flex-col border rounded-3xl bg-white align-center p-10">
                <button className='bg-black text-white rounded-3xl p-4 hover:bg-gray-900'  onClick={() => setContador(contador + 1)}>+1</button>
                <p>Contador: {contador}</p>
            </div>
            <hr className="border w-full border-1 my-10" />
            <button className={isOn ? "bg-red-500 text-white p-4 rounded-3xl" : "bg-white text-blue-900 p-4 rounded-3xl"} onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
            
            <hr className="border w-full border-1 my-10" />

            <input 
                className="w-100 bg-white text-black decoration-solid p-2 "
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite algo..."
            />
            <p>digitou: {text}</p>
        </div>
    )
}

export default Hook1