import styles from './Menu.module.scss'
function Menu({children}){
    return(
        <nav>
            {children}
        </nav>
    )
}
export default Menu;