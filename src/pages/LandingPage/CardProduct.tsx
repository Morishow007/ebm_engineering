import profile from '../../images/profileEduardo.png'

type Props = {
  title: string
  description: string
}

export const CardProduct = ({ description, title }: Props) => {
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="group">
        <img
          className="w-full h-full object-cover transition-transform transform group-hover:scale-125"
          src={profile}
          alt="profile picture"
        />
        <a href="">
          <div className="absolute bottom-0 w-full h-20 group-hover:h-44 bg-black bg-opacity-50 transition-opacity flex items-top justify-center group">
            <div className="container mx-auto px-4 pt-4 pb-2  text-white">
              <div className="font-bold text-xl mb-2 text-center">{title}</div>
              <p className="max-w-prose invisible  group-hover:visible">
                {description}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
