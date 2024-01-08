import profileEduardo from '../../images/profileEduardo.png'

export type Profile = {
  name?: string
  imgSrc?: string
  description?: string
  title?: string
}

export const retrieveProfiles = () => {
  const profiles: Profile[] = [
    {
      description: 'Um baita cocao',
      imgSrc: profileEduardo,
      name: 'Eduardo Moreira',
      title: 'Engenheiro Civil em Segurança do Trabalho',
    },
    {
      description: 'teste',
      imgSrc: profileEduardo,
      name: 'Teste',
      title: 'Engenheiro Civil em Segurança do Trabalho',
    },
  ]

  return profiles
}
