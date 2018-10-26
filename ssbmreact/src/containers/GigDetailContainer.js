import React, { Component } from 'react';
import GigDetail from '../components/GigDetail/GigDetail';
import { fetchSingleGig, fetchGigs } from '../store/actions/browse';
import { connect } from 'react-redux';

class GigDetailContainer extends Component {
    
    state = {
        id: null
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.props.onFetchSinglePost(this.props.match.params.id);
        this.props.onFetchPosts();
    }

    goBackHandler = () => {
        console.log(this.props.history.goBack());
    }

    render(){
        return (
            <GigDetail post={this.props.post} goBack={this.goBackHandler} otherPosts={this.props.otherPosts}/>
        );
    }
}

const mapStateToProps = state => {
    return state => {
        return {
            post: state.browse.detailPost,
            otherPosts: state.browse.posts ? state.browse.posts.slice(0, 4) : null
        }
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
        return {
            onFetchSinglePost: (id) => dispatch(fetchSingleGig(id)),
            onFetchPosts: () => dispatch(fetchGigs())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigDetailContainer);