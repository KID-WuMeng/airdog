"use strict"

let s = new Airdog({
  'static': {
    'dir': __dirname + '/views/'
  }
  // 'session': {
  //   'max-age': 10000000,
  //   'inspect-time': 10000000
  // }
})

// s.get('/', function(){
//   let username = this.session.username
//   if(!username){
//     this.session.username = 'kiddik'
//     this.session.age = 18
//   }
//   this.body = username
// })


// s.get('*', Airdog.CORS, {
//   'allow-origin': ['http://127.0.0.1:8081/', 'http://127.0.0.1:8082/']
// })



s.listen(8080)

request.get({
  url: 'http://127.0.0.1:8080/index.html'
}, function(err, res, body){
  console.log(body);
  // s.close()
})