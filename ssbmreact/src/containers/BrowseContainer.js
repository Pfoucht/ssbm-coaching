import React, { Component } from 'react'
import Browse from '../components/Browse/Browse';
import { connect } from 'react-redux';
import { fetchGigs } from '../store/actions/browse';

class BrowseContainer extends Component{

    componentDidMount(){
        this.props.onFetchPosts();
    }


    render(){
        return (
            <Browse posts={this.props.posts}/>
        )
    }
}

const mapStateToProps = state => {
    return state => {
        return {
            posts: state.browse.posts,
            loading: state.browse.loading
        }
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
            return {
                onFetchPosts: () => dispatch(fetchGigs())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);