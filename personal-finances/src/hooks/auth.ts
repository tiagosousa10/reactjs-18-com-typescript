import { User } from "../@types/Auth"
import { useAppDispatch } from "../redux/hooks"
import { setAuthStatus, setAuthToken, setUser } from "../redux/slices/authSlice"
import { getUser, signIn, signUp } from "../services/request"

const LOCAL_STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY 

export const useAuth = () => {
  const dispatch = useAppDispatch()

  // function para authenticar o user
  const authenticate = (user: User, authToken: string) => {
    dispatch(setUser(user))
    dispatch(setAuthToken(authToken))
    dispatch(setAuthStatus('authenticated'))

    localStorage.setItem(LOCAL_STORAGE_KEY, authToken)
  }

  // get token from localstorage
  const handleGetToken = () => localStorage.getItem(LOCAL_STORAGE_KEY)

  // get the user using the authToken saved in local storage
  const handleAuthenticateUser = async () => {
    const request = await getUser()
    const authToken = handleGetToken()

    if(!request.data || !authToken){
      dispatch(setAuthStatus('not_authenticated'))
      return;
    }

    const {data} = request;
    authenticate(data.user, authToken)
  }


  // function para login
  const handleSignIn = async({email,password} : {email:string,password:string}) => {
    const request = await signIn(email,password)

    if(request.data){
      const {data} = request;

      authenticate(data.user, data.authToken)
      return true;
    }

    dispatch(setAuthStatus('not_authenticated'))
    return request.error
  }

    // function para signUp - criar conta
  const handleSignUp = async({name,email,password} : {name:string,email:string,password:string}) => {
    const request = await signUp(name,email,password)

    if(request.data){
      const {data} = request;

      authenticate(data.user, data.authToken)
      return true;
    }

    dispatch(setAuthStatus('not_authenticated'))
    return request.error
  }

  //function to signOut - sair da conta / logout
  const handleSignOut = () => {
    dispatch(setUser(null))
    dispatch(setAuthToken(null))
    dispatch(setAuthStatus('not_authenticated'))

    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  //exportar as funcoes
  return{
    handleGetToken,
    handleAuthenticateUser,
    handleSignIn,
    handleSignUp,
    handleSignOut
  }
}

