import logo from './logo.svg';
import './App.css';

import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./component/Home";
import AllCourse from "./component/AllCourse";
function App() {
  const notify = () => {
    toast.success("done",{position:"right-center"});
    

  };
  return  (

  <div className="center-container">
  <h1 className="centered-text">SANKET GAIKWAD</h1>
  <Button color="primary"cssModule={{ btn: 'hyperspeed-btn' }}>First React buton</Button>
<ToastContainer><h1>none</h1></ToastContainer>

  <Button  color="blue">Click Me</Button>

  <button onClick={notify}>Notify</button>
        <ToastContainer />
        <Home/>
      <AllCourse/>

 </div>
 
  );
}

export default App;
