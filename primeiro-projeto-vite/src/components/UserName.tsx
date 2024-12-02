export const UserName = () => {
    let names = {nome1: 'Tiago' , nome2: 'Pedro'}

    const formatName = (value:string) => value.toUpperCase()
    

    return(
        <h4>Meu nome é : {formatName('Tiago')}</h4>
    )
}
