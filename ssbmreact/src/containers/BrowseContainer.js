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
<<<<<<< HEAD
            <Browse nextPage={this.props.onNextPage} prevPage={this.props.onPrevPage} count={this.props.count} posts={this.props.posts} fetchPosts={this.props.onFetchPosts} page={this.props.page}/>
=======
            <Browse loading={this.props.loading} posts={this.props.posts} fetchPosts={this.props.onFetchPosts} page={this.props.page}/>
>>>>>>> 3e4160ba93012125ec9036a81e4b097d23c202b4
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