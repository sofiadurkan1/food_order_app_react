import { Fragment } from 'react';
import mealsImage from "../../assets/meals.jpeg"
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>SuperEats</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt=" A table full of meals" />
            </div>

        </Fragment>
    )
}

export default Header;
