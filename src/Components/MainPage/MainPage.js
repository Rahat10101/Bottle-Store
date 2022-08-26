import React from 'react';
import './MainPage.css';
import img from './Bottle.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';


const MainPage = () => {
    const [reviews, setReviews] = useReviews(3);
    return (
        <div>
            <section className='main-content'>
            <div className='main-cont-text'>
                <h1><span className='color-text'>Bo</span>ttle <span className='color-text'>S</span>tore</h1>
                <articl className='article'>আমাদের শরীরের ৭০ ভাগই পানি , এজনেয় পানি পান করা অনেক গুরুত্বপুর্ন । 
                <br /> আপনি যেই হন না কেন আপনার পানি পান করতেই হবে । 
                <br />এবং, সেই পানি পান করা কিঙবা বহনের জন্যে আপনার চাই একটি সুন্দর বোতল ।  
                <br />তাই , শুধু মাত্র আপনার জন্যেই উন্নত্যমান সম্পন্ন বোতল আমরা নিয়ে এসেছি । </articl>
            </div>
            <div className='main-cont-img'>
                <img src={img} alt="" />
            </div>
            </section>

            {/* customar reviews */}

            <section className='reviews'>
                <h1 className='reviews-text'>Customar Reviews <FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon> ({reviews.length})</h1>
                <div className='review-container'>
                    {
                    reviews.map(review => <Review
                        key={review._id}
                        review = {review}
                    ></Review>)
                    }
                </div>
                <div className='link-see-all'>
                <Link to='/reviews'>See All Reviews<FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon></Link>
                </div>
            </section>
        </div>
    );
};

export default MainPage;