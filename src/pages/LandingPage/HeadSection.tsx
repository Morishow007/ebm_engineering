import { t } from '../../i18n'

export const HeadSection = () => {
  return (
    <div className="head-section-container">
      <div className="section-container-content">
        <h1 className="main-title">{t('header.title')}</h1>
      </div>
    </div>
  )
}
