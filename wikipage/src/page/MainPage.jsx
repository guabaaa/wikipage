import React from 'react';
import logo from '../assets/images/KakaoTalk_20240227_130259911.png'
import {MdOutlineSearch} from 'react-icons/md'

const MainPage = () => {
    /** 검색 관련 함수 */
    const handleSearch = () => {

    }

    /** 랜덤 페이지 이벤트 핸들러 */
    const handleRandomPage = () => {
        // 랜덤 페이지 로직
    }

    return (
        <>
            <div className='main_wrap'>
                <div className='header_wrap'>
                    <h1>동박 위키 : </h1>
                    <h3>어서오세요- 동박위키 입니다.</h3>
                    <div className='header_btm_wrap'>
                        <img alt='logo' src={logo} />
                        <div className='search_wrap'>
                            <MdOutlineSearch />
                            <input type='text' placeholder='검색' onKeyPress={handleSearch} />
                        </div>
                        <button onClick={handleRandomPage}>Random</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;