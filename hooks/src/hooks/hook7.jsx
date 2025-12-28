import { useEffect } from 'react';
import useLanguage from './useLanguage.js';
import useToggle from './useToggle.js';
import useCounter from './useCounter.js';
import useLocalStorage from './useLocalStorage.js';

function Hook7() {
    const { t, changeLanguage } = useLanguage()
    const { value: showInfo, toggle } = useToggle()
    const { count, increment, decrement, reset } = useCounter(0)
    const [lang, setLang] = useLocalStorage('language', 'en')

    useEffect(() => {
        changeLanguage(lang)
    }, [lang])

    return (
        <div className="flex flex-col items-center bg-purple-700 gap-4 py-10 border-t text-white">
            <nav className="w-full flex justify-end px-10">
                <select 
                    className="bg-white text-black rounded-lg p-2"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                >
                    <option className="bg-white rounded-lg" value="en">english</option>
                    <option className="bg-white rounded-lg" value="es">spanish</option>
                    <option className="bg-white rounded-lg" value="pt">português</option>
                </select>
            </nav>
            <h2 className="text-3xl">7️⃣ Hooks customizados (useX)</h2>
            <div>
                <h3 className="text-2xl mb-4">{t('headers.message')}</h3>
                <p>{t('headers.select')}</p>
            </div>
            <button onClick={toggle} className="bg-white text-purple-700 px-4 py-2 rounded-lg mt-4">
                toggle info
            </button>

            {showInfo && <p>{t('buttons.learnMore')}</p>}

            <div className="flex items-center gap-4 mt-6">
                <button onClick={decrement} className="bg-white text-purple-700 px-4 py-2 rounded-lg mt-4">-</button>
                <span className="text-2xl">{count}</span>
                <button onClick={increment} className="bg-white text-purple-700 px-4 py-2 rounded-lg mt-4">+</button>
            </div>
            <button onClick={reset} className="bg-white text-purple-700 px-4 py-2 rounded-lg">reset</button>
        </div>
    )
}

export default Hook7