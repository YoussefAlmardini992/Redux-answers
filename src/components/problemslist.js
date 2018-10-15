import React, {Component} from 'react';
import QuestionBox from "./box";
import {createAnswer} from '../store/actions/answerActions.js';
import Styles from './css/styles.css';
import {connect} from 'react-redux'
import {dataSource} from '../data/data.js';
import {storeData, addPoint} from "../store/actions/answerActions";


class ProblemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            correct: false,
            points: 0,
            data: {
                title: '',
                question: '',
                image: null,
            },
            dataLoader: 0,
        };
    }

    defaultProps = {
        dataFromFetch: [],
    };

    async componentDidMount() {
        try {
            this.props.dispatch(storeData(dataSource.answers));
            this.props.dispatch(storeData(dataSource.data));
            this.setState({
                data: dataSource.data[this.state.dataLoader],
                dataLoader: this.state.dataLoader + 1,
            })

        } catch (e) {
            console.log('ERROR adding store data componentDidmount', e)
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSolve = () => {
        const correctAnswers = this.props.stateData.answers.data;
        for (const item in correctAnswers) {
            if (this.state.answer === correctAnswers[item]['answer']) {
                this.setState({correct: true, points: this.state.points + 100});
                this.props.dispatch(addPoint(this.state.points));
                const {dispatch} = this.props;
                this.loadNextQuestion();
                return dispatch(createAnswer(this.state.answer));
            }
        }
    };

    loadNextQuestion() {
        this.setState(
            {
                data: dataSource.data[this.state.dataLoader],
                dataLoader: this.state.dataLoader + 1,
            })// vraag tim (make text input leeg)
    }

    skip = () => {
        this.setState(
            {data: dataSource.data[this.state.dataLoader], dataLoader: this.state.dataLoader + 1,}
        );
        console.log(this.props);
    };

    componentWillUpdate(nextProps, nextState) {
        if (nextState.correct) {
            console.log(this.props);
        }
    }

    render() {
        return (
            <div>
                <div className={Styles.header}>
                    <h1>Solve Problems</h1>
                </div>
                <div className={Styles.score}>
                    <p>Score</p> <br/> {this.state.points}
                </div>
                <div>
                    <QuestionBox
                        index={this.state.dataLoader}
                        question={this.state.data.question}
                        image={this.state.data.image}
                        title={this.state.data.title}
                        answer={this.handleSolve}
                        onChange={this.handleChange}
                        skip={this.skip}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateData: state,
    }
};
export default connect(mapStateToProps, null)(ProblemsList);