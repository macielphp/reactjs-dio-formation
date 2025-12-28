import Hook1 from '../hooks/hook1.jsx'
import Hook2 from '../hooks/hook2.jsx'
import Hook3 from '../hooks/hook3.jsx'
import Hook4 from '../hooks/hook4.jsx'
import Hook5 from '../hooks/hook5.jsx'
import Hook6 from '../hooks/hook6.jsx'
import Hook7 from '../hooks/hook7.jsx'

function Home(){

    return (
        <div className="w-full h-100vh flex flex-col align-center">
            <Hook1 />
            <Hook2 />
            <Hook3 />
            <Hook4 />
            <Hook5 />
            <Hook6 />
            <Hook7 />
        </div>
    )
}

export default Home