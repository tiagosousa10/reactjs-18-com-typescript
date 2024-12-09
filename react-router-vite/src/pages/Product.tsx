import { useParams } from "react-router-dom"

export const Product = () => {
  const {categoryId,productId} = useParams()


  return(
    <div>
      <strong>productId =  {productId} </strong>
      <br/>
      <strong>categoryId =  {categoryId} </strong>

    </div>
  )
}
