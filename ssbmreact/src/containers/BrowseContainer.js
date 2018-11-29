import React, { Component } from 'react'
import Browse from '../components/Browse/Browse';
import { connect } from 'react-redux';
import { fetchGigs, prevPage, nextPage } from '../store/actions/browse';

class BrowseContainer extends Component{
    

    componentDidMount(){
        console.log(this.props);
        let searchQuery = this.props.match.query;
        this.props.onFetchPosts(1);
    }


    render(){
        return (
            <Browse nextPage={this.props.onNextPage} prevPage={this.props.onPrevPage} count={this.props.count} posts={this.props.posts} fetchPosts={this.props.onFetchPosts} page={this.props.page}/>
        )
    }
}

const mapStateToProps = state => {
    return state => {
        return {
            posts: state.browse.posts,
            loading: state.browse.loading,
            page: state.browse.page,
            count: state.browse.count
        }
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
            return {
                onFetchPosts: (page) => dispatch(fetchGigs(page)),
                onPrevPage: () => dispatch(prevPage()),
                onNextPage: () => dispatch(nextPage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);