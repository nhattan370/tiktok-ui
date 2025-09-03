import { useState } from "react";
import images from "../../assets/image";
import styles from './image.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Image({src, alt, className, fallback:customFallback = images.no_image, ...props}){
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    }
    return <img className={cx('wrapper', className)} src={fallback || src} alt={alt} {...props} onError={handleError}/>
}
export default Image;