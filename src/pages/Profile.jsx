// javascript adalah sebuah bahasa pemograman web yang digunakan untuk memanupulasi data html
// dialam javadcript .console, komentar, variabel, 
// tipe data, 
import React from "react"
import { useNavigate } from "react-router";
import swal from "sweetalert";

class Profile extends React.Component {

    state = {
        title: 'Profile'
    }

    componentDidMount(){
        const emailLogin = localStorage.getItem('userLogin');
        if(!emailLogin){
            swal(
                {
                    title: "Warning",
                    text: "Login dulu bro",
                    icon: "warning",
                  }
            )
                .then((value) => {
                    window.location = '/login'
                });
        } else {
    
            alert('Sudah login')
            document.title = this.state.title;
            const users = JSON.parse(localStorage.getItem('users'));
            // const emailLogin = localStorage.getItem('userLogin');
            let userLogin = {}
            users.forEach(user => {
                if(user.email === emailLogin){
                    userLogin = user
                }
            }); 
    
            let profileValue = document.getElementById("profile");
            const name = profileValue[0]
            name.value = userLogin.name
            const email = profileValue[1]
            email.value = userLogin.email
            const address = profileValue[2]
            address.value = userLogin.address
            const city = profileValue[3]
            city.value = userLogin.city
            const phone = profileValue[4]
            phone.value = userLogin.phone
        }
        

        
    }

    handleProfile(e){
        e.preventDefault()
        const name = e.target[0].value;
        const email = e.target[1].value;
        const address = e.target[2].value;
        const city = e.target[3].value;
        const phone = e.target[4].value;   

        const users = JSON.parse(localStorage.getItem('users'));
        const emailLogin = localStorage.getItem('userLogin');
        let userLogin = {}
        users.forEach(user => {
            if(user.email === emailLogin){
                userLogin = user
            }
        }); 
        

       if(!address){
           swal("EROR", "address cannot be empty!!!", "error");
       }
       if(!city){
           swal("EROR", "city cannot be empty!!!", "error");
       }
       if(!phone){
           swal("EROR", "phone cannot be empty!!!", "error");
        } else {
            const user = {
                name,
                email,
                address,
                city,
                phone,
                carts: userLogin.carts
            }
            let users = JSON.parse(localStorage.getItem('users'));
            const emailLogin = localStorage.getItem('userLogin');
            let userWithoutUserLogin = users.filter((user) => user.email !== emailLogin)
            userWithoutUserLogin.push(user)
            localStorage.setItem('users', JSON.stringify(userWithoutUserLogin))
            swal("Success", "Berhasil simpan profile", "success");
       }
       
    };
    
    render(){
        return (
            <div className="container py-4" style={{marginTop: '110px'}}>
                <div className="col-8 mx-auto">
                    <h3>Profile</h3>
                    <hr  />
                    <form onSubmit={(e)=> { this.handleProfile(e); e.preventDefault() }}  class="row g-3 py-5" id="profile">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value="dff" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary mt-3 px-5">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const ProfileWithNavigate = () => {
    let navigate = useNavigate()
    return(
        <Profile navigate={navigate} />
    )
}

export default ProfileWithNavigate
