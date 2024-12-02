
export const UserAvatar = () => {
    const img = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F64%2Fbf%2Fcf%2F64bfcfd8cc563941fa87d7e158de7e23.jpg&f=1&nofb=1&ipt=5780db89378db078da5f28c9a99344f4049ea5807d12d530003761fb6057bf7c&ipo=images'

    return(
        <>
       <img src={img} alt="umAvatarQualquer" onClick={() => alert('clicou')} style={{width:100, height:100}}      />
       </>
    )
}
