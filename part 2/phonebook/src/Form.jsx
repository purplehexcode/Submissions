const Form = ({submitAction,value1,nameChange,value2,numberChange}) => {
    return (
        <form onSubmit={submitAction}>
            <div>
            Name: <input value={value1} onChange={nameChange}/>
            </div>
            <div>
            Number: <input value={value2} onChange={numberChange}/>
            </div>
            <div>
            <button type="submit">Add</button>
            </div>
      </form>
    )
}

export default Form