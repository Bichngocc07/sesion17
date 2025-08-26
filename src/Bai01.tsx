import { useState} from 'react'

function MyName(){
    const [name , setName] = useState("Nguyen Van A");
    return (
        <div>
            <h1>xin chào{name}</h1>
        </div>
    )
}
export default MyName;