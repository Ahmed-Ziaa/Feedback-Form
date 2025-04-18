function submitData(){
    let username = document.getElementById("input1").value
    let email = document.getElementById("input2").value
    let msg = document.getElementById("msg").value

    if (username == "" || email == "" || msg == ""){
        alert("Please Fill Out All Values")
    }

    else{
        let userdata={
            name:username,
            mail:email,
            message:msg
        }
    
        console.log(userdata);

        document.getElementById("input1").value = ""
        document.getElementById("input2").value = ""
        document.getElementById("msg").value = ""

        alert("Your Form Has Been Submited")
        
    }
}