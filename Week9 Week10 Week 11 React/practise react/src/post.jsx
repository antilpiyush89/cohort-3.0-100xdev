const pstyle={marginBottom:0,marginTop:0}
export function PostComponent(props){
  return(
    <div style={{backgroundColor:"white",borderRadius:10,width:200,height:120,marginTop:10}}>
      <div style={{display:"flex",paddingTop:15,paddingLeft:20}}>
          <img src={props.image} style={{width:30,height:30,borderRadius:50}} />
        <div style={{fontSize:8,marginLeft:10,marginBottom:0,marginTop:0,color:"black",display:"flex",flexDirection:"column",textAlign:"left",verticalAlign:"top"}}>
          <p style={pstyle}><b>{props.name}</b></p>
          <p style={pstyle}>{props.subtitle}</p>
          {props.time && <p style={pstyle}>{props.time}</p>} 
          {/* Conditional rendering - only render this if we get time as an arguement through props */}
          
        </div>
      </div>
      <div style={{color:"black",fontSize:8,paddingLeft:20,paddingRight:10,width:145,textAlign:"left"}}><p> {props.description} </p></div>
    </div>
    
  )
}

