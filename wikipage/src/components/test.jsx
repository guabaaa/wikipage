import React, { useEffect, useState } from 'react';
import logo from '../assets/images/KakaoTalk_20240227_130259911.png';
import { MdOutlineSearch } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]); // 서버로부터 받아온 키워드 데이터를 저장할 상태

    /** 로고 클릭시 메인으로 이동 */
    const handleMain = () => {
        navigate('/');
    }

    /** 검색 관련 함수 */
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            // 검색 로직 구현
        }
    }

    /** 랜덤 페이지 이벤트 핸들러 */
    const handleRandomPage = () => {
        // 랜덤 페이지 로직
    }

    /** 서버로부터 키워드 데이터를 가져오는 함수 */
    useEffect(() => {
        const fetchKeywords = async () => {
            try {
                const response = await fetch('http://localhost:8080/home', {
                    method: 'GET',
                    headers: {
                        'Accept': '*/*',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const keywords = await response.json();
                setData(keywords); // 서버로부터 받아온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchKeywords();
    }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 마운트될 때 한 번만 실행됩니다.

    return (
        <>
            <div className='main_wrap'>
                <div className='header_wrap'>
                    {/* 기존 코드 생략 */}
                    <div className='keyword_wrap fs_17 fw_bold'>
                        {data.map((keyword, index) => (
                            <button key={index}>{keyword.title}</button> // 예시에서는 키워드 객체에 title 속성이 있다고 가정
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;