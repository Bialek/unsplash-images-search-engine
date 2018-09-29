export const currentCategory = (state = '', action) => { 
    switch (action.type) {
        case 'CURRENT_CATEGORY':
            return action.category
        default:
            return state
    }
}
