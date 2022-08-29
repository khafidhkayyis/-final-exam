import React from "react"
import swal from "sweetalert";
import { useNavigate } from "react-router";

class Register extends React.Component {

    state = {
        title: 'Register'
    }

    componentDidMount(){
        document.title = this.state.title
    }

    handleRegister(e){
        const name = e.target[0].value ;
        const email = e.target[1].value ;
        const password = e.target[2].value ;
        const user ={
            name,
            email,
            password,
            address:'',
            city:'',
            phone:'',
            cart : []
        };
        
       let users = JSON.parse(localStorage.getItem('users'));
       if(users === null){
           let userArray = [];
           localStorage.setItem('users', JSON.stringify(userArray));

           let usersLocalStorage = JSON.parse(localStorage.getItem('users'));
           usersLocalStorage.push(user);

           usersLocalStorage.setItem('users',JSON.stringify(usersLocalStorage))
           swal("mainnya hebat!", "You clicked the button!", "success");
       }else {
           users.push(user);
           localStorage.setItem('users',JSON.stringify(users))
           swal("Mainnya hebat!", "You clicked the button!", "success");
           this.props.navigate('/Login')
       }
    }

    render(){
        return(
            <div className="container py-4 mt-5">
            <div className="row"></div>
               <div className="col-12 col-lg-6 mx-auto py-5 shadow rounded-3 px-4 my-5">
               <h3>Register</h3>
                <hr />
                <div className="col-12 col-lg-6 w-100">
                    <form onSubmit={(e)=> { this.handleRegister(e); e.preventDefault() }} >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
               </div>
            </div>
        )
    }
}

function RegisterNavigate(){
    let navigate = useNavigate();
    return <Register navigate = {navigate} />
}

export default RegisterNavigate