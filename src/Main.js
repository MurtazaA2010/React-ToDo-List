import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TodoList from "./TodoList";
const Main = () => {

    const history = useHistory();
    const handleAdd = () => {
        history.push('/add')
    }
    return ( 
        <div className="main">
            <div className="addnew">
                <button onClick={handleAdd}>Add a New Task</button>
            </div>
            
        </div> 
        
    );
}
 
export default Main;