//Your code here
// ok

const justInvoke = function(fn) {
  return fn()
}

const setThisWithCall = function(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

const setThisWithApply = function (returnsThisAndArgs, bob, [age, hairColor]) {
  return returnsThisAndArgs.apply(bob, [age, hairColor])
}

const returnNewFunctionOf = function (functionToBeCopied, fred) {
  return functionToBeCopied.bind(fred)
}


// returnsThisAndArgs = function(){ return {thisValue: this, arguments: Array.from(arguments)} }
// bob = {name: 'bob'}
// age = 18
// })
