import React from 'react';

const Result = ({ secretNum, term }) => {
    let result;

    if(term){


        if (term > secretNum) {
            result = 'Higher';
        } else if (term < secretNum) {
            result = 'Lower';
        } else if (term == secretNum) {
            result = 'Hey correct!';
        } else {
            result = 'Enter valid input';
        }


    }



    return (
        <h1>You Guessed: {result}</h1>
    );
};

export default Result;
