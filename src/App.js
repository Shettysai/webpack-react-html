import React from 'react';
import {Button} from "reactstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"


const App = ({ title }) => 
<div>
    {title}
    <Button color="success">Click me </Button>

</div>;

export default App;
