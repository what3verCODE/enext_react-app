import React, {useState} from 'react'
import * as a from "antd";
import * as i from '@ant-design/icons';

function CommentEditor(props: IProps) {
    const [commentText, setCommentText] = useState('');

    return <a.Comment
        avatar={<a.Avatar
            icon={<i.UserOutlined />}
            size={32}
        />}
        content={
            <>
                <a.Form.Item initialValue={commentText}>
                    <a.Input.TextArea rows={4} onChange={(e) => setCommentText(e.target.value)}/>
                </a.Form.Item>
                <a.Form.Item>
                    <a.Button type="primary" onClick={() => props.createComment(commentText)}>
                        Add Comment
                    </a.Button>
                </a.Form.Item>
            </>
        }
    />
}

interface IProps {
    createComment(text: string): void;
}

export default CommentEditor
