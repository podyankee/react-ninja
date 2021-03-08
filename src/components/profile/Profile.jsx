import React from 'react';
import s from './Profile.module.sass';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
	return (
		<div>
				<div className={s.image}>
					<img src="https://images.unsplash.com/photo-1517042271736-ddacb7a2263a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
				</div>
				<div>
					ava + description
				</div>
				<MyPosts />
			</div>
	);
}

export default Profile;
