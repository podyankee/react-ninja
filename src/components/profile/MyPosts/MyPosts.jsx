import React from 'react';
import s from './MyPosts.module.sass';
import Post from './Post/Post';


const MyPosts = (props) => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likeCount: 3},
		{id: 2, message: 'It\'s my first post', likeCount: 0}
	];

	let postsElements = posts
				.map(post => <Post message={post.message} likeCount={post.likeCount} />);

	return (

				<div className={s.postsBlock}>
					<h3>My posts</h3>
					<div>
						<div>
							<textarea></textarea>
						</div>
						<div>
							<button>Add post</button>
						</div>
					</div>
					<div className={s.posts}>
						{postsElements}
					</div>
				</div>
	);
}

export default MyPosts;
