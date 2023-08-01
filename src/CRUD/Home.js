import react, { useState } from "react";
const Home = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: ""
    });
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState()
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editClick) {
            const tempTableData = tableData;
            Object.assign
        } else {
            setTableData([...tableData, inputs])
            setInputs({
                name: "",
                email: ""
            })
        }

    }
    const handleDelete = (index) => {
        const filterData = tableData.filter((item, i) => i !== index);
        setTableData(filterData);
    }
    const handleEdit = (index) => {
        const tempData = tableData[index];
        setInputs({ name: tempData.name, email: tempData.email });
        setEditClick(true)
        setEditIndex(index)
    };
    return (
        <div>
            <h1>CRUD Operation</h1>
            <div className="form-control">
                <form onSubmit={handleSubmit}>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Enter your Name" /></dd>
                        <dt>Email</dt>
                        <dd><input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Enter your emaail" /></dd>
                    </dl>
                    <button type="submit" className="btn btn-primary">
                        {editClick ? "Update" : "Submit"}
                    </button>
                </form>
            </div>
            <div>
                <table className="table-primary table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((item, i) =>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={() => handleEdit(i)} className="btn btn-info">Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(i)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;