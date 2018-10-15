import React , { Component } from 'react';
import Styles from "./css/styles.css";
import BlogBox from "./blogBox";
import  { connect }  from 'react-redux';
import {dataSource} from "../data/data";
import {fetchBlogs , flyBird} from "../store/actions/blogActions";
class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            reaction : {
                title : '',
                comment : '',
                image : '',
                click : null
            }
        }
    }
    componentDidMount(){
            this.props.dispatch(fetchBlogs(dataSource.blog));
            console.log(this.props);
    }
    componentWillUpdate(){
        console.log(this.props);
    }
    handleClick(caller){
       switch ((caller)) {
           case "Bird":
               console.log(this.props);
               break;
       }


    };
    render(){
        return (
            <div>
                <div className={Styles.header}>
                    <h1>Blog</h1>
                </div>
                {
                    dataSource.blog.map(item =>
                        <BlogBox
                            title={item.title}
                            comment={item.comment}
                            image={item.image}
                            click = {() => this.handleClick(item.title)}
                        />
                    )
                }
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        stateData: state,
    }
};
export default connect(mapStateToProps , null)(Blog);