import React, {Component} from 'react';
import Styles from './css/styles.css';


class QuestionBox extends Component {
    componentDidMount() {

    };


    render() {
        return (
            <div className={Styles.box}>

                <div className={Styles.data}>
                    <div>
                        <h1>Question {this.props.index}</h1>
                    </div>
                    <div><img alt={'wow'} src={this.props.image}/></div>
                    <div><h3>{this.props.title}</h3></div>
                    <div><p>{this.props.question}</p></div>
                    <input type={"text"} id="answer" onChange={this.props.onChange}/>
                    <button onClick={this.props.answer}>ANSWER</button>
                    <button onClick={this.props.skip} style={{color: "red"}}>SKIP</button>
                </div>

            </div>
        )
    }
}

export default QuestionBox;