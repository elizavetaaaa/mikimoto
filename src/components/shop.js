import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopData} from "../redux/reducer/store";

const Shop = () => {
    const dispatch = useDispatch();

    const shop_data = useSelector(state => state.store.data);
    useEffect(() => {
        dispatch(getShopData());
    });


    console.log(shop_data);
    return (
        <div className="shop-page">
            <img src="" alt=""/>
            <div className="shop-page__content">
                <div className="shop-page__content-half">
                    <h4 className="shop-page__title">730 Fifth Avenue <br/>
                        New York, NY 10019, United States</h4>
                    <div className="shop-page__btns-row">
                        <button className="shop-page__info-btn"> <a
                            href="https://www.google.com/maps/dir//730+5th+Ave,+New+York,+NY+10019,+%D0%A1%D0%A8%D0%90/@40.7628238,-73.9767858,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c258fa6735b54b:0xc8d9edfc333a7cfa!2m2!1d-73.9745971!2d40.7628238" target={'_blank'}>DIRECTIONS</a>
                        </button>
                        <button className="shop-page__info-btn"><a href="tel:+996544332111">TEL 646-791-3726</a>
                        </button>
                    </div>
                    <label htmlFor="open-time"><span>Open:</span></label>
                    <select name="open-time" id="open-time">
                        <option value="">Mon: 11:00 - 17:00</option>
                        <option value="">Tue: 11:00 - 17:00</option>
                        <option value="">Wed: 11:00 - 17:00</option>
                        <option value="">Thu: 11:00 - 17:00</option>
                        <option value="">Fri: 11:00 - 17:00</option>
                        <option value="">Sat: 11:00 - 17:00</option>
                    </select>

                    <p className="shop-page__desc">We invite you to visit our Mikimoto boutique. To place a jewelry
                        order or to schedule an appointment with a Mikimoto Ambassador, please call or use our.
                    </p>

                    <p className="shop-page__desc-extra">*Closed on November 26, December 25, January 1, 2022</p>

                </div>

                <div className="shop-page__content-half">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.965463087317!2d-73.97653918443697!3d40.76278434244362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fa65b46121%3A0x4b217b7bb91b3530!2sMikimoto!5e0!3m2!1sru!2skg!4v1641115868491!5m2!1sru!2skg"
                        style={{width: '600px', height: '480px', border: 'none'}} allowFullScreen="" loading="lazy">

                    </iframe>
                </div>
            </div>

            <div className="shop-page__extra-content">
                <div className="shop-page__extra-content-half">
                    <img src={require("../images/shops/one-shop.png")} alt="one-shop"/>
                </div>
                <div className="shop-page__extra-content-half">
                    <h4 className="shop-page__extra-title">Experience the elegance and luxury <br/> of Japan's finest
                        jewelry</h4>
                    <p className="shop-page__extra-subtitle">
                        With luxurious designs inspired by the sea that nurtures our pearls, the one and only boutique
                        reflects the aesthetics of Mikimoto's Japanese heritage. We look forward to welcoming you with
                        exquisite jewelry for an unparalleled experience of luxury.
                        With luxurious designs inspired by the sea that nurtures our pearls, the one and only boutique
                        reflects the aesthetics of Mikimoto's Japanese heritage. We look forward to welcoming you with
                        exquisite jewelry for an unparalleled experience of luxury.</p>
                </div>
            </div>


        </div>
    );
};

export default Shop;