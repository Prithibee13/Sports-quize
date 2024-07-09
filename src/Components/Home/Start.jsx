const Start = (props) => 
{
    
    const { onStart } = props;
    return (
        <article className="mt-20 mb-10 p-5">
            <div className="card  w-96 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title mb-5">Start The Sports Mcq Test</h2>
                    <div className="card-actions justify-center">
                        <button onClick={onStart} className="btn btn-primary">Start Now</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Start