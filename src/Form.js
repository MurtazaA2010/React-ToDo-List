import { useState } from "react";
import reactRouterDom from "react-router-dom";
import { useHistory } from "react-router-dom";

const Form = () => {
    const [value, setValue] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = { value };

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        }).then((response) => {
            if (response.ok) {
                console.log('New todo added successfully');
                history.push('/');
                // You might want to reset the input field or update the todos state here
                setValue(''); // Reset the input field after a successful submission
            } else {
                console.log('Failed to add new todo');
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button type="submit"><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>
    );
}

export default Form;
