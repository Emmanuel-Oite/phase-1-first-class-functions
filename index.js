function receivesAFunction(callBackFunction){
  return callBackFunction();
}

function returnsANamedFunction(){
return function namedFunction(){
  console.log("i am a named function")
}
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("i am a anonymous function");
  }
}  