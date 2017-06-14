// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch('https://randomuser.me/api/?results=12')
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    console.log(json)
    let result = json.results;
    result.forEach(function(user){
      console.log("Name: " + user.name.first)
      console.log("Email: " + user.email)
    })
  })
})();









// fetch('https://randomuser.me/api/?results=12')
// .then(function(response){
//     return response.json()
//     .then(function(data){
//       console.log(data)
//       console.log(data.results)
//       let result = data.results
//       result.map(function(obj){
//         relevantInfo(obj)
//         // console.log(obj.name.first)
//       });
//     });
//   }
//
// )
// })();
// function namer(object){
//   let fullname = "Name: " + object.name.first + " " + object.name.last;
//   console.log(fullname);
// }
// function relevantInfo(object){
//   namer(object);
//   let email = "Email: " + object.email;
//   console.log(email);
// }
