import React from "react";
import Login from "./components/Login/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
function App(){

return(
  <div className="container-fluid     align-items-center">
  <div className="row mt-5 justify-content-center">
  <div className="col-12 col-sm-12 col-md-8 col-lg-6 ">

<Login />
</div>
</div>
  </div>
)

}

export default App;