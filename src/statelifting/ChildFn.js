const ChildFn = (props) => {
    function postData() {
        var emp = {
            id: 101,
            name: "Sarfraz",
            salary: 190000,
            City: "Delhi"
        }
        props.getData(emp)
    }
    return (
        <div>
            <h1>Child component in function</h1>
            <button className="btn btn-danger" onClick={postData}>chld2prt</button>
        </div>
    )
}
export default ChildFn;