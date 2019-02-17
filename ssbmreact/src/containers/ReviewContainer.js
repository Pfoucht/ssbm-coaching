import React, { Component } from 'react';
import { connect } from 'react-redux';
import { publishReview } from '../store/actions/index';
import CreateReview from '../components/Review/Review';
import { fetchSingleGig } from '../store/actions/browse';
import Card from '../components/Browse/Card/Card';
import ReviewComplete from '../components/Review/ReviewComplete/ReviewComplete';

class ReviewContainer extends Component {

    state = {
        id: null,
        complete: false
    }

    componentDidMount(){
        window.scroll(0, 0);
        console.log(this.props);
        let id = this.props.match.params.id;
        this.setState({
            id: this.props.match.params.id
        })
        this.props.onFetchGig(id);
    }

    publishReviewHandler = (id, review, starRating) => {
        this.props.onPublishReview(id, review, starRating, this.props.token)
    }

    render(){
        let detailPost = null;
        if(this.props.detailPost){
            detailPost = (
                <Card el={this.props.detailPost}/>
            )
        }

        let post = (
                <CreateReview
                    id={this.state.id}
                    post={this.props.detailPost}
                    publishReview={this.publishReviewHandler}
            />
        );

        if(this.props.complete){
            post = (
                <ReviewComplete/>
            )
        }

        return (
            <div>
                {post}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state => {
        return {
            loading: state.review.loading,
            detailPost: state.browse.detailPost,
            token: state.auth.token,
            complete: state.review.complete
        }
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
        return {
            onPublishReview: (id, review, starRating, token) => dispatch(publishReview(id, review, starRating, token)),
            onFetchGig: (id) => dispatch(fetchSingleGig(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);