import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getDog, fetchFail } from '../actions';


const Dog = (props) => {
    const { message, isFetching, error, getDog, fetchFail } = props;

    useEffect(() => {
        props.getDog();
    }, []);

    if (error) {
        return <h2>There is an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>I am working on getting your dog pictures for you</h2>;
    }

    const handleClick = () => {
        props.getDog();
    };

    return (
        <>
            <div className="friends-list">
                <h2>Here are your cool random dog pictures!</h2>
                <img src={message[0]} />
                <img src={message[1]} />
                <img src={message[2]} />
            </div>
            <button onClick={handleClick}>Get more dog pictures</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        message: state.message,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getDog, fetchFail })(Dog);