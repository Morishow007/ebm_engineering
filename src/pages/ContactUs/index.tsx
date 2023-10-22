import Form from './Form'
import './style.css'
export const ContactUs = () => {
  return (
    <div className="main-container">
      <img
        src="https://unorte.edu.br/admin/upload/2022_10_03_10_50_31_000000_153-Engenharia-Civil--1920x1080.jpg"
        alt="engineer-contact"
      />
      <div className="contact-container">
        <div className="message-container">
          <h2>Envie sua mensagem</h2>
          <Form />
        </div>
        <div className="engineer-contact">
          <h1>Informações e Contatos</h1>
          <h2>Telefone</h2>
          <p>Fixo: (51)XXXX-XXXX</p>
          <p>Comercial: (51)XXXXX-XXXX</p>

          <h2>Atendimento</h2>
          <p>Segunda á Sexta</p>
          <p>9h ás 18h</p>

          <h2>Endereço</h2>
          <p>Av. AVENIDA, 983</p>
          <p>Centro, Rio Grande - RS</p>
        </div>
      </div>
      {/* Adicionar API do google maps */}
      {/* inspirado no site: https://www.jz.eng.br/contato/ */}
    </div>
  )
}
