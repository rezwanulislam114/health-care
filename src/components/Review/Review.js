import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Review.css'
import reviewBg from '../../images/about/review.png'

const Review = () => {

    // data for reviews 
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/allData.json')
            .then(res => res.json())
            .then(data => setReviews(data.review));
    }, [])

    // const { name, img, designation, says } = props.review

    return (
        <Carousel variant="dark" className="m-2">
            {
                reviews.map(review => <Carousel.Item key={review.id}>
                    <img
                        className="d-block w-100"
                        src={reviewBg}
                        alt="First slide"
                    />
                    <Carousel.Caption className="review">
                        <p className="text-start">{review.says}</p>
                        <div className="text-start">
                            <img src={review.img} alt="" />
                            <div>
                                <h3>{review.name}</h3>
                                <p>{review.designation}</p>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Review;