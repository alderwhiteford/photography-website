import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import { useRouter } from "next/navigation";

const ButtonText = styled.h3`
  font-size: 15px;
  font-weight: 400;
`

export default function NavButton({ href, text }) {
  const router = useRouter()

  function handleRouting() {
    text === 'BACK' ? router.back() : router.push(href)
  }

  return (
    <div style={text === 'BACK' ? {display: 'flex', flexDirection: 'row', cursor: 'pointer'} : {display: 'flex', visibility: 'hidden', cursor: 'pointer'}} onClick={() => handleRouting()}>
      {text === 'BACK' ? <ArrowBackIcon/> : <ArrowForwardIcon />}
      <ButtonText>{text}</ButtonText>
    </div>
  )
}