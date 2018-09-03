export const navAction = () => dispatch => {
    dispatch({
        type: "NAV_CHANGE",
        payload: true
    })
}