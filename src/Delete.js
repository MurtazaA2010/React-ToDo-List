import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
const Delete = () => {
    const history = useHistory();
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/')
    }
    const {id} = useParams()
    const handleDelete = () => {
        fetch('http://localhost:8000/todos/' + id, {
            method : 'DELETE'
        }).then(() => {
            history.push('/');
        })
    };
    return ( 
        <div className="delete">
            <p>Are you sure to delete this Task</p>
            <button onClick={handleCancel}>Cancel deletion</button>
            <button onClick={handleDelete}>Yes, Delete it</button>
        </div>
     );
}
 
export default Delete;