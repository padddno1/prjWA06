let dataJson = localStorage.getItem("wa06_data")
let data = JSON.parse(dataJson) || {
    username: "",
    passwords: "",
    
}

document.getElementById("username-input").value = data.username
document.getElementById("passwords-input").value = data.passwords


let subButton = document.getElementById("submit-button")
subButton.addEventListener("click", saveData)

function saveData() {
    let username = document.getElementById("username-input").value
    let passwords = document.getElementById("passwords-input").value
   

    let thisData = {username, passwords}
    let thisDataJson = JSON.stringify(thisData)
    localStorage.setItem("wa06_data", thisDataJson)
    alert("Save successful")
}

function getId(id) {
    return document.getElementById(id)
}

getId("submit-button").addEventListener("click", submitLogin)

function submitLogin() {
    let username = getId("username-input").value
    let passwords = getId("passwords-input").value 
    
    let data = localStorage.getItem("wa06_data")
    console.log(data)

    // let message = ""

//     if (username.trim() != USERNAME ) {
//         message = "Tài khoản không hợp lệ 😦"
//     }
//     else if (passwords != PASSWORDS) {
//         message = "Mật khẩu không hợp lệ 😦"
//     }
//     else {
//         alert("Bạn đã đăng nhập thành công 😄")
//     }
 
   let response = findAccount(username, passwords)

    if (response.success == true) {
        getId("error-mess").innerText = ""
        alert(response.message)
    } else {
        getId("error-mess").innerText = response.message
    }
}

function findAccount(username, passwords) {
    let data = localStorage.getItem("wa06_data")
    console.log(data)
    let database = JSON.parse(data)

    for (let item of data ) {
        if (item.username == username) {
            if (item.passwords == passwords) {
                return {success: true, message: "Đăng nhập thành công"}
            } else {
                return {success: false, message:"Mật khẩu không hợp lệ"}

            }
        }
    }
    return {success: false, message: "Tài khoản không tồn tại! 😦"}
}