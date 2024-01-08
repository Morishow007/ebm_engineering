import { CardProduct } from './CardProduct'

export const ProductsSection = () => {
  const CARDS = [
    {
      title: 'PROJETO E EXECUÇÃO DE OBRAS',
      description:
        'Transformamos seus projetos em realidade com qualidade e eficiência.',
    },
    {
      title: 'REGULARIZAÇÃO DE IMÓVEIS',
      description:
        'Simplificamos o processo de regularização, garantindo segurança jurídica.',
    },
    {
      title: 'CURSOS E TREINAMENTOS',
      description:
        'Desenvolva habilidades práticas na construção civil. Cursos especializados.',
    },
    {
      title: 'LAUDOS E PERÍCIAS',
      description:
        'Diagnósticos precisos para proteger seu patrimônio. Laudos de qualidade.',
    },
  ]

  return (
    <div className="mainContainer darkerBackground">
      <div className="section-container-content">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 my-12">
          {CARDS.map((item) => (
            <CardProduct
              key={`card-${item.title}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
