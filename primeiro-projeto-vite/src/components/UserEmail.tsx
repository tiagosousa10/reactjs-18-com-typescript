type Props = {
    email:string
}

export const UserEmail = ({email}:Props) => {
    return(
        <h4>Meu email: {email}</h4>
    )
}
