let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likeCount: 3},
			{id: 2, message: 'It\'s my first post', likeCount: 0}
		]
	},
	messagesPage: {
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'Hello'},
			{id: 3, message: 'Yo'},
			{id: 4, message: 'Yo'},
			{id: 5, message: 'Yo'}
		],
		dialogs: [
			{id: 1, name: 'Dimych'},
			{id: 2, name: 'Andrey'},
			{id: 3, name: 'Sveta'},
			{id: 4, name: 'Sasha'},
			{id: 5, name: 'Victor'},
			{id: 6, name: 'Valera'}
		]
	}

}

export default state;