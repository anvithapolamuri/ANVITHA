console.log("welcome to ATM")
let pin = parseInt(prompt("EnterPin number"))
let AC=1000;
let total =1000;
let userExist=false;
for(let i=0;i<100;i++){
    if(i==pin){
        console.log("User Exists")
        userExist=true;
        break;
    }
}
if(!userExist){
    console.log("user NOT EXIST")
}
else{
    while(true){
        console.log("1.Deposit\n 2.withdraw \n 3.Balance Enquiry\n 4.exit")
        let choice = parseInt(prompt("Enter Your Choice"))
        if(choice===1){
            let dep = parseInt(prompt("enter Amount to Deposit:"))
            AC=AC+dep;
            console.log("Now Your Account balance is",AC)
        }
        else if(choice===2){
            let wth = parseInt(prompt("enter Amount to Withdraw:"))
            AC=AC-wth;
            console.log("Now Your Account balance is",AC)
        }
        else if(choice===3){
            console.log("Now Your Account balance is",AC)
        }
        else if(choice===4){
            console.log("Thanks for coming,visit Again")
            break;
        }
        else{
            console.log("Invalid Input")
            break;
        }
        let next=prompt("Enter Yes or No")
        if(next.toLowerCase()==="no"){
            console.log("Thanks for coming,Visit Again")
            break;
        }
    }
}