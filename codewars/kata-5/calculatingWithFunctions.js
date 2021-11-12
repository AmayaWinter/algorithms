function zero(args) {return performOperation(0,args);}
function one(args) {return performOperation(1,args);}
function two(args) {return performOperation(2,args);}
function three(args) {return performOperation(3,args);}
function four(args) {return performOperation(4,args);}
function five(args) {return performOperation(5,args);}
function six(args) {return performOperation(6,args);}
function seven(args) {return performOperation(7,args);}
function eight(args) {return performOperation(8,args);}
function nine(args) {return performOperation(9,args);}

function performOperation(leftOperand, args)
{
    let result = leftOperand;
    if(args) {
        switch(args['operation']) {
            case '+':
                return leftOperand + args['rightOperand'];
                break;
            case '-':
                return leftOperand - args['rightOperand'];
                break;
            case '*':
                return leftOperand * args['rightOperand'];
            break;
            case '/':
                return Number.parseInt(leftOperand / args['rightOperand']);
            break;
        }
    }
    return result;
}

function plus(rightOperand) {return {operation: '+', rightOperand: rightOperand};}
function minus(rightOperand) {return {operation: '-', rightOperand: rightOperand};}
function times(rightOperand) {return {operation: '*', rightOperand: rightOperand};}
function dividedBy(rightOperand) {return {operation: '/', rightOperand: rightOperand};}


console.log(seven(times(five())));