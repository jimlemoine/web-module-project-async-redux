import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getDog = () => {
    return (dispatch => {
        dispatch(fetchStart());
        axios.get("https://dog.ceo/api/breed/hound/images/random/3")
            .then(resp => {
                console.log(resp.data);
                dispatch(fetchSuccess(resp.data));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            })
    })
}

export const fetchStart = ()=> {
    return ({type:FETCH_START});
}

export const fetchSuccess = (picsObj)=> {
    return ({type:FETCH_SUCCESS, payload:picsObj.message});
}

export const fetchFail = (error)=> {
    return ({type:FETCH_FAIL, payload:error});
}