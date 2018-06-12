import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './Burger-ingredient/Burger-ingredient';

const Burger = props => {

  const getIngredients = () => {
    let ingArray = []

    for (let prop in props.ingredients) {
      for (let i=0; i<props.ingredients[prop].quantity; i++) {
        ingArray.push(<BurgerIngredient key={prop + i} type={prop} />)         
      }
    }

    return ingArray;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {getIngredients().length === 0 ? <p>Please start adding ingredients</p> : getIngredients()}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;