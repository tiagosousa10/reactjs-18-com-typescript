import { useState } from "react"
import { TransactionStatus } from "../../../@types/Transaction"
import { useTheme } from "styled-components"
import { newTransaction } from "../../../services/request"
import { Body, Container, Footer, Header, HeaderInfo, HeaderSubTitle, HeaderTitle, Loading } from "./styles"
import Alert from "../../../components/Alert"
import { ScaleLoader } from "react-spinners"
import TextInput from "../../../components/TextInput"
import SelectInput from "../../../components/SelectInput"
import { Button } from "../../../components/Button"

export const NewTransaction = () => {
  const [loadingRequest,setLoadingRequest] = useState(false)
  const [titleValue,setTitleValue] = useState('')
  const [amountValue,setAmountValue] = useState('')
  const [statusValue, setStatusValue] = useState<TransactionStatus>('pending')
  const [showAlert,setShowAlert] = useState({type:'error', message: '', show:false})

  const theme= useTheme()

  const handleOnClick = async () => {
    const [title,amount,status] = [titleValue,amountValue,statusValue]

    if(!title || !amount || !status){
      setShowAlert({type:'error', message:'Preencha todos os campos', show:true})
      return;
    }

    const amountUSD = Number(amount.replace('.', '').replace(',','.'))

    setLoadingRequest(true)
    const request = await newTransaction(title,amountUSD, status)
    setLoadingRequest(false)

    if(request.error){
      setShowAlert({type:'error', message:request.error, show:true})
    } else {
      setShowAlert({type:'success', message:'Transação criada com sucesso!', show:true})
      setTitleValue('')
      setAmountValue('')
      setStatusValue('pending')
    }

  }

  return(
    <Container>
      <Header>
        <HeaderInfo>
          <HeaderTitle>Nova Transação</HeaderTitle>
          <HeaderSubTitle>Crie uma nova transação, preencha os campos abaixo e clique em guardar!</HeaderSubTitle>
        </HeaderInfo>
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
              label="Titulo da Transação" 
              placeholder="Ex: Salário"  
              value={titleValue} 
              onChange={(e) => setTitleValue(e.target.value)} 
              borderRadius="sm"
            />

            <TextInput 
              label="Valor" 
              placeholder="Ex: 1.000,00 ou -1.000,00"  
              value={amountValue} 
              onChange={(e) => setAmountValue(e.target.value)} 
              borderRadius="sm"
            />

            <SelectInput 
            label="Status" 
            options={[{label: 'Pendente', value:'pending'}, {label:'Concluido', value:'completed'}]} 
            value={statusValue}
            onChange={(e) => setStatusValue(e.target.value as TransactionStatus)}
            />
          </Body>

          <Footer>
            <Button onClick={handleOnClick} size="md" width="110px">Guardar</Button>
          </Footer>
        </>
      )}  
    </Container>
  )
}
