import React, { Component } from 'react'
import Browse from '../components/Browse/Browse';
import { connect } from 'react-redux';
import { fetchGigs, prevPage, nextPage, sortByGame, sortGigsByFilters, searchForGigs } from '../store/actions/browse';
import Search from '../components/Search/Search';

class SearchContainer extends Component{
    

    componentDidMount(){
        console.log(this.props);
        let searchQuery = this.props.match.params.search;
        this.props.onSearchForGames(searchQuery);
    }

    componentDidUpdate(prevProps){
        console.log(prevProps);
        console.log(this.props);
        // let oldPage = prevProps.params;

        if(this.props.location.search !== prevProps.location.search){
            const search = this.props.location.search;
            const params = new URLSearchParams(search);
            const query = parseInt(params.get('page'));
            console.log(query); 
            alert(query);
            this.props.onFetchPosts(query);
        }
    }


    render(){
        return (
            <Search 
                sortByFilters={this.props.onSortByFilters}
                sortByGame={this.props.onSortByGame} 
                loading={this.props.loading} 
                nextPage={this.props.onNextPage} 
                prevPage={this.props.onPrevPage} 
                count={this.props.count} 
                posts={this.props.posts} 
                fetchPosts={this.props.onFetchPosts} 
                page={this.props.page}/>
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
                onNextPage: () => dispatch(nextPage()),
                onSortByGame: (game) => dispatch( sortByGame(game)), 
                onSortByFilters: (filters) => dispatch(sortGigsByFilters(filters)),
                onSearchForGames: (search) => dispatch(searchForGigs(search))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer); 