import React, { Component } from 'react'
import Browse from '../components/Browse/Browse';
import { connect } from 'react-redux';
import { fetchGigs } from '../store/actions/browse';

class BrowseContainer extends Component{
    

    componentDidMount(){
        console.log(this.props);
        let searchQuery = this.props.match.query;
        this.props.onFetchPosts(1);
    }


    render(){
        return (
            <Browse loading={this.props.loading} posts={this.props.posts} fetchPosts={this.props.onFetchPosts} page={this.props.page}/>
        )
    }
}

const mapStateToProps = state => {
    return state => {
        return {
            posts: state.browse.posts,
            loading: state.browse.loading,
            page: state.browse.page
        }
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
            return {
                onFetchPosts: (page) => dispatch(fetchGigs(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);