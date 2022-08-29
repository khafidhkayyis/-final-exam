import React from "react"
import swal from "sweetalert";
import { useNavigate } from "react-router";

class Login extends React.Component {

    state = {
        title: 'Login'
    }

    componentDidMount(){
        document.title = this.state.title
    }

    handleLogin(e){
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        const users = JSON.parse(localStorage.getItem('users'));

        users.forEach(user => {
            if(email === user.email){
                if(password !== user.password){
                    swal('huh', 'password salah', 'error')
                } else {
                    localStorage.setItem('userLogin', user.email)
                    this.props.navigate('/')
                    swal('hore', 'berhasil login', 'success')
                }
            } else {
                swal('huh', 'email belum terdaftar', 'error')
            }
        });
    }

    render(){
        return(
            <div className="container py-4 mt-5">
                <div className="row"></div>
                <div className="col-12 col-lg-6 mx-auto py-5 shadow rounded-3 px-4 my-5">
                    <h3>Login</h3>
                    <hr />
                    <form onSubmit={(e) => {this.handleLogin(e); e.preventDefault()}}> 
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary px-5">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

function Navigate(){
    let navigate = useNavigate();
    return <Login navigate = {navigate} />
}

export default Navigate