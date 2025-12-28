import { useState, useCallback, memo } from 'react'

const Child = memo(function Child({ onClick }) {
  console.log('👶 Child rendered')
  return <button onClick={onClick} className="bg-red-500 text-white rounded-2xl self-center p-2 hover:bg-gray-900">Child Button</button>
})

function Hook6() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('Clicked')
  }, [])

  return (
    <div className="flex flex-col items-center bg-green-500 gap-4 py-10 border-t">
      <h2 className="text-3xl">6️⃣ useCallback — Memorizar funções</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(c => c + 1)} className="bg-red-500 text-white rounded-2xl self-center p-2 hover:bg-gray-900">
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  )
}

export default Hook6
