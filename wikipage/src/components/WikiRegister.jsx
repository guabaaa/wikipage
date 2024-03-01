import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'

const WikiRegister = () => {
    const [text, setText] = useState(''); // 글 상태

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className='wiki_register_wrap'>
            <h3 className='fw_bold fs_24'>키워드 등록하기</h3>
            <div className='keyword_register'>
                <div>키워드</div>
                <input type='text' />
            </div>
            <div className='writer_register'>
                <div>작성자</div>
                <input type='text' />
            </div>
            <textarea
                className='wiki_text_wrap'
                value={text}
                onChange={handleChange}
                style={{width: '800px', height:'600px'}}
                placeholder='여기에 마크다운 형식으로 글을 작성하세요...'
            />
            <div className='preview_wrap'>
                <h3 className='fw_bold fs_24'>미리보기</h3>
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
};

export default WikiRegister;