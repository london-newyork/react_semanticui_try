import React, { useState } from 'react';

import Counter from './components/Counter';

import Button from './Button';

const App = () => {

    const [resources, setResources] = useState([]);

    return (
    <div className='ui container' style={{ marginTop: '30px' }}>
        <div>App</div>
        <Button title='post'/>
        <Button title='edit'/>
        <Button title='delete'/>
        <Button title='submit'/>
        <Counter />
    </div>
    );
};

export default App;