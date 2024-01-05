import { i18n } from '../../constants/strings'

export const PresentationSection = () => {
  return (
    <div className="mainContainer lightBackground">
      <div className="section-container-content">
        <div className="presentation-section-container">
          <div className="column-profile">
            <img
              src="https://csb100320033953e5ba.blob.core.windows.net/assets/profileEduardo.png?sp=r&st=2024-01-05T11:53:03Z&se=2025-05-01T18:53:03Z&spr=https&sv=2022-11-02&sr=b&sig=FQfH5TuB6DT8vpEudNh3EmnfFV7J85o%2FEX%2FqC%2FGhQhw%3D"
              alt="profile picture"
            />
          </div>
          <div className="column-half">
            <p>{i18n.presentationPage.profileEduardo}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
