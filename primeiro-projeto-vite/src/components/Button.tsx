type Props = {
  onClick: (label:string) => void;
}

export const Button = ({onClick} : Props) => {
  return(
    <button
      onClick={() => onClick('Meu texto do alert')}>
      Meu texto do button
    </button>
  )
}
