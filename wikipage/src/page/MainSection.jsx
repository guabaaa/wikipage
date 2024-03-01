import React from 'react';
import {useNavigate} from "react-router-dom";

const MainSection = () => {
    const navigate = useNavigate();

    // 등록페이지 이동
    const handleRegister = ()=> {
        navigate('/register')
    }

    // 해당 키워드 수정페이지 이동
    const handleEdit = () => {
        navigate('/edit')
    }

    return (
        <div className='main_section_wrap'>
            <div className='section_keyword_wrap'>
                <span className='fw_bold fs_35'>키워드</span>
                <div className='btn_wrap fw_500 fs_17'>
                    <button onClick={handleRegister}>등록</button>
                    <button>수정내역</button>
                    <button onClick={handleEdit}>수정</button>
                </div>
            </div>
            <div className='index_wrap'>
                <span className='fw_500 fs_24'>목차</span>
                <ol className='fs_17'>
                    <li>데이터들어올 항목1</li>
                    <li>데이터들어올 항목2</li>
                    <li>데이터들어올 항목3</li>
                </ol>
            </div>
            <div className='index_section_wrap'>
                <span className='fw_500 fs_24'>1. 키워드데이터</span>
                <div className='index_section'>블라블라 내용이 들어올 자리</div>
            </div>
            <div className='index_section_wrap'>
                <span className='fw_500 fs_24'>2. 키워드데이터</span>
                <div className='index_section'>블라블라 내용이 들어올 자리</div>
            </div>
            <div className='index_section_wrap'>
                <span className='fw_500 fs_24'>3. 키워드데이터</span>
                <div className='index_section'>블라블라 내용이 들어올 자리</div>
            </div>
        </div>
    );
};

export default MainSection;