import React from 'react'
import classes from './MealItem.module.css'

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return (
       <li>
           <div className={classes.meal}>
               <h3>{props.name}</h3>
               <div className={classes.description}>{props.description}</div>
               <div className={classes.price}>{price}</div>
               </div>
           <div>

           </div>
       </li>
    )
}

export default MealItem;
