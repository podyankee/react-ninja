import React from 'react';

import s from './Dialog.module.sass';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';



const Dialogs = (props) => {

	let dialogs = [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'},
		{id: 5, name: 'Victor'},
		{id: 6, name: 'Valera'}
	];

	let messages = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hello'},
		{id: 3, message: 'Yo'},
		{id: 4, message: 'Yo'},
		{id: 5, message: 'Yo'}
	];

	let dialogsElements = dialogs
				.map(dialog => <DialogItem name={dialog.name} id = {dialog.id}/>);

	let messagesElements = messages
				.map(message => <Message message = {message.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>

	)
}

export default Dialogs;