const Status = ({status}) => {
    if(status.message!=null){
        const className = `status-message ${status.type}`
        return (
            <div className={className}>{status.message}</div>
        )
    }
    else{
        return null
    }
}

export default Status