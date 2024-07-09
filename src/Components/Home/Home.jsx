import { useNavigate} from "react-router-dom"
import pix1 from "../../assets/pix1.jpg"
import Start from "./Start"
const  Home = () =>
{
    const navigate = useNavigate()

    const handleStart = () =>
    {
        navigate(`/questions/${1}`)
    }

    
    return(
        <section className="mt-20 mb-10 p-16">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="my-auto">
                    <h1 className="text-3xl font-bold">Welcome to MCQ-Tester</h1>
                    <h2 className="text-xl font-semibold">Test your Sports IQ Here</h2>
                </div>
                <div>
                    <img src={pix1} alt="Hello"/>
                </div>
            </article>
            <Start onStart={handleStart}></Start>
        </section>
    )
}

export default Home