import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function ForgotPwd (){
    const navigate = useNavigate();
    //usestate for 3 fields
    const [UserName, setUserName] = useState("");
    const [SecurityAnswer, setSecurityAnswer] = useState("");
    const [UserPassword, setUserPassword] = useState("");

    //API call to server
  async function forgotClick(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/sendtoforgot/${UserName}`,
      {
        userName : UserName,
        userPassword : UserPassword,
        securityAnswer : SecurityAnswer
       
      });
      alert("Password Changed Successfully");
      navigate("/");

    }
    catch (err) {
      alert("Wrong Credential ...!!");
    }}
    return(
        <>
        <>
    <div className="login-form">
     <div className="login-overlay"></div>
     <div className="container form-containt">
        <h2>Change Password</h2>
     <form >
  <div className="mb-3">
    <label htmlFor="exampleInputText" className="form-label">User Name</label>
    <input type="text" className="form-control" id="exampleInputName" 
      onChange={(event) => {
      setUserName(event.target.value);
    console.log(UserName);
}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputText" className="form-label">What is the name of the town where you were born?</label>
    <input type="text" className="form-control" id="exampleInputName"
      onChange={(event) => {
        setSecurityAnswer(event.target.value);
      console.log(SecurityAnswer);
}} />
  </div>
 
  <div className="mb-2">
    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
      onChange={(event) => {
        setUserPassword(event.target.value);
      console.log(UserPassword);
}}/>
  </div>

 <div className="row">
    <div className="col-md-6">
    <button  type="btn" className="btn btn-primary" onClick={forgotClick}>Submit</button>
    </div>


 </div>

</form>
     </div>
    

    </div>
    </>
        
        </>

    );
}

export default ForgotPwd