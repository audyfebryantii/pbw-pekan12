import Image from "next/image"
export default function Home() {
  return (
    <div>
      <div className="banner-container">
      {/* Kartunya */}
        <div className="header-banner-wrapper"> 
          <div className="profile-header-banner">
          <Image
            src="/assets/profil.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          </div>   
          <div className="content-bio-header-banner">
            <h1>
              Audy Febryanti
            </h1>
            <div className="bio-nim-header-banner">
              <p>
                D121211005
              </p>
              <p>
                Bravo 6, going dark
              </p>
            </div>
          </div>     
        </div>
        <div className="cta-banner-wrapper">
          <button>
            Halo!
          </button>
        </div>
      </div>
    </div>
  )
}
