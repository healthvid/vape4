import React, { useState} from "react";
import CommentListItem from './commentListItem';
import './style.css';
import {commentsList} from './constants';
import defaultUser from './Videos/user.png';

const Comments = () => {
    const [newComment, setNewComment] = useState('');
    const [commentli, setCommentli] = useState(commentsList);
    const [commentlength, setCommentLength] = useState(commentli.length);

    const addComment = async ()=> {
        const newContent = newComment;
        if (newContent !== ''){
            let tempList = [...commentli];
            tempList.unshift({
                userName: 'new user',
                time:'just now',
                comments: newContent,
                avatar:-1,
            })
            await setCommentli(tempList);
            await setCommentLength(commentli.length);
            await setNewComment('');
        } else return;
    }
    const cancelComment = async () => {
        await setNewComment('');
    }

    return (
        <>
        {/* Display other users comments */}
        <ul className="list-group">
            <div className='commentsFirst me-3 mb-2'>{commentlength} Comments</div> 
            {/* Add new comments */}
            <div className="d-flex flex-row ps-1 me-1">
                <div className=" align-self-start ps-1 me-0"
                id='commentIcon'>
                    <img
                        alt={`avatar`}
                        src={defaultUser}
                        width="48px"
                        className="rounded-circle float-start"
                    />
                </div>
                <div className="flex-fill ps-2 text-input">
                    <div className="overflow-scroll ">
                        <textarea
                        placeholder="Add a comment"
                        className="border-1 border-secondary text-secondary form-control mb-2 pe-2"
                        value={newComment}
                        id="floatingTextarea"
                        onChange={(event) => setNewComment(event.target.value)}
                        ></textarea>
                    
                    </div>
        
                    <div className="float-end d-flex justify-content-end mb-1">
                        <button
                            onClick={cancelComment}
                            className=" btn btn-sm form-control pe-6 btnCancel"
                            type="button"
                            id='btnCancel'
                        >
                            CANCEL
                        </button>

                        <button
                            onClick={addComment}
                            className="btn btn-sm form-control btnSubmit"
                            type="button"
                            id='btnSubmit'
                        >
                            COMMENT
                        </button>
                    </div>
                </div>

            </div>
            {commentli.map((commentItem, key) => {
                return <CommentListItem key={key} comment={commentItem} index={key} total={commentli.length}/>;
            })}
        </ul>
        </>
    )

};
export default Comments;