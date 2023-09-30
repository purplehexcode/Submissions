import Part from './Part.jsx'

const Content = ({data}) => {
    return (
        <div>
        {
            data.parts.map((part)=><Part part={part} key={part.id}/>)
        }
        </div>
    
    )
}

export default Content