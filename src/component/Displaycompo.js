import { Component } from "react"
import './Apply.css'
class Displaycompo extends Component{
    constructor(props){
        super(props)
console.log(this.props.value)
    }

    render(){
        return(
            <>
            <h1 className="heading"> EMPLOY  FEEDBACK DATA</h1>
<div className="Show-data">
               
{this.props.value.map((item,index)=>{
    return(
      <div key={index}> 
        <span className='span'>Name: {item.name} | Dept : {item.dept} | Rating : {item.Rating}</span> 
        </div>                           
    )
})}
    
   </div>
   <button className="our-Button2" onClick={this.props.togglefunc}>Go Back</button>
   </>
        )
    }

}

export default  Displaycompo ;