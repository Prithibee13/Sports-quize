import { useState, useEffect } from "react"


const UseQuize = (id) =>
{
    const [quizes , setQuizes] = useState([])
    useEffect(()=>
        {
            fetch('game.json').then(res=>res.json()).then(data=>setQuizes(data))
        },[id])

        const newQUize = quizes.find(data=>data.id===id)
        return newQUize
}

export default UseQuize
