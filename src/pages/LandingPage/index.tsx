import '../../Styles/Global.css'
import './style.css'

export const LandingPage = () => {
  return (
    <>
      {/* head section */}
      <div className="head-section-container">
        <div className="section-container-content">
          <h1 className="main-title">
            Transformando Sonhos em Estruturas: Soluções Inovadoras em
            Engenharia Civil para o Seu Projeto
          </h1>
        </div>
      </div>
      {/* middle section */}
      <div className="mainContainer" style={{ backgroundColor: '#f3f1f1' }}>
        <div className="section-container-content">
          <div className="mid-section-container">
            <img src="https://media.licdn.com/dms/image/C4D03AQE8qbiKQqw2fQ/profile-displayphoto-shrink_800_800/0/1603049633499?e=1701907200&v=beta&t=m3iznSO1Y8doeR8LttcFC3N1FMOoI_yiyDRZuROdd2Q" />
            <p>
              EDUARDO MOREIRA Engenheiro Civil, pós-graduado em Engenharia de
              Segurança do Trabalho, Técnico em Desenvolvimento de Software e
              Instrumentista Montador. Atuante desde 2012 na construção civil,
              envolvendo obras como Minha Casa Minha Vida, Shopping Partage,
              Novo Fórum de Rio Grande. Atuante também dentro da indústria em
              empresas como Yara, TECON, OGMO e ECOVIX. A partir de 2018 atuante
              no projeto e execução residencial, laudos técnicos, perícias,
              reformas e regularização de imóveis.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
