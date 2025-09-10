import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestAccount.module.scss'
import images from '../../assets/image';

import AccountPreview from './AccountPreview/AccountPreview';
import { Wrapper as ProperWrapper } from '../Proper/Wrapper';

const cx = classNames.bind(styles);
function AccountItem(){
    const renderPreview = (props) =>{
        return(
            <div tabIndex='-1' {...props}>
                <ProperWrapper>
                    <AccountPreview/>
                </ProperWrapper>
            </div>
        )
    }

    return(
        <div>
            <Tippy
                interactive={true}
                placement='bottom-start'
                delay={[500,200]}
                render={renderPreview}
            >
            <div className={cx('account-item')}>
                <img src={images.background} alt='Helloguy' className={cx('avatar')}/>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>quocnguyenphu</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                    </p>
                    <p className={cx('name')}>Quoc Nguyen Phu</p>
                </div>
            </div>
        </Tippy>
        </div>
    )
}
export default AccountItem;