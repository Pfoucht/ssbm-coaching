export default (state = {navOpen: true}, action) => {
    switch (action.type) {
        case 'NAV_CHANGE':
            return { 
                navOpen: !state.navOpen
            }
        default: 
            return state
    }
}