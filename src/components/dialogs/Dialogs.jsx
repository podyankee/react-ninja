import React from 'react';

import s from './Dialog.module.sass';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';



const Dialogs = (props) => {
	debugger;

	let dialogsElements = props.dialogs
				.map(dialog => <DialogItem name={dialog.name} id = {dialog.id}/>);

	let messagesElements = props.messages
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