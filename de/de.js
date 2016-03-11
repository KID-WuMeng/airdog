"use strict"

let s = new Airdog({
  'render': {
    'template-engine': 'hogan',
    'template-directory': `${__dirname}/views`
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


s.get('/', function(){
  this.render('index.html', {'name': 'wumeng'})
})


s.listen(8080)

request.get({
  url: 'http://127.0.0.1:8080/'
}, function(err, res, body){
  console.log(body);
  s.close()
})


