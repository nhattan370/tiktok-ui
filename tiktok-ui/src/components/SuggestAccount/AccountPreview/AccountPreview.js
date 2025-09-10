import classNames from "classnames/bind"
import styles from './AccountPreview.module.scss'
import images from "../../../assets/image";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountPreview(){
    return(
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')} alt="avatar" src={images.avatar}/>
                    <div><Button primary>Following</Button></div>
                </div>
                <div className={cx('body')}>
                    <p className={cx('nickname')}>
                        <strong>quocnguyenphu</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                    </p>
                    <p className={cx('name')}>Quoc Nguyen Phu</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>8.2M  </strong>
                        <span className={cx('label')}>Follower</span>
                        <strong className={cx('value')}>8.2M  </strong>
                        <span className={cx('label')}>Like</span>
                    </p>
                </div>
            </div>
    )
}
export default AccountPreview