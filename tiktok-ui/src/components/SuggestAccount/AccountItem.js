import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestAccount.module.scss'
import images from '../../assets/image';

const cx = classNames.bind(styles);
function AccountItem(){
    return(
        <div className={cx('account-item')}>
            <img src={images.logo} alt='Helloguy' className={cx('avatar')}/>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>Quoc Nguyen Phu</p>
            </div>
        </div>
    )
}
export default AccountItem;