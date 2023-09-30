import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({data}) => {
    console.log(data)
    return (
        <>
            <Header data={data} key={data.id}/>
            <Content data={data}/>
            <Total data={data}/>
        </>
    )
}

export default Course
