import React from 'react';
import s from './MyPosts.module.sass';
import Post from './Post/Post';


const MyPosts = () => {
	return (

				<div>
					My posts
					<div>
						New posts
					</div>
					<div className={s.posts}>
						<Post message='Hi, how are you?' likeCount='3' />
						<Post message="It's my first post" likeCount='0' />
					</div>
				</div>
	);
}

export default MyPosts;
