import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
        message: [
            "https://images.dog.ceo/breeds/hound-ibizan/n02091244_1000.jpg",
            "https://images.dog.ceo/breeds/hound-walker/n02089867_1381.jpg",
            "https://images.dog.ceo/breeds/hound-walker/n02089867_1416.jpg"
        ],
        status: "success",
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            console.log(state);
            return {
                ...state,
                message: {},
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                message: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                message: {},
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}