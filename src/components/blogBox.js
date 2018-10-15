import React, {Component} from 'react';
import Styles from './css/styles.css';

class BlogBox extends Component {
    componentDidMount() {

    };

    render() {
        return (
            <div className={Styles.BlogBox}>

                <div className={Styles.dataBox}>
                    <div><img alt={'wow'} src={this.props.image}/></div>
                    <button onClick={this.props.click}>ACTION</button>
                    <div style={{marginLeft :10}}>
                        <div style={{textAlign :'left'}}>{this.props.title} </div>
                        <div>{this.props.comment}</div>
                    </div>
                </div>


            </div>
        )
    }
};

export default BlogBox;