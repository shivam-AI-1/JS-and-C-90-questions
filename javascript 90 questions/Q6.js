
function check_login(username,password){
    const admin = "admin"
    const correct_password = 1234
    if (username === admin && password === correct_password){
        console.log("successful")
    }else{
        console.log("login failed")
    }

}
check_login("admin",1234);
check_login("admin",1245);