import { UserName } from './UserName'
import { UserEmail } from './UserEmail'
import { UserAge } from './UserAge'
import { UserAvatar } from './UserAvatar'
import { UserRoles } from './UserRoles'

export const UserInfo = () => {
    return(
        <>
        <UserAvatar/>
        <UserName/>
        <UserEmail/>
        <UserAge/>
        <UserRoles/>
        </>
    )
}
