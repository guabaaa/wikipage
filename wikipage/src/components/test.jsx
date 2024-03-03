import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const WikiEdit = () => {
    const navigate = useNavigate();
    const { title: currentTitle } = useParams(); // 현재 게시글 제목
    const [text, setText] = useState(''); // 글 상태
    const [keyword, setKeyword] = useState(''); // 키워드 상태
    const [author, setAuthor] = useState(''); // 작성자 상태

    useEffect(() => {
        // 게시글 조회 함수
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://40.82.159.67:8080/post/${encodeURIComponent(currentTitle)}`);
                const data = response.data;
                // 조회한 게시글 데이터로 상태 업데이트
                setText(data.content);
                setKeyword(data.title);
                setAuthor(data.writerName);
            } catch (err) {
                console.error('Error fetching post data:', err);
                alert('게시글 조회에 실패했습니다.');
            }
        };

        fetchPost();
    }, [currentTitle]);

    // 입력 변경 핸들러, 수정 실행 함수, 버튼 활성화 로직은 이전과 동일...

    return (
        <div className='wiki_edit_wrap'>
            {/* UI 구성 요소 */}
        </div>
    );
};

export default WikiEdit;
