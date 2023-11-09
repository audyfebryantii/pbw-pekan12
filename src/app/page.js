"use client"

import { useState } from "react"
import Image from "next/image"
import './globals.css'

export default function Home() {
  const [bravo, setBravo] = useState(0)
  const handlerTambahBravo = () => {
    setBravo(bravo+1)
  }
  
  const [nama, setNama] = useState("Audy Febryanti")
  const handlerGantiNama = () => {
    setNama("Od")
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
              {nama}
            </h1>
            <div className="bio-nim-header-banner">
              <p>
                D121211005
              </p>
              <p>
                Bravo {bravo}, going dark
              </p>
            </div>
          </div>     
        </div>
        <div className="cta-banner-wrapper">
            <div className='cta-button' onClick={handlerTambahBravo}>
              <p>Halo!</p>
            </div>
            <div className='cta-button' style ={{marginTop: '12px'}} onClick={handlerGantiNama}>
              <p>Ganti Nama</p>
            </div>
        </div>
      </div>
    </div>
  )
}
