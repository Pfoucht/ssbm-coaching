import { SEND_INBOX_MESSAGE_SUCCESS, SEND_INBOX_MESSAGE_FAIL } from "./actionTypes";






const sendInboxMessageSuccess = (message) => {
    return {
        type: SEND_INBOX_MESSAGE_SUCCESS,
        message: message
    }
}

const sendInboxMessageFail = (err) => {
    return {
        type: SEND_INBOX_MESSAGE_FAIL
    }
}