import css from '../Button/Button.module.css'
export const Button = ({text, handler}) =>{
return (
    <button className={css.Button} onClick={handler}>{text}</button>
)
}