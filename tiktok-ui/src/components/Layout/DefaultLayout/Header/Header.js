import styles from './Header.module.scss'
import images from '../../../../assets/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';

function Header(){
    return (
            <header className={styles['wrap-header']}>
                <div className={styles['contain-header']}>
                    <div className={styles.logo}>
                        <img src={images.logo} alt='Tiktok'/>
                    </div>
                    <div className={styles.search}>
                        {/* 
                            eliminate spell check;
                            loading when searching;
                            icon close, search;
                            expand input

                        */}
                        <input type='text' placeholder='Search account and video' spellCheck='false'/>
                        <button className={styles.close}>
                            <FontAwesomeIcon icon={faCircleXmark}/>    
                        </button>
                        <button className={styles.load}>
                            <FontAwesomeIcon icon={faSpinner}/>
                        </button>
                        <button className={styles['search-btn']}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                    <div className={styles.action}>

                    </div>
                </div>
            </header>
    )
}
export default Header;