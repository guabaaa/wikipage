import React, {useEffect, useState} from 'react';
import logo from '../assets/images/KakaoTalk_20240227_130259911.png'
import {MdOutlineSearch} from 'react-icons/md';
import {keyword} from "../assets/keyworddata";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]); // 서버로부터 받아온 키워드 저장할 상태

    /** 로고 클릭시 메인으로 이동 */
    const handleMain = () => {
        navigate('/')
    }

    /** 검색 관련 함수 */
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            // 검색 로직
        }
    }

    /** 랜덤 페이지 이벤트 핸들러 */
    const handleRandomPage = () => {
        // 랜덤 페이지 로직
    }

    /** 서버로부터 키워드 데이터를 가져오는 함수 */
    useEffect(() => {
        const fetchKeyword = async () => {
            try {
                const res = await fetch('http://localhost:8080/home', {
                    method: 'GET',
                    headers: {
                        'Accept': '*/*',
                    },
                });
                if (!res.ok) {
                    throw new Error('network res');
                }
                const keywords = await res.json();
                setData(keywords); // 서버로부터 받아온 데이터 상태에 저장함
            } catch (err){
                console.error('에러', err);
            }
        }
        fetchKeyword();
    },[])

    return (
        <>
            <div className='main_wrap'>
                <div className='header_wrap'>
                    <h1 className='fw_bold fs_35 header_msg'>동박 위키 : </h1>
                    <h3 className='fw_500 fs_20'>어서오세요- 동박위키 입니다.</h3>
                    <div className='header_btm_wrap'>
                        <img onClick={handleMain} alt='logo' src={logo} width={250} style={{marginRight: '20px', cursor:'pointer'}}/>
                        <div className='search_wrap'>
                            <MdOutlineSearch width={50} height={50} style={{verticalAlign:'middle'}} />
                            <div style={{height: '50px'}}>
                                <input type='text' placeholder='검색' onKeyPress={handleSearch}/>
                            </div>
                        </div>
                        <div className='random_btn' style={{height: '50px'}}>
                            <button className='fw_bold fs_20' onClick={handleRandomPage}>Random</button>
                        </div>
                    </div>
                    <div className='keyword_wrap fs_17 fw_bold'>
                        {data.map((keyword, index) => (
                            <button key={index}>{keyword.title}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;