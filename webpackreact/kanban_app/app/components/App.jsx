import uuid from 'node-uuid';
import React from 'react';

class App extends React.Component {
    render() {
    	const notes = [
    		{
    			id: uuid.v4(),
    			task: 'Learn Webpack'
    		},
    		{
    			id: uuid.v4(),
    			task: 'Learn React'
    		},
    		{
    			id: uuid.v4(),
    			task: 'Do laundry'
    		},

    	];
        return (
        	<div>
        		<ul>{
        			notes.map(note => 
        				<li key={note.id}>{note.task}</li>
    				)
        		}</ul>
        	</div>
    	);
    }
}

export default App;
