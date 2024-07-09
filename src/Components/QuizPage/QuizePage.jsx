import { useNavigate } from "react-router-dom";

const QuizPage = (props) => {
    const { quize, next, previous, change, check } = props;

    let goPrevious = <div className=""><button onClick={() => previous(quize?.id)} className="btn btn-primary">Previous</button></div>
    let goNext = <div className=""> <button onClick={() => next(quize?.id)} className="btn btn-primary">Next</button></div>

    if (quize?.id == 1) {
        goPrevious = null
    }
    else if (quize?.id == 5) {
        goNext = null
    }





    return (
        <article>
            <div className="card  shadow-xl p-6">
                <div className="card-body">
                    <h1 className="text-2xl font-bold  mb-10">{quize?.Name} : {quize?.Question}</h1>

                    <form onChange={change}>

                        <label className="flex mb-5">

                            <input type="radio" name="quizOption" className="radio radio-info" value={quize?.A} />
                            <h3 className="ms-10 text-xl font-semibold">{quize?.A}</h3>
                        </label>
                        <label className="flex mb-5">

                            <input type="radio" name="quizOption" className="radio radio-info" value={quize?.B} />
                            <h3 className="ms-10 text-xl font-semibold">{quize?.B}</h3>
                        </label>

                        <label className="flex mb-5">

                            <input type="radio" name="quizOption" className="radio radio-info" value={quize?.C} />
                            <h3 className="ms-10 text-xl font-semibold">{quize?.C}</h3>
                        </label>
                        <label className="flex mb-5">

                            <input type="radio" name="quizOption" className="radio radio-info" value={quize?.D} />
                            <h3 className="ms-10 text-xl font-semibold">{quize?.D}</h3>
                        </label>
                    </form>
                    <div className="mx-auto">

                        <button onClick={() => check(quize?.id, quize?.correct)} className="btn btn-success">Success</button>
                    </div>

                </div>
                <div className="flex justify-between">
                    {goPrevious}
                    {goNext}
                </div>

            </div>
        </article>
    )
}
export default QuizPage 