import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './AccountItem.module.scss'
function AccountItem(){
    return(
        <div className={styles.wrapper}>
            <img src="https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg" alt="Hello" className={styles.avatar}/>
            <div className={styles.info}>
                <h4 className={styles.name}>
                    <span>Nguyen Hoa Ha</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.check}></FontAwesomeIcon>
                </h4>
                <span className={styles.username}>Co cong nuong</span>
            </div>
        </div>
    )
}
export default AccountItem;