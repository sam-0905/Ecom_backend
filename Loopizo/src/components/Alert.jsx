import { useEffect } from "react"


const Alert = ({message,type,onClose}) => {

    useEffect(()=>{
        const timer = setTimeout(() =>{
            onClose()
        },1000)
        return () => clearTimeout(timer)
    } , [onClose])

    return (
        <>  
            <div className={`alert alert-${type}`}>{message}</div>
        </>
    )
}

export default Alert;