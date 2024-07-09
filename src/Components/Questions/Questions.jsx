import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import UseQuize from "../../Hooks/useQuize"
import game from "../../../public/game.json"
import QuizePage from "../QuizPage/QuizePage"
import Result from "../Result/Result"

const Questions = () => {
    const params = useParams()
    const id = params.id
    const [quizes, setQuizes] = useState([])
    const [quize, setQuize] = useState({})
    const [answer, setAnswer] = useState('')
    const [result, setResult] = useState([])
    const [assesment , setAssesment] = useState('fail')
    const [correctAnswer , setCorrectAnswer] = useState(0)
    const [wrongAnswer , setWrongAnswer] = useState(0)
    
    
    
    useEffect(() => {
        fetch('/game.json').then(res => res.json()).then(data => setQuizes(data))

    }, [id])

    useEffect(() => {
        if (quizes.length > 0) {
            const newQuize = quizes.find(quize => quize?.id == id)
            setQuize(newQuize)
        }
    }, [quizes, id])

    const navigate = useNavigate()

    const handleNext = (id) => {
        const newId = id + 1
        navigate(`/questions/${newId}`)

    }
    
    const handleChange = (e) =>
    {
        const value = e.target.value
        setAnswer(value)
    }

    const handlePrevious = (id) =>
    {
        if(id>0)
        {
            const newId = id-1
            navigate(`/questions/${newId}`)
        }
    }

    const answerChecking = (id,correct) =>
    {
        let newResult = [...result]
        if(answer === correct)
        {
            newResult.push({id: id, answer:true})
        }
        else 
        {
            newResult.push({id:id, answer:false})
        }

        setResult(newResult)
        

        const correctAnswers = result.filter(result => result.answer==true)
        const inCorrectAnswers = result.filter(result => result.answer==false)
        const newAssessment = correctAnswers/quizes.length
        setCorrectAnswer(correctAnswer.length)
        setWrongAnswer(inCorrectAnswers.length)
        newAssessment < 0.4 ? setAssesment('fail'):setAssesment("pass")

    }








    return (
        <section className="mt-20 mb-10 p-16">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <QuizePage quize={quize} next={handleNext} previous = {handlePrevious} change={handleChange} check={answerChecking}></QuizePage>
                <Result quizes={quizes} result={result} correct={correctAnswer} wrong = {wrongAnswer} assesment = {assesment}></Result>
            </article>

        </section>
    )
}
export default Questions