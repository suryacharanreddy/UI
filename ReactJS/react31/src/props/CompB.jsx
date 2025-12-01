const CompB = (props) => {
  let {wish,emp_Id}  = props;  //Object Destructuring
  return (
    <div>
    <h3>Component B</h3>
    <h3>{JSON.stringify(props)}</h3>
    <h4>{wish()}</h4>
    <h4>{emp_Id}</h4>
    </div>
  )
}
export default CompB;