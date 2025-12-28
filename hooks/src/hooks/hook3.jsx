import {useState, createContext, useContext} from 'react'

// 1️⃣ Criando o Contexto
const ThemeContext = createContext();

function Hook3() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        // 3️⃣ Provider envolvendo os componentes
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`flex flex-col flex flex-col items-center gap-3 py-10 border-t-10 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <h1 className="text-3xl">3️⃣ useContext — Estado Global</h1>
                <button onClick={toggleTheme} className='px-4 py-2 border rounded'>Alterar tema</button>
            </div>
            <ChildComponent />
            <hr />            
        </ThemeContext.Provider>
    )
}

function ChildComponent() {
    const { theme } = useContext(ThemeContext);

    return(
        <p>
            Tema atual no componente filho: <strong>{theme}</strong>
        </p>
    )
}

export default Hook3