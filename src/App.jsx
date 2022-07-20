import React from "react";
import A from './A.jsx'
class App extends React.Component{
  render()
  {
    return(
       <A fname="Pravin" lname="Kolate"/>
    )
  }
     
}

export default App;




















// var date=new Date().toLocaleDateString();
// var time=new Date().toLocaleTimeString();
// export default function App() {
//   return (
//     <>
//     <h5 className='text-center mt-4'> Date:{date}</h5>
//     <h5 className='text-center text-primary'> Time:{time}</h5>
//     </>
//   )
// }




















// export default function App() {
//   return (
//      <>
//      <h4>Full Stack Web Development Course</h4>
//       <ul>
//         <li>Front End
//           <ul>
//             <li>Html</li>
//             <li>Css</li>
//             <li>Bootstrap</li>
//             <li>JS</li>
//             <li>JQuery</li>
//             <li>React JS</li>
            
//           </ul>
//         </li><li>
//           Backend
//           <ul>
//             <li>Python</li>
//             <li>Node JS</li>
//             <li>Php</li>
//           </ul>
//         </li>
//       </ul>
//      </>
//   )
// }








// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:'',
//       nameerror:false,
//       email:'',
//       emailerr:false,
//       phone:'',
//       phoneerror:false,
//       course:'',
//       courseerror:false,
//       photo:'',
//       photoerror:false,
//     }
//   }
//   changename=(event)=>{
//     this.setState({
//       name:event.target.value
//     })
//   }
//   changeemail=(event)=>{
//     this.setState({
//       email:event.target.value
//     })
//   }
//   changephone=(event)=>{
//     this.setState({
//       phone:event.target.value
//     })
//   }
//   changecourse=(event)=>{
//     this.setState({
//       course:event.target.value
//     })
//   }
//   changephoto=(event)=>{
  
//     this.setState({
//     photo:event.target.files[0]
//     })
//   }
//   fromsubmit=(event)=>{
//     if(this.validation()){
//       console.log(`${this.state.name},${this.state.email},${this.state.phone},${this.state.course},${this.state.photo}`)
//     }
  
//     event.preventDefault();
//   }
//   validation=()=>{
//     let error=true;
//     if(this.state.name==''){
//       error=false;
//       this.setState({
//         nameerror:"Name is Empty"
//       })
//     }
//     else{
//       this.setState({
//         nameerror:""
//       })
//     }

//     if(this.state.email==''){
//       error=false;
//       this.setState({
//         emailerror:'Email is Empty'
//       })
//     }
//     else{
//       this.setState({
//         emailerror:''
//       })
//     }

//     if(this.state.phone==''){
//       error=false;
//       this.setState({
//         phoneerror:"Phone is Empty"
//       })
//     }
//     else{
//       this.setState({
//         phoneerror:''
//       })
//     }
//     if(this.state.course==''){
//       error=false;
//       this.setState({
//         courseerror:'Course Is Empty'
//       })
//     }
//     else{
//       this.setState({
//         courseerror:''
//       })
//     }
//     if(this.state.photo==''){
//       error=false
//       this.setState({
//         photoerror:'Photo Is Empty'
//       })
//     }
//     else{
//       this.setState({
//         photoerror:''
//       })
//     }
//   }
//   render() {
//     return (
//       <>
//       <form className='bg-warning p-3' onSubmit={this.fromsubmit}>
//         <div>
//           <label>Your Name</label>
//           <input type="text" value={this.state.name} className='form-control' name="name" onChange={this.changename}/>
//           {this.state.nameerror && <div style={{color:'red'}}>{this.state.nameerror}</div>}
//         </div>
//         <div>
//           <label>Your Email</label>
//           <input type="email"  value={this.state.email}  className='form-control' name="email"  onChange={this.changeemail}/>
//           {this.state.emailerror && <div style={{color:'red'}}>{this.state.emailerror}</div>}
//         </div>
//         <div>
//           <label>Your Mobile</label>
//           <input type="number"  value={this.state.mobile} className='form-control' name="mobile"  onChange={this.changephone}/>
//           {this.state.phoneerror && <div style={{color:'red'}}>{this.state.phoneerror}</div>}
//         </div>
//         <div>
//           <label>Your Course</label>
//           <select className='form-control' name="course"  value={this.state.course}  onChange={this.changecourse}>
//             <option value="">Choose Course</option>
//             <option value="frontend">Front End</option>
//             <option value="backend">Back End</option>
//           </select>
//           {this.state.courseerror && <div style={{color:'red'}}>{this.state.courseerror}</div>}
//         </div>
//         <div>
//           <label>Your Photo</label>
//           <input type="file" className='form-control' name="photo"   onChange={this.changephoto}/>
//           {this.state.photoerror && <div style={{color:'red'}}>{this.state.photoerror}</div>}
//         </div>
//         <div>
//         <button className='btn btn-primary mt-3'>SAVE FORM</button>
//         </div>
//       </form>
//       </>
//     )
//   }
// }
