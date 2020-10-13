import React from 'react';
import {Link}  from'react-router-dom'


const PostDetails = props => {

   const id = props.match.params.pId

    return (
        <div>
            <p>post {id} </p>
            <Link to={'/test'}> post lists</Link>
        </div>
    );
};

export default PostDetails;
