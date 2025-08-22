import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';
function Wrapper({children, className}){
    const cx = classNames.bind(styles);
    return(
        <div className={cx('wrapper', className)}>
            {children}
        </div>
    )
}
export {Wrapper};