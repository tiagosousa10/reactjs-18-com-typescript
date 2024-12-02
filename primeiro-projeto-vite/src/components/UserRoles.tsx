export const UserRoles = () => {
    //const roles: string[] = ['CEO', 'CTO', 'admin']
    const roles =[
        {id:1,title:'CEO'},
        {id:2,title:'CTO'},
        {id:3,title:'admin'},
    ]

    const filterRoles = (value: {id:number,title:string}) : boolean => {
        return value.title.includes('a')
    }

    const filteredRoles = roles.filter(value => filterRoles(value))

    return(
        <ul>
            {filteredRoles.map((value, key) => (
                <li key={key}> 
                    {value.title} 
                </li>
            ))}
        </ul>
    
      
    )
}
