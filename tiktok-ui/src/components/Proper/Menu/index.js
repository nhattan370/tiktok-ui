import styles from './Menu.module.scss'
import Tippy from '@tippyjs/react/headless';
import {Wrapper as ProperWrapper} from '../../Proper/Wrapper';
import classNames from 'classnames/bind';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({children, items=[]}){
    const renderItems = ()=>{
        return items.map((item, index) => (
            <MenuItems key={index} data={item}/>
        ))
    }
    return(
        <Tippy
            // visible
            delay={[0,300]}
            placement='bottom-end'
            interactive={true}
            render={attrs => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('wrapper')}>
                        {renderItems()}
                    </ProperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}
export default Menu;