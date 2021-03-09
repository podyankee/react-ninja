import React from 'react';
// import s from './Profile.module.sass';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
	return (
		<div>
				<ProfileInfo />
				<MyPosts />
			</div>
	);
}

export default Profile;
