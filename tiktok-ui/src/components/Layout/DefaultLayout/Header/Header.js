import styles from './Header.module.scss'
import images from '../../../../assets/image';
console.log(images.logo);
function Header(){
    return (
            <header className={styles['wrap-header']}>
                <div className={styles['contain-header']}>
                    <div className={styles.logo}>
                        <img src={images.logo} alt='Tiktok'/>
                    </div>
                </div>
            </header>
    )
}
export default Header;