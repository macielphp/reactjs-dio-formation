import { useEffect, useState } from 'react';

function Hook2(){
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const [mount, setMount] = useState('')
    
    // 1️⃣ Executa apenas uma vez (montagem)
    useEffect(() => {
        setMount('Componente montou');

    }, []);

    // 2️⃣ Executa sempre que o contador mudar
    useEffect(() => {
        document.title = `Contador = ${count}`
    }, [count])

    // 3️⃣ Executa quando o botão for clicado (via estado)
    useEffect(() => {
        if (clicked) {
            alert('Botão clicado');
            setClicked(false); // reseta o estado
        }
    }, [clicked])

    return (
        <div className=" bg-green-300 text-black flex flex-col items-center gap-3 py-10 border-t-10">
            <h1 className="self-center text-3xl">2️⃣ useEffect — Efeitos colaterais</h1>
            <div className="flex flex-col border rounded-3xl bg-white align-center p-10">
                <p>Componente montado? {mount}</p>
            </div>

            <hr className="border w-full border-1 my-10" />
            
            <div className="flex flex-col border rounded-3xl bg-white align-center p-10">
                <button className='bg-black text-white rounded-3xl p-4 hover:bg-gray-900' onClick={() => setCount(count + 1)}>Incrementar</button>
                <p>Contador: {count}</p>
                <button className='bg-red-500 text-white rounded-3xl self-center p-2 hover:bg-gray-900' onClick={() => setCount(0)}>
                    resetar
                </button>
            </div>
            <hr className="border w-full border-1 my-10" />
            
            <div className="flex flex-col border rounded-3xl bg-white align-center p-10">
                <button className='bg-black text-white rounded-3xl p-4 hover:bg-gray-900' onClick={() => setClicked(true)}>
                    Clique aqui para mostrar alert
                </button>
                <p>clicado? {clicked}</p>
            </div>

                
        </div>
    )
}

export default Hook2