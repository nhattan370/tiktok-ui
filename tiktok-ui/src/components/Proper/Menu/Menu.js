import styles from './Menu.module.scss'
import Tippy from '@tippyjs/react/headless';
import {Wrapper as ProperWrapper} from '../Wrapper';
import {useState} from 'react'
import classNames from 'classnames/bind';
import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = ()=>{};
function Menu({children, items=[], hideOnClick=false, onChange=defaultFn}){
    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length-1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return <MenuItems key={index} data={item}             
                onClick={()=>{
                    if(isParent){
                        setHistory(prev => [...prev, item.children])
                    }else{
                        onChange(item);
                    }
                }}
            />
    })
    }
    return(
        <Tippy
            onHide={()=>{setHistory(prev => prev.slice(0,1))}}
            delay={[0,300]}
            offset={[12, 12]}
            hideOnClick = {hideOnClick}
            placement='bottom-end'
            interactive={true}
            render={attrs => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('wrapper')}>
                        {history.length > 1 && <Header title={current.title} onBack = {()=>{setHistory(prev => prev.slice(0,prev.length-1))}}></Header>}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </ProperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}
export default Menu;