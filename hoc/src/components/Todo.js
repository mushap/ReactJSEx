import React from 'react';
import WithFetcher from './WithFetcher';

class Todo extends React.Component {

    render() {
        return (
            <div>
                <b>TODOS</b>
                <ul>
                    {
                        this.props.results.map(todo =>
                            todo && <li key={"unique-" + todo.id}> {todo.id} - {todo.title} - {todo.completed ? "true" : "false"}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default WithFetcher({
    apiServiceURL: 'https://jsonplaceholder.typicode.com/todos'
})(Todo);

export { WithFetcher as Todos }