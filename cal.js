let num1 = ""
        let num2 = ""
        let op = ""

        
        function setNum(num) {
            if(op.length == 0) {
                num1 += String(num)
                console.log(num2)
                document.getElementById("num").innerHTML = num1
            } else if (num1.length >10 || num2.length >10) {
                return false
            } else {
                num2 += String(num)
                document.getElementById("num").innerHTML = num2
            }
        }

        function setOp(oper) {
            if(num1.length != 0) {
                op = oper
                document.getElementById("op").innerHTML = op
            } 
        }    
        
        function solve() {
            let result
            switch (op) {
                case "+": 
                    result = Number(num1) + Number(num2)
                    break;
                case "-": 
                    result = Number(num1) - Number(num2)
                    break;
                case "*": 
                    result = Number(num1) * Number(num2)
                    break;
                case "/": 
                    result = Number(num1) / Number(num2)
                    break;
                default:
                    break;
            }
            if(result != undefined) {
                clearInput()
                document.getElementById("num").innerHTML = result
            }
        }
        
        function clearInput() {
            num1 = ""
            num2 = ""
            op = ""
            document.getElementById("num").innerHTML = ""
            document.getElementById("op").innerHTML = ""
        }