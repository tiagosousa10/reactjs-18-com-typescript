type User = {
  id:number,
  name:string
}

//                initial State
export type UserState = {
  user: User | null
}

//                    actions
type SignInUser = {
  type: 'SIGNIN',
  payload:{user: User}
}
type SignOut = {
  type : 'SIGNOUT'
}


//                export all actions

export type UserAction = SignInUser | SignOut
