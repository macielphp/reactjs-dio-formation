import { useRef, useState, useEffect } from 'react'
function Hook4() {
    const inputRef = useRef(null);
    const renderCount = useRef(0);
    const previousCount = useRef(0);

    const [count, setCount] = useState(0);
  
    // 2️⃣ Conta quantas vezes o componente renderizou
    renderCount.current++;

    // 3️⃣ Guarda o valor anterior do contador
    useEffect(() => {
        previousCount.current = count;
    }, [count])

    // 1️⃣ Insert input
    const insertInput = () => {
        inputRef.current.value = "nome sobrenome"
    }

    // Remove input
    const removeInput = () => {
        inputRef.current.value = "";
    }

    return(
        <div className="flex flex-col items-center bg-yellow-200 gap-4 py-10 border-t">
            <h1 className="text-3xl">4️⃣ useRef — Referências mutáveis</h1>
            <input
                ref={inputRef}
                type="text"
                placeholder="Clique no botão para focar"
                className="border px-2 py-1"
            />
            <button onClick={insertInput} className="bg-red-500 text-white rounded-2xl self-center p-2 hover:bg-gray-900">Inserir texto: Seu nome completo</button>
            <button onClick={removeInput} className="bg-green-500 text-white rounded-2xl self-center p-2 hover:bg-gray-900">Limpar</button>

            <hr className="border w-full border-1 my-10" />

            <p>Contador atual: {count}</p>
            <p>Valor anterior: {previousCount.current}</p>
            <p>Renderizações: {renderCount.current}</p>

            <button className='bg-red-500 text-white rounded-3xl self-center p-2 hover:bg-gray-900' onClick={() => {
                setCount(count + 1)
            }}>Incrementar contador</button>
        </div>
    )
}

export default Hook4