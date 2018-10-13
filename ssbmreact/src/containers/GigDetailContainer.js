import React, { Component } from 'react';
import GigDetail from '../components/GigDetail/GigDetail';
import { fetchSingleGig } from '../store/actions/browse';
import { connect } from 'react-redux';

class GigDetailContainer extends Component {
    
    state = {
        id: null
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.props.onFetchSinglePost(this.props.match.params.id);
    }

    goBackHandler = () => {
        console.log(this.props.history.goBack());
    }

    render(){
        return (
            <GigDetail post={this.props.post} goBack={this.goBackHandler}/>
        );
    }
}

const mapStateToProps = state => {
    return state => {
        return {
            post: state.browse.detailPost
        }
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
        return {
            onFetchSinglePost: (id) => dispatch(fetchSingleGig(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigDetailContainer);