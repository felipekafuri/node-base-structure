import {User} from '@models/Users'

test("it should be ok", ()=>{
  const user = new User()

  user.name = "Felipe"

  expect(user.name).toEqual('Felipe')
})