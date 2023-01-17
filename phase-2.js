function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      if(timeLeft >= 1000){
        resolve(console.log("done stretching"));
      }
      else{
        reject("Error: you dont have enough time to stretch");
      }
    },1000)
  })
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      if(timeLeft >= 500){
        resolve(console.log("done running on treadmill"));
      }
      else{
        reject("Error: you dont have enough time to run on treadmill");
      }
    },500)
  })
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      if(timeLeft >= 2000){
        resolve(console.log("done lifting weights"));
      }
      else{
        reject("Error:  you dont have enough time to lift weights");
      }
    },2000)
  })
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
  .then(() => runOnTreadmill(totalTime-1000))
  .then(() => liftWeights(totalTime-1500))
  .then(() =>console.log("done working out with",(totalTime-3500)/1000,"seconds left"))
  .catch((err) => console.error(err));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


 //workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


 //workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


//workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left