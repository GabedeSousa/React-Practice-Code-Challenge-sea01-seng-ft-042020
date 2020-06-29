import React, { Fragment } from 'react'

const Sushi = (props) => {
  const  { onEatSushi, sushi, sushiIsEaten} = props
  const {img_url, name, price} = sushi

  const handleEatSushi = () =>{
    onEatSushi(props.sushi)
  } 

  const sushiStatus = () => {
    return sushiIsEaten(sushi)
    
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleEatSushi}>
        { 
          sushiStatus() ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi   