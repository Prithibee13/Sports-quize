import Progress from "./Progress"

const Result = (props) => {
    const { quizes, result , correct, wrong , assesment} = props
   
    return (
        <article>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Result</h2>
                    <input type="range" min={0} max={quizes.length} value={result.length} className="range" step="1" />
                    <div className="flex w-full justify-between px-2 text-xs">
                        {quizes.map(quize => <Progress key={quize.id} quize={quize} result={result}></Progress>
                        )}


                    </div>
                    <div className="">
                        <article>
                            <p>{assesment}</p>
                        </article>
                        <article>
                            <p>Wrong Answer : {wrong}</p>
                            <p>Correct Answer : {correct}</p>
                        </article>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Result