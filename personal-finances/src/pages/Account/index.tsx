import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { useTheme } from "styled-components"
import { Container, Footer, Body,Header, HeaderDeleteAccount, HeaderInfo, HeaderSubTitle, HeaderTitle, Loading } from "./styles"
import Alert from "../../components/Alert"
import { ScaleLoader } from "react-spinners"
import { useAuth } from "../../hooks/auth"
import { deleteUser, updateUser } from "../../services/request"
import { setUser } from "../../redux/slices/authSlice"
import { Button } from "../../components/Button"
import TextInput from "../../components/TextInput"

export const Account = () => {
  const user = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch()

  const [loadingRequest,setLoadingRequest] = useState(false)
  const [nameValue,setNameValue] = useState(user?.name as string)
  const [emailValue,setEmailValue] = useState(user?.email as string)
  const [showAlert,setShowAlert] = useState({type: 'error', message: '', show: false})

  const {handleSignOut} = useAuth()
  const theme= useTheme()

  const handleUpdateAccount = async() => {
    setLoadingRequest(true)
    const request = await updateUser(nameValue,emailValue)
    setLoadingRequest(false)

    if(request.error){
      setShowAlert({type:'error', message: request.error, show:true})
    }

    if(request.data){//atualizar o utilizador
      dispatch(setUser(request.data.user))
      setShowAlert({type:'success' , message:'Informações alteradas com sucesso!', show:true})
    }
  }

  const handleDeleteAccount = async() => {
    if(window.confirm('Tem a certeza que deseja excluir a sua conta?')){
      setLoadingRequest(true)

      //delete user account and sign out
      await deleteUser()
      handleSignOut()

      setLoadingRequest(false)

    }
  }

  return(
   <Container>
    <Header>
      <HeaderInfo>
        <HeaderTitle>Minha Conta</HeaderTitle>
        <HeaderSubTitle>Edita os dados da tua conta, e depois clica em guardar! </HeaderSubTitle>
      </HeaderInfo>

      <HeaderDeleteAccount>
        <Button onClick={handleDeleteAccount} width="120px" size="md">Excluir conta</Button>
      </HeaderDeleteAccount>

    </Header>


     <Alert 
        type={showAlert.type}
        title={showAlert.message}
        show={showAlert.show}
        setShow={show => setShowAlert({...showAlert, show})} 
      />

      {loadingRequest && (
      <Loading>
        <ScaleLoader color={theme.COLORS.primary} />
      </Loading>
      )}  


      {!loadingRequest && (
        <>
        <Body>
          <TextInput 
            label="Seu nome" 
            placeholder="EX: João da Silva" 
            value={nameValue} 
            onChange={(e) => setNameValue(e.target.value)}
            borderRadius="sm" 
          />

          <TextInput 
            label="Seu email" 
            placeholder="EX: joao321@gmail.com" 
            value={emailValue} 
            onChange={(e) => setEmailValue(e.target.value)}
            borderRadius="sm" 
          />
        </Body>

        <Footer>
          <Button onClick={handleUpdateAccount} size="md" width="110px">
            Guardar
          </Button>
        </Footer>
        </>
      )}


   </Container>

  )
}
