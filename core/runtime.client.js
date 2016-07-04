import * as util     from 'AIRDOG_DIR/core/module/util.client'
import * as model    from 'AIRDOG_DIR/core/module/model.client'


try{

  global.$database = {}
  global.$util = {}
  global.$model = {}

  util.init()
  model.init()

  let user = $model.User.find()
  console.log(user);

}
catch(e){
  console.error(e)
}
