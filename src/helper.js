function isNum (char)
{
    let num = parseInt(char);
    return !isNaN(num);
}

function isOp (op)
{
    if(op === '+' || op === '-' || op === '*' || op === '/') return true;
    return false;
}

function calculate(a, b, op)
{
    if(op === '+') return a + b;
    else if(op === '-') return a - b;
    else if(op === '*') return a * b;
    else return a / b;
}
function evaluateExpression (exp)
{
    const stack = [];
    let buf = "";
    for(let i = 0; i < exp.length; i++)
    {
         if(isNum(exp[i]))
         {
            buf += exp[i];
            console.log("buf: " + buf + "\n")
         }
         else if(isOp(exp[i]))
         {
             //Incase there's an operator immediately after the operand like so "(10 20)-" or "10 3+"
             if(buf) {stack.push(parseInt(buf)); buf = "";}

             if(stack.length > 1)
             {
                let second  = stack.pop(),
                    first   = stack.pop(),
                    answer  = calculate(first, second, exp[i]);
                
                stack.push(answer);
                // console.log(answer+ " pushed on stack")
             }
             else
             {
                return -1;
             }
         }
         else if(exp[i] === ' ')
         {
             //check if buf has a value before pushing onto stack
             if(buf !== "")
             {
                stack.push(parseInt(buf));
                buf = "";
             }
         }

    }

    return stack.pop();
}

export default evaluateExpression;