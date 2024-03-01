import React, {useState} from 'react';
import ReactMarkdown from "react-markdown";

const WikiEdit = () => {
    const [text, setText] = useState(''); // 글 상태
    const [keyword, setKeyword] = useState(''); // 키워드 상태
    const [author, setAuthor] = useState(''); // 작성자 상태

    /** 제목,작성자,내용 동작 함수 */
    const handleChangeText = (e) => {
        setText(e.target.value);
    };

    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value);
    };

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    };

    /** 모든 필드가 채워져 있을 때만 버튼을 활성화 */
    const isButtonEnabled = text.length > 0 && keyword.length > 0 && author.length > 0;

    return (
        <div className='wiki_edit_wrap'>
            <h3 className='fw_bold fs_24 check_header'>키워드 등록하기</h3>
            <div className='edit_section_wrap'>
                    <div className='fw_500 fs_17'>키워드</div>
                <div className='keyword_edit'>
                    <input type='text' value={keyword} onChange={handleChangeKeyword} />
                </div>
                <div className='writer_edit'>
                    <div className='fw_500 fs_17'>작성자</div>
                    <input type='text' value={author} onChange={handleChangeAuthor} />
                </div>
                <textarea
                    className='wiki_text_wrap'
                    value={text}
                    onChange={handleChangeText}
                    style={{resize: 'none', width: '90%', height:'750px', padding: '15px', marginBottom: '30px'}}
                    placeholder='여기에 마크다운 형식으로 글을 작성하세요...'
                />
                <div className='preview_wrap'>
                    <h3 className='fw_bold fs_24 check_header'>미리보기</h3>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
            <div className='btn_wrap'>
                <button className='fs_15 fw_bold' disabled={!isButtonEnabled} style={isButtonEnabled ? {backgroundColor: 'var(--blue)', color: 'var(--gray)'} : {}}>수정</button>
            </div>
        </div>
    );
};

export default WikiEdit;