import tim1 from "../imgs/tim.jpg";
import tim from "../imgs/tim.png";
import developer from "../imgs/developer.jpg";
import react from "../imgs/react.png";
import redux from "../imgs/redux.png";
import programmer from "../imgs/programmer.jpg";
import backend from "../imgs/backend.jpg";
import girl from "../imgs/girl.jpg";
import gandalf from "../imgs/gandalf.jpg";
import nature from "../imgs/nature.jpg";
import panther from "../imgs/panther.jpg";
import bird from "../imgs/bird.jpg";
import pig from "../imgs/pig.jpg";

export const dataSource = {
    answers: [
        {answerID: 'question_1', answer: 'action'},
        {answerID: 'question_2', answer: 'Provider'},
        {answerID: 'question_3', answer: 'payload'},
        {answerID: 'question_4', answer: 'redux'},
        {answerID: 'question_5', answer: 'string'},
        {answerID: 'question_6', answer: 'dispatch'},
        {answerID: 'question_7', answer: 'props'},
        {answerID: 'question_8', answer: 'connect'},
        {answerID: 'question_9', answer: 'one'},
        {answerID: 'question_10', answer: 'yes'},
    ],
    blog: [
        {
            title : 'Bird',
            comment : 'i am a bird and i will fly with redux action creator',
            image : bird,
        },
        {
            title : 'Panther',
            comment : 'i am panther and i will jump with redux action creator ',
            image : panther,
        },
        {
            title : 'Pig',
            comment : 'i am pig and i will be Burger with redux action creator ',
            image : pig,
        },
    ],
    data: [
        {
            title: 'REDUCER',
            question: 'what is the second params do you use in the Reducer function ?',
            image: tim
        },
        {
            title: 'STORE',
            question: 'which component is importerd to use store in your code ? ',
            image: tim1
        },
        {
            title: 'CALL ACTION',
            question: 'an action have two values , Type and ? ',
            image: developer
        },
        {
            title: 'REDUX ON WAY ! ',
            question: 'which library is importerd to use createStore? ',
            image: react
        },
        {
            title: 'ACTIONS ! ',
            question: 'what is the data type of the action type ?',
            image: redux
        },
        {
            title: 'CALL HEM !',
            question: 'with witch command props are allowed to call an action creator ? ',
            image: programmer
        },
        {
            title: 'WHERE !',
            question: 'in witch atribute saves a react component the reducer state data ?',
            image: backend
        },
        {
            title: 'SHE IS CONNECTED !',
            question: 'witch command allowed a component to connect with store reducers ? ',
            image: girl
        },
        {
            title: 'SHOPPING !',
            question: 'how many stores are allowed in redux ? ',
            image: gandalf
        },
        {
            title: 'VACATION !',
            question: 'do you like Redux ?',
            image: nature
        }
    ]
};
