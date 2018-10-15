const initState = {
    data : [] ,
    answers: [],
    points : [],
};
const answersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'STORE_DATA':
            return {
                ...state,
                data: [...state.data, ...action.payload.data]
            };
        case 'CREATE_ANSWER':
            return {
                ...state,
                answers : [...state.answers, action.payload],
            };
        case 'ADD_POINT':
            return {
                ...state,
                points: [...state.points, action.payload],
            };
        default:
            return state;
    }
};
export default answersReducer;