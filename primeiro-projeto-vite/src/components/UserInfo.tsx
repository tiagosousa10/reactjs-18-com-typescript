import { UserName } from './UserName'
import { UserEmail } from './UserEmail'
import { UserAge } from './UserAge'
import { UserAvatar } from './UserAvatar'
import { UserRoles } from './UserRoles'

type Props = {
    name:string,
    email:string,
    age:number,
    avatar?:string,
    roles:{id:number,title:string}[]
}

export const UserInfo = ({name,email,age,roles,avatar = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F275%2F847%2Foriginal%2Fmale-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg&f=1&nofb=1&ipt=9231833f9668bbe67d8feb137ee5bf7b82587abdb3ba8cf9195876be365c669e&ipo=images'}:Props) => {
    return(
        <>
        <UserAvatar
            src={avatar}
        />

        <UserName
            name={name}
        />

        <UserEmail 
            email={email}
        />

        <UserAge 
            age={age}
        />

        <UserRoles 
            roles={roles}
        />

        </>
    )
}
