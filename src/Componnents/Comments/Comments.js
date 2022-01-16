import React, {useState} from 'react';
import Comment from "../Comment/Comment";
const Comments = () => {
    let [comments, setComments] = useState([])
    useState(
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value =>
                setComments(value)
            )
    );

    return (
        <div>
            <ol>
                { comments.map(value => <li key={value.id}><Comment item = {value}/></li>)
                }
            </ol>
        </div>
    );
};

export default Comments;