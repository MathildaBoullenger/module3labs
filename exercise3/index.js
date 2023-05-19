if (0) console.log('#1 zero is true') // 0 won't print because 0 == false. The input is false and therefore the message won't be displayed.
if ("0") console.log('#2 zero is true') // This will print because the string is not empty which converts to true in boolean values.
if (null) console.log('null is true') // This won't print because null is a falsy value, implicitly converting to false.
if (-1) console.log('negative is true') // This will print because the string is not empty which converts to true in boolean values.
if (1) console.log('positive is true') // This will print because the string is not empty which converts to true in boolean values.