import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import '../App.css'

class AddUser extends Component{
  constructor(){
      super()
      this.state={
        name:"",
        username:"",
        email:"",
        phone:"",
      }
      this.changeName=this.changeName.bind(this)
      this.changeUserName=this.changeUserName.bind(this)
      this.changeEmail=this.changeEmail.bind(this)
      this.changePhone=this.changePhone.bind(this)
      this.onSubmit=this.onSubmit.bind(this)



  }
  
  changeName(event){
      this.setState({
          name:event.target.value
      })
  }

  changeUserName(event){
    this.setState({
        username:event.target.value
    })
}

changeEmail(event){
    this.setState({
        email:event.target.value
    })
}

changePhone(event){
    this.setState({
        phone:event.target.value
    })
}

onSubmit(event){
    event.preventDefault()
    const registeredUsers={
        name:this.state.name,
        username:this.state.username,
        email:this.state.email,
        phone:this.state.phone,

    }

    axios.post('http://localhost:8000/users/signUp',registeredUsers)
    .then(response=>console.log(response.data))

    this.setState({
        name:"",
        username:"",
        email:"",
        phone:"",
    })
}
  render(){
      return(
          <div>
              <div className="container" style={{marginTop:'20px',width:'500px'}}>
                  <div className="form-div" >
                      <form onSubmit={this.onSubmit} action="">
                          <input className='form-control form-group'style={{marginBottom:'7px'}} type="text" placeholder="Full name" name="" id="" onChange={this.changeName} value={this.state.name} />

                          <input className='form-control form-group'style={{marginBottom:'7px'}} type="text" placeholder="username" name="" id="" onChange={this.changeUserName} value={this.state.username} />

                          <input className='form-control form-group'style={{marginBottom:'7px'}} type="email" placeholder="email" name="" id="" onChange={this.changeEmail} value={this.state.email} />

                          <input className='form-control form-group'style={{marginBottom:'7px'}} type="text" placeholder="Contactno" name="" id="" onChange={this.changePhone} value={this.state.phone} />

                          <input className='btn btn-danger btn-block' type="submit"  name="" id="" value='submit' />

                      </form>
                  </div>
              </div>
          </div>
      )
  
}
}
// const AddUser = ()=>{
//     return(
//         <p>Add user</p>
//     )
// }

export default AddUser;