import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './AccountItem.module.scss'
import classNames from "classnames/bind";
import Image from "../Image";

const cx = classNames.bind(styles);
function AccountItem(){
    return(
        <div className={cx('wrapper')}>
            <Image src="https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg" alt="Hello" className={cx('avatar')}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Hoa Ha</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>Co cong nuong</span>
            </div>
        </div>
    )
}
export default AccountItem;