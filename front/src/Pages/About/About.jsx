import React from 'react'
import { Badge } from '../../components/Card'
import './styles.css'
import Navbar from '../../components/Navbar.jsx'


export function Info({
  miNombre, edad, profesion, ciudad, pais, email, telefono, descripcion
}) {
  return (
    <div className='infoContainer'>
      <h2 className='pageTitle'>Sobre Mi</h2>
      <p className='greets'>Hola soy {miNombre}</p>
      <div id="badges">
        <Badge
        info={`Tengo ${edad} años`} />

        <Badge
        info={`Soy ${profesion}`} />

        <Badge
        info={`Vivo en ${ciudad}, ${pais}`} />

        <Badge
        info={`Mi email es ${email}`} />

        <Badge
        info={`Mi telefono es ${telefono}`} />
        
   
      </div>

      <p className='description'>{descripcion}</p>
    </div>

  )
}



export default function About(
  {
    miNombre, edad, profesion, ciudad, pais, email, telefono, descripcion
  }
) {
  return (
    <>
    <Navbar />
    <section className='InfoContainer'>
      <Info 
          miNombre={miNombre}
          edad={edad}
          profesion={profesion}
          ciudad={ciudad}
          pais={pais}
          email={email}
          telefono={telefono}
          descripcion={descripcion}
        />


      <img
        src="https://okdiario.com/img/2019/06/11/mono.jpg"
        className='aboutImg'
      />  
    </section>
    </>

  )
}
