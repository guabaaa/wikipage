import React, {useState} from 'react';
import logo from '../assets/images/KakaoTalk_20240227_130259911.png'
import {MdOutlineSearch} from 'react-icons/md'
import MainSection from "../components/MainSection";
import {keyword} from "../assets/keyworddata";

const MainPage = () => {
    const [data, setData] = useState(keyword); // 임시데이터
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
                    <h1 className='fw_bold fs_35 header_msg'>동박 위키 : </h1>
                    <h3 className='fw_500 fs_20'>어서오세요- 동박위키 입니다.</h3>
                    <div className='header_btm_wrap'>
                        <img alt='logo' src={logo} width={250} style={{marginRight: '20px'}}/>
                        <div className='search_wrap'>
                            <MdOutlineSearch width={50} height={50} style={{verticalAlign:'middle'}} />
                            <div style={{height: '50px'}}>
                                <input style={{width: '80%'}} type='text' placeholder='검색' onKeyPress={handleSearch}/>
                            </div>
                        </div>
                        <div style={{height: '50px'}}>
                            <button className='fw_500 fs_20' onClick={handleRandomPage}>Random</button>
                        </div>
                    </div>
                    <div className='keyword_wrap fs_15 fw_bold'>
                        <button>키워드1</button>
                        <button>키워드2</button>
                        <button>키워드3</button>
                        <button>키워드4</button>
                        <button>키워드5</button>
                    </div>
                </div>
                <MainSection />
            </div>
        </>
    );
};

export default MainPage;