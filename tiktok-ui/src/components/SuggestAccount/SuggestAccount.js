import classNames from "classnames/bind";
import styles from './SuggestAccount.module.scss'
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);
function SuggestAccount({label, children}){
    return(
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <p className={cx('see-all')}>See all</p>
        </div>
    )
}
export default SuggestAccount;