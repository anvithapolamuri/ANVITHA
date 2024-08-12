console.log("Welcome to Easy MATH")

    while(true){
        console.log("1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n")
        let choice=parseInt(prompt("Enter choice"))
        if(choice===1){
            let a=parseInt(prompt("Enter A value"))
            let b=parseInt(prompt("Enter B value"))
            let res=0;
            res=a+b;
            console.log("The result is",res)}
        else if(choice===2){
            let a=parseInt(prompt("Enter A value"))
            let b=parseInt(prompt("Enter B value"))
            let res=0;
            res=a-b;
            console.log("The result is",res)}
        else if(choice===3){
            let a=parseInt(prompt("Enter A value"))
            let b=parseInt(prompt("Enter B value"))
            let res=0;
            res=a*b;
            console.log("The result is",res)}
        else if(choice===4){
            let a=parseInt(prompt("Enter A value"))
            let b=parseInt(prompt("Enter B value"))
            let res=0;
            res=a/b;
            console.log("The result is",res)}
        else{
            console.log("invalid input")
            break;

        }
        let next=prompt("yes or no")
        if(next.toLowerCase()==="no"){
            console.log("Thanks for coming,visit again")
            break;

    }
}
