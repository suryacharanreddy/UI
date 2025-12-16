import React from 'react'
import Message from './ClassComponent/Message'
import ComponentCls from './ClassComponent/ComponentCls'
import StateCls from './ClassComponent/StateCls'
let App=()=>{
    return <div>
        <h3>App component</h3>
        <Message/>
        <ComponentCls/>
        <StateCls/>
    </div>
}
export default App;