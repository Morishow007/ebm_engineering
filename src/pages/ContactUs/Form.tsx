import './style.css'

export const Form = () => {
  return (
    <div className="message-container">
      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
        <br />
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />
        <br />
        {/* Talvez adicionar um seletor para uma area especifica (orçamento, duvidas... */}
        <label>Mensagem*</label>
        <textarea></textarea>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
