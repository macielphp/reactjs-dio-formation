import { useState, useMemo } from 'react'

function Hook5() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // 1️⃣ Função de cálculo pesado
    const expensiveCalculation = (num) => {
        console.log('Cálculo pesado em execução...')
        let result = 0;

        for (let i = 0; i < 1_000_000_000; i++) {
            result += num;
        }

        return result
    }

    // 2️⃣ useMemo evita recalcular sem necessidade
    const  memoizedValue = useMemo(() => {
        return expensiveCalculation(count);
    }, [count])

    return(
    <div className="flex flex-col bg-orange-400 items-center gap-4 py-10 border-t">
        <h1 className="text-3xl">5️⃣ useMemo — Performance</h1>

        <p>Resultado do cálculo pesado: {memoizedValue}</p>

        <button onClick={() => setCount(count + 1)}>
            Incrementar contador principal
        </button>

        <button onClick={() => setOther(other + 1)}>
            Re-render inútil ({other})
        </button>
    </div>
    )
}

export default Hook5