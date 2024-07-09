const Progress = (props) => 
{
    const {quize,result} = props;
    const status = result.find(result=> quize.id===result.id)
    console.log(status);
    let bgColor="progress-circle"
    
    if(status?.answer)
        {
            bgColor = "progress-circle bg-green-500 text-white"
        } 
        else if(!status?.answer)
        {
            bgColor = " progress-circle bg-red-500 text-white"
        }
    return (
        <div className= {bgColor}>
            <p className="my-auto font-">
                {quize.Name}
            </p>
        </div>
    )
}

export default Progress