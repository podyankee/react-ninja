import React from 'react';
import s from './Post.module.sass';


const Post = (props) => {
	return (
			<div className={s.item}>
				{ props.message }
				<div>
					<span>{ props.likeCount }</span>
				</div>
			</div>

	);
}

export default Post;
