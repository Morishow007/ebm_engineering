import { useNavigate, useParams } from 'react-router-dom'
import { SendMessagebutton } from '../style'

export const AboutDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('mensagem enviada')
    navigate('/')
  }
  return (
    <>
      <h1>DETALHES DO ENGENHEIRO {id}</h1>
      {/* Button with Tailwind */}
      <button className="bg-black text-center text-white" onClick={handleClick}>
        ENVIAR MENSAGEM
      </button>
      {/* Button with Styled Components */}
      <SendMessagebutton onClick={handleClick}>
        ENVIAR MENSAGEM
      </SendMessagebutton>
    </>
  )
}
