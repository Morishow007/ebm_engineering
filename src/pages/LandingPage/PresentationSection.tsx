import { t } from '../../i18n'
import profile from '../../images/profileEduardo.png'

export const PresentationSection = () => {
  return (
    <div className="mainContainer lightBackground">
      <div className="section-container-content">
        <div className="presentation-section-container">
          <div className="column-profile">
            <div className="profile-picture">
              <img src={profile} alt="profile picture" />
            </div>
          </div>
          <div className="column-half">
            <p>{t('presentationPage.profileEduardo')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
