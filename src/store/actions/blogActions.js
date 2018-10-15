export const fetchBlogs = data => {
    return {
        type: 'FETCH_BLOG',
        payload : {
            data
        },
    }
};
export const flyBird = data =>{
    return {
        type : 'FLY_BIRD',
        payload: data
    }
};