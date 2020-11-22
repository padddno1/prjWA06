let dataJson = localStorage.getItem("wa06_data")
let data = JSON.parse(dataJson) || {
    username: "",
    passwords: "",
    cfpasswords: "",
}

document.getElementById("username-input").value = data.username
document.getElementById("passwords-input").value = data.passwords
document.getElementById("cf-passwords-input").value = data.cfpasswords

let subButton = document.getElementById("submit-button")
subButton.addEventListener("click", saveData)

function saveData() {
    let username = document.getElementById("username-input").value
    let passwords = document.getElementById("passwords-input").value
    let cfpasswords = document.getElementById("cf-passwords-input").value

    let thisData = {username, passwords, cfpasswords}
    let thisDataJson = JSON.stringify(thisData)
    localStorage.setItem("wa06_data", thisDataJson)
    alert("Save successful")
}


function findAccount(username, passwords, cfpasswords) {
    let data = localStorage.getItem("wa06_data")
    console.log(data)
    let database = JSON.parse(data)

    for (let item of data ) {
        if (item.username == username) {
            if (item.passwords == passwords == cfpasswords) {
                return {success: true, message: "Đăng kí thành công"}
            } else if (cfpasswords = "") {
                return {success: false, message: "Bạn chưa nhập lại mật khẩu"}
            } else {
                return {success: false, message: "Bạn chưa đăng kí thành công"}
            }
        }
    }
    return {success: false, message: "Tài khoản không tồn tại! 😦"}
}