import React, {Component} from 'react';
import {connect} from 'react-redux';
import {latestNews} from '../actions';
import {bindActionCreators} from 'redux';

//component
import LatestNews from '../components/Home/Latest'


class Home extends  Component{

    componentDidMount(){
        this.props.latestNews()
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}
    


export default connect(mapStateToProps, mapDispatchToProps)(Home )