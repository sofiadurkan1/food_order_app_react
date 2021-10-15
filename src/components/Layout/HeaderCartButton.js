import { useContext ,useEffect,useState} from 'react';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context"
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setbBnIsHighlighted] = useState(false)

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;//destructuring//we want if cart item changed, do bump..


    const numberOfCartItems = cartCtx.items?.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${ btnIsHighlighted ?classes.bump : ''}`;

    useEffect(() => { //give bump to button.. everytime new item added
        if (items.length === 0) {
            return;
        }
        setbBnIsHighlighted(true);

        const timer = setTimeout(() => {
            setbBnIsHighlighted(false);
        },300)


        return () =>{
            clearTimeout(timer);
        };

        
        
    }, [items]);



    return (
       <button className={btnClasses} onClick={props.onClick}>
           <span className={classes.icon}>
               <CartIcon/>
           </span>
           <span>Your Cart</span>
           <span className={classes.badge}>
          {numberOfCartItems}
           </span>

       </button>
    )
}

export default HeaderCartButton
