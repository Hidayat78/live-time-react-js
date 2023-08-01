import ChildFn from "./ChildFn";

const ParentFn = () => {
    function getData(data) {
        alert(
            `
            Id : ${data.id}
            Name: ${data.name}
            salary: ${data.salary}
            City:${data.salary}
            `
        )
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildFn getData={getData} />
        </div>
    );
}
export default ParentFn;