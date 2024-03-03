import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { marked } from 'marked';

const MainSection = () => {
    const navigate = useNavigate();
    const { title } = useParams(); // URL 파라미터에서 title 추출
    const [post, setPost] = useState({ title: '', content: '',writerName:'', createdDate:'' }); // 게시글 데이터 상태
    const [sections, setSections] = useState([]); // 섹션 데이터 상태
    const [history, setHistory] = useState([]) // 수정내역 상태
    const [showHistoryModal, setShowHistoryModal] = useState(false) // 수정내역 모달

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const encodedTitle = encodeURIComponent(title);
                const res = await axios.get(`http://40.82.159.67:8080/post/${encodedTitle}`);
                setPost({ ...res.data }); // 응답 데이터를 post 상태에 저장
                const parsedSections = parseMarkdownSections(res.data.content);
                setSections(parsedSections);
            } catch (err) {
                console.error('error fetching post data:', err);
            }
        };

        if (title) {
            fetchPost();
        }
    }, [title]);

    /** 마크다운 콘텐츠에서 섹션을 파싱하는 함수 */
    const parseMarkdownSections = (markdown) => {
        const lines = markdown.split('\n');
        const sections = [];
        let currentSection = { title: '', content: ''};

        lines.forEach(line => {
            if (line.startsWith('### ')) {
                if (currentSection.title || currentSection.content) {
                    sections.push(currentSection);
                }
                currentSection = { title: line.substring(4), content: '' }; // "### " 제거
            } else {
                currentSection.content += line + '\n';
            }
        });

        if (currentSection.title || currentSection.content) {
            sections.push(currentSection);
        }

        return sections;
    };

    /** 수정 내역 조회 함수 */
    const fetchHistory = async () => {
        try {
            const encodedTitle = encodeURIComponent(title);
            const res = await axios.get(`http://40.82.159.67:8080/post/history/${encodedTitle}`);
            setHistory(res.data);
            setShowHistoryModal(true);
            // 모달이 열리면 배경 스크롤 비활성화
            document.body.style.overflow = 'hidden';
        } catch (err) {
            console.error(err);
        }
    }

// 모달 닫기 함수
    const closeModal = () => {
        setShowHistoryModal(false);
        // 모달이 닫히면 배경 스크롤 다시 활성화
        document.body.style.overflow = 'auto';
    };

    /** 게시글 삭제 함수 */
    const handleDelete = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            try {
                await axios.delete(`http://40.82.159.67:8080/post/${encodeURIComponent(title)}`);
                alert("게시글이 삭제되었습니다.");
                // 메인 페이지로 리디렉션
                navigate('/', { replace: true });
                // 페이지 새로고침
                window.location.reload();
            } catch (err) {
                console.error('Failed to delete the post', err);
                alert("게시글 삭제에 실패했습니다.");
            }
        }
    };

    /** 리스트 누르면, 해당 내용으로 스크롤 이동 */
    const scrollToSection = (index) => {
        const element = document.getElementById(`section-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 등록페이지 이동
    const handleRegister = ()=> {
        navigate('/register')
    }

    // 해당 키워드 수정페이지 이동
    const handleEdit = () => {
        navigate(`/edit/${title}`)
    }

    return (
        <div className='main_section_wrap'>
            <div className='section_keyword_wrap'>
                <span className='fw_bold fs_35'>{post.title}</span>
                <div className='btn_wrap fw_500 fs_17'>
                    <button onClick={handleRegister}>등록</button>
                    <button onClick={fetchHistory}>수정내역</button>
                    <button onClick={handleEdit}>수정</button>
                    <button onClick={handleDelete}>삭제</button>
                </div>
            </div>
            <div className='writer_wrap fw_500 fs_20'>{post.writerName}</div>
            <div className='index_wrap'>
                <span className='fw_500 fs_24'>목차</span>
                <ol className='fs_17'>
                    {sections.map((section, index) => (
                        <li key={index} onClick={() => scrollToSection(index)}>
                            {section.title}
                        </li>
                    ))}
                </ol>
            </div>
            {sections.map((section, index) => (
                <div className='index_section_wrap'>
                    <span className='fw_500 fs_24'>{index+1}.{section.title}</span>
                    <div className='index_section' dangerouslySetInnerHTML={{ __html: marked(section.content) }}></div>
                </div>
            ))}
            {/* 수정 내역 모달 */}
            {showHistoryModal && (
                <div className="history_modal">
                    <div className='history_modal_header'>
                        <h3 className='check_header fw_bold fs_17'>수정 내역</h3>
                        <div onClick={closeModal} style={{cursor:'pointer'}}>❌</div>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>수정일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {history.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.writerName}</td>
                                <td>{new Date(item.createdDate).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MainSection;