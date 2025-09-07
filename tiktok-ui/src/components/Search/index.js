import TippyHeadless from '@tippyjs/react/headless';
import styles from './Search.module.scss'
import { useState, useRef, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import {Wrapper as ProperWrapper} from '../Proper/Wrapper';
import AccountItem from '../AccountItem/AccountItem';
import { SearchIcon } from '../Icon';
import UseDebounce from '../../hooks/useDebounce';
import * as searchService  from '../../services/searchService';

const cx = classNames.bind(styles);
function Search(){
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = UseDebounce(searchValue, 500);
    // console.log("Search received ref:", ref);

    useEffect(()=>{
        if(!debounce.trim()) {
            setResultSearch([])
            return;
        }
        const fetchApi = async()=>{
            setLoading(true);
            const result = await searchService.search(debounce, 'less');
            setResultSearch(result);
            setLoading(false)
        }
        fetchApi();
    },[debounce])

    const handleClickOutside = () => {
        setShowResult(false)
    }
    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <TippyHeadless
            visible={showResult && resultSearch.length>0}
            interactive={true}
            onClickOutside={handleClickOutside}
            render={attrs => (
                    <div className={styles['search-result']} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <p className={styles['search-title']}>Account</p>
                            {resultSearch.map((result)=>{
                                return <AccountItem key={result.id} data={result}/>
                            })}
                        </ProperWrapper>
                    </div>
                )}
            >
        <div className={cx('search')}>
            <input type='text' 
                ref={inputRef}
                placeholder='Search account and video' 
                spellCheck='false' 
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)} 
                onFocus={()=>{setShowResult(true)}}
            />
            
            {loading && <button className={cx('load')}><FontAwesomeIcon icon={faSpinner}/></button>}
            {!loading && !!searchValue && (
                <button className={cx('close')}>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{
                        inputRef.current.focus()
                        setSearchValue('')
                    }}/>    
                </button>
            )}
            <button className={styles['search-btn']}>
                <SearchIcon></SearchIcon>
            </button>
        </div>
        </TippyHeadless>
        </div>
    )
}
export default Search;