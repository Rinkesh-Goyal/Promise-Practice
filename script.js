// All promise instances get a then method which allows you to react to the promise.  The first then method callback receives the result given to it by the resolve() call


// new Promise(function(resolve,reject){
//     // setTimeout(()=>{resolve(30)},3000);
//     setTimeout(()=>{reject("Error")},5000);
// })
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// })


// We All promise instances get a then method which allows you to react to the promise.  The first then method callback receives the result given to it by the resolve() call

// Each then receives the result of the previous then's return value.

// If a promise has already resolved but then is called again, the callback immediately fires. If the promise is rejected and you call then after rejection, the callback is never called.

// console.log('Chained then');
// new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve(10),3000);
// })
// .then((num)=>{console.log('first then:',num);return num*2;})    //first then: 10
// .then((num)=>{console.log('Second then:',num);return num*2;})   //Second then: 20
// .then((num)=>{console.log('last then:',num);}); //last then: 40


// The catch callback is executed when the promise is rejected

// console.log("catch");

// new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("Done!"),3000);
// })
// .then((num)=>console.log(num))
// .catch((error)=>console.log(error));

// The newly introduced finally callback is called regardless of success or failure

// console.log("finally");

// new Promise((resolve,reject)=>{
//     reject("Error");
// })
// .then(()=>console.log("success"))
// .catch(()=>console.log("fail"))
// .finally(()=>console.log("Finally"));

// console.log(Promise.all);

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('First!'),1000);
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve('Second!'),3000);
// });

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => reject('Third!'),2000);
// });


// Promise.all([promise1,promise2,promise3])
// .then((result)=>console.log("then",result))
// .catch((error)=>console.log(error));


// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('First!'),2000);
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve('Second!'),3000);
// });

// Promise.race([promise1,promise2])
// .then((result)=>console.log(result))
// .catch(()=>console.log("Error"));

// console.log('hi');

// setTimeout(()=>{
//     console.log('There')
// },3000);

// console.log('Hello');





