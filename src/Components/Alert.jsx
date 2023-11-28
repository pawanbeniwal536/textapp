import React from 'react'

const Alert = (props) => {
//   const capitalize=(word)=>{
//     const lower=word.toLowerCase();
//     return lower.charAt(0).toUpperCase().slice(1)
//   }
  return (
    props.alert&&
    <>
    {/* means of the props.alert is the if props.alert is not null and than will execute the next code . */}
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert"style={{height:'50px'}}>
  <strong>{props.alert.type}</strong> {props.alert.msg}</div>
    </>
  )
}

export default Alert
