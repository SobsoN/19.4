import uuid from "uuid";

export const ADD_COMMENT = "ADD_COMMENT",
    REMOVE_COMMENT = "REMOVE_COMMMENT",
    EDIT_COMMENT = "EDIT_COMMENT",
    THUMB_UP_COMMENT = "THUMB_UP_COMMENT",
    THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";
    
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

function thumbUp() {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4()
    }
}

function thumbDown () {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundremoveComment = id => dispatch(removeComment(id));
const boundEditComment = (text) => dispatch(editComment(text));
const boundThumbUpComment = () => dispatch(thumbUpComment());
const boundThumbDownComment = () => dispatch(thumbDownComment());
