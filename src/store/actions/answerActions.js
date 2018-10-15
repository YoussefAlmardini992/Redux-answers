export const createAnswer = (answer) => {
    return {
        type: 'CREATE_ANSWER',
        payload: answer
    }
};
export const storeData = data => {
    return {
        type: 'STORE_DATA',
        payload: {
            data
        },
    }
};
export const addPoint = data => {
    return {
        type: 'ADD_POINT',
        payload : data,
    }
};
