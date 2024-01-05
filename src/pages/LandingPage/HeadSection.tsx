import { i18n } from '../../constants/strings'

export const HeadSection = () => {
  return (
    <div className="head-section-container">
      <div className="section-container-content">
        <h1 className="main-title">{i18n.header.title}</h1>
      </div>
    </div>
  )
}
