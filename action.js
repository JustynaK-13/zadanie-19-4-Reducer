import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text) {
	return {
		type: EDIT_COMMENT,
		id: 20,
		text: 'edycja komentarza'
	}
}

function removeComment(text) {
	return {
		type: REMOVE_COMMENT,
		id: 20,
		text: 'usunięcie komentarza'
	}
}

function thumbUpComment(text) {
	return {
		type: THUMB_UP_COMMENT,
		id: 20,
		text: 'jest ok'
	}
}

function thumbDownComment(text) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: 20,
		text: 'nie jest ok'
	}
}