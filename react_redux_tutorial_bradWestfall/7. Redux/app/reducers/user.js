var userInitialState = {
    users: []
};

export default function(state = userInitialState, action) {
    switch(action.type) {
        
        case 'GET_USERS':

            var newState = Object.assign({}, state)
            newState.users = action.users;
            return newState;

        default:
            return state;
            
    }
}