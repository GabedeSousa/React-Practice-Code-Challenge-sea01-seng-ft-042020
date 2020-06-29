import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  const {currentSushi, ongetNextSushi, onEatSushi, sushiIsEaten} = props;

  const renderSushi = () =>{ 
  return currentSushi.map(sushi => {
    return <Sushi sushi={sushi} onEatSushi={onEatSushi} sushiIsEaten={sushiIsEaten}/>
  })
 }
  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton ongetNextSushi={ongetNextSushi} />
      </div> 
    </Fragment>
  )
}

export default SushiContainer