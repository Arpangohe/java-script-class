function show(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('.email').value;
    let mobile = document.querySelector('.mobile').value;
    let password = document.querySelector('.password').value;
    let c_password = document.querySelector('.c_password').value;

    console.log(name,email,mobile,password,c_password);

    if(name ==="") {
        window.alert("please enter your name");
        document.querySelector('.name').focus();
    return false;

    }
    else if(email ==="") {
        window.alert("please enter your Email");
        document.querySelector('.email').focus();
        return false;
    }
    else if(!(email.includes('@gmail.com')|| email.includes('@yahoo.com')|| email.includes('@icloud.com')|| email.includes('@outlook.com'))){
        window.alert("please enter Correct Email");
        return false;
    }

    else if(mobile ==="") {
        window.alert("please enter your mobile");
        document.querySelector('.mobile').focus();
        return false;
    }
    else if(mobile.length !== 10){
        window.alert("please enter 10 digit mobile number");
        document.querySelector('.mobile').focus();
        return false;
    }
    else if(isNaN((mobile))){
        window.alert("please enter only number");
        document.querySelector('.mobile').focus();
        return false;
    }
    else if(password ==="") {
        window.alert("please enter your password");
        document.querySelector('.password').focus();
        return false;
    }
    else if(password.length < 8){
        window.alert("please enter 8 digit password");
        document.querySelector('.password').focus();
        return false;
        }
    else if(!password.match('[/!@#$%^&*()/]')){
        window.alert("please enter special character in password");
        document.querySelector('.password').focus();
        return false;
    }
    else if(!password.match('[/1234567890/]')) {
        window.alert("please enter number in password");
        document.querySelector('.password').focus();
        return false;
        }
     else if(!password.match('[/qwertyuiopasdfghjklzxcvbnm/]')){
        window.alert("please enter alphabet in password");
        document.querySelector('.password').focus();
        return false;
     }
     else if(!password.match('[/QWERTYUIOPASDFGHJKLZXCVBNM/]')){
        window.alert("please enter capital alphabet in password");
        document.querySelector('.password').focus();
        return false;
     }   
     
    else if(password !== c_password){
            window.alert("password and confirm password should be same");
            document.querySelector('.c_password').focus();
            return false;
     }

    // else if(c_password ==="") {
    //     window.alert("please enter your c_password");
    //     document.querySelector('.password').value="";
    //     document.querySelector('.c_password').value="";
    //     document.querySelector('.c_password').focus();
    //     return false;
}