'use client'

import Image from "next/image"
import './globals.css'

export default function Home() {

  function clickHandler(){
    alert('HAI!')
  }

  return (
    <div className="body">
      <div className="banner-container">
      {/* Kartunya */}
        <div className="header-banner-wrapper"> 
          <div className="profile-header-banner">
          <Image
            src="/assets/profil.png"
            alt="Picture of the author"
            fill
            objectFit="contain"
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
          <a href=''>
            <div className='cta-button' onClick={clickHandler}>
              <p>Halo!</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
