import SideBar from "../../components/SideBar/SideBar";
import styles from './DefaultLayoutHomeFollowing.module.scss'

function DefaultLayoutHomeFollowing({children}){
    return(
        <div className={styles['wrapper-content']}>
            <aside className={styles['container-content']}>
                <SideBar></SideBar>
                <div className={styles['children-content']}>{children}</div>
            </aside>
        </div>
    )
}
export default DefaultLayoutHomeFollowing;