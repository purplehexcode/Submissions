const Total = ({data}) => {
    
    var total = data.parts.reduce(function(sum,part){
        return sum+part.exercises
    },0)

    console.log(total)
    return (
        <p><b>Sum of exercises {total}</b></p>
    )
}

export default Total