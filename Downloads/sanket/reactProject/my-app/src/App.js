import logo from './logo.svg';
import './App.css';

import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./component/Home";

function App() {
  const notify = () => {
    toast.success("done",{position:"right-center"});
    

  };
  return  (

  <div>
  <h1>This is bootstrap project</h1>
  <Button color="primary"cssModule={{ btn: 'hyperspeed-btn' }}>First React buton</Button>
<ToastContainer><h1>sanket</h1></ToastContainer>
  <Button
    color="primary"
  >
    Click Me
  </Button>
  <button onClick={notify}>Notify!</button>
        <ToastContainer />
        <Home/>

 </div>
 
  );
}

export default App;
