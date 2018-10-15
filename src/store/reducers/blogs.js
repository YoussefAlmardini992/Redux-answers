const initState = {
    blogs : [] ,
};
const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_BLOGS':
            return {
                ...state,
                blogs: [...state.blogs, ...action.payload.data]
            };
        case 'FLY_BIRD':
            return 0;
        default:
            return state;
    }
};
export default blogReducer;