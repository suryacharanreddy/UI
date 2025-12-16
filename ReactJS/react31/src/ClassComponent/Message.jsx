import React from 'react';
class Message extends React.Component{
    msg="hello"

    render(){
        return <div>
            <h3>Message Component</h3>
            <h3>{this.msg}</h3>
        </div>
    }
}
export default Message;