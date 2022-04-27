start
  = additive

additive
  = left:multiplicative _ "+" _ right:additive { return {left, right, operation: "ADDITION"}; }
  / left: multiplicative _ "-" _ right:additive { return {left, right, operation: "SUBTRACTION"}; }
  / multiplicative

multiplicative
  = left:pow _ "*" _ right:multiplicative { return {left, right, operation: "MULTIPLICATION" }; }
  / left:pow _ "/" _ right:multiplicative { return {left, right, operation: "DIVISION" }; }
  / pow

pow
  = left:unary _ "**" _ right:pow { return {left, right, operation: "POW"}; }
  / unary

unary
  = "sqrt(" _ left:additive _ ")" { return {left, operation: "SQRT"}; }
  / primary 

primary
  = constant
  / variable
  / "(" _ additive:additive _ ")" { return additive; }

variable "variable"
  = chars:[0-9a-zA-Z]+ { return {"variable": chars.join("")} ; }

constant "constant"
  = digits:[0-9]+ { return {"constant": digits.join("")} ; }

// optional whitespace
_  "whitespace"
  = [ \t\r\n]*