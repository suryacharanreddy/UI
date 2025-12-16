import React from 'react';
class ComponentCls extends React.Component{
    msg="Good Morning"
    gmHandler=()=>{
        this.msg="Good morning"
        console.log(this.msg)
    }
    render(){
        return <div>
                    <h3>ComponentCls Component</h3>
                    <h3>{this.msg}</h3>
                    <button onClick={this.gmHandler}>Gm</button>
                </div>
    }
}
export default ComponentCls;