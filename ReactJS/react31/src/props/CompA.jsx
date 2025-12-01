import CompB from './CompB'
let wish=()=>{
    return "Good Morning"
}
let CompA=()=>{
    let eid=101;
    let employees=[{"eid":1,"ename":"Had","gender":"Male"},
        {"eid":2,"ename":"Lyn","gender":"Male"},
        {"eid":3,"ename":"Bert","gender":"Male"},
        {"eid":4,"ename":"Hiram","gender":"Non-binary"},
        {"eid":5,"ename":"Gui","gender":"Female"},
        {"eid":6,"ename":"Raeann","gender":"Agender"},
        {"eid":7,"ename":"Sybila","gender":"Female"},
        {"eid":8,"ename":"Carmon","gender":"Female"},
        {"eid":9,"ename":"Any","gender":"Male"},
        {"eid":10,"ename":"Giana","gender":"Female"}]
    return <div>
                <h2>Component A</h2>
                <h3>{wish()}</h3>
                <hr/>
                <CompB wish={wish} emp_Id={eid} employees={employees}/>
                
            </div>
}
export default CompA;