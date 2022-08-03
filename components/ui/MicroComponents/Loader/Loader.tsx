import React from 'react'


export const Loader = () => {
  return (
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",position:"fixed",top:"0",left:0}}><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
  )
}
