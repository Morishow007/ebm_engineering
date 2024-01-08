import { Profile } from './Profile'

export const PresentationSection = () => {
  const handleNext = () => {
    console.log('next')
  }
  const handlePrevious = () => {
    console.log('previous')
  }
  return (
    <div className="mainContainer lightBackground">
      <div className="section-container-content">
        <section className="flex items-center bg:#e5e7eb xl:h-full my-20 font-poppins ">
          <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <h1 className="justify-center text-center">Conheça nossa Equipe</h1>
            <div className="flex items-center justify-around my-8 -mx-4">
              {/* Left Arrow */}
              <div className="px-4">
                <button
                  className="flex-shrink-0 hidden w-16 h-16 mr-2  text-gray-700 bg:#e5e7eb border-2 lg:block hover:bg-blue-300 rounded-full"
                  onClick={handlePrevious}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 mx-auto bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
              </div>
              {/* Profile Section (extract) */}
              <Profile />
              {/* Right Arrow */}
              <div className="px-4">
                <button
                  className="flex-shrink-0 hidden w-16 h-16 ml-2 text-gray-700 bg:#e5e7eb border-2 lg:block hover:bg-blue-300 rounded-full"
                  onClick={handleNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 mx-auto bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Bottom */}
            <div className="items-center justify-center hidden lg:flex">
              <button className="inline-block w-3 h-3 mr-10 bg-blue-500"></button>
              <button className="inline-block w-1 h-1 mr-10 bg-blue-300 rounded-full"></button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
