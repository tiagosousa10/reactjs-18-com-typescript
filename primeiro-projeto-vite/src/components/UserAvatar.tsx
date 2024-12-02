type Props = {
    src:string
}

export const UserAvatar = ({src}: Props) => {

    return(
        <>
       <img src={src} alt="umAvatarQualquer" style={{width:100, height:100}}     />
       </>
    )
}
