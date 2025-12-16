import React from 'react';
class StateCls extends React.Component{
    state={
        msg:"hello"
    }
    gmHandler=()=>{
        this.setState({msg:"Good Morning"})
    }
    render(){
        return <div>
            <h3>Message Value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>Gm</button>
        </div>
    }
} 
export default StateCls;