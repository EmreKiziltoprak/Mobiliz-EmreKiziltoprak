import React from 'react'

function CarLocationCard({item}) {
  return (
    <div className='card'>
    <div className='card__info'>

    <p>Id: {item.vehicleId}</p>
    <p>Plate: {item.plate}</p>

    <p>Longitude: {item.longitude}</p>

    <p>Latitude: {item.latitude}</p>
    <p>Direction: {item.direction}</p>
</div>
    </div>
  )
}

export default CarLocationCard
