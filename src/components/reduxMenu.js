import React, {Component} from 'react';
import Styles from './css/styles.css';
import {Link} from "react-router-dom";

class ReduxMenu extends Component {
    componentDidMount() {

    };

    render() {
        return (
            <div className={Styles.menuBox}>

                <div className={Styles.data}>
                    <div>
                        <h1>Make a choice</h1>
                    </div>
                    <Link to='/problemlist'>
                        <button>Redux Test</button>
                    </Link>
                    <Link to='/blog'>
                        <button>Redux Blog</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default ReduxMenu;