import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";

const Collection = ({src, id}) => {
    return (
        <div className="collection">
            <div className="collection__top">

                <div className="collection__content-half">
                    <h3 className="collection__title">Ear Cuffs</h3>
                </div>
                <div className="collection__content-half">
                    <p className="collection__subtitle">
                        An ear cuff is the perfect way to add some sparkle to your look <br/>without having to pierce
                        your
                        ears. Pair it with other earrings to <br/> create a stunning impression.
                    </p>
                </div>
            </div>

            <div className="collection__bottom">
                <div className="collection__product">
                    <h1>{id}</h1>
                    <img className="collection__img"
                         src={src}
                         alt="earing"/>
                    <button className='collection__like-empty'>
                        <AiOutlineHeart style={{width: '30px', height: '30px',}}/>
                    </button>


                </div>
                <div className="collection__product">
                    <img className="collection__img"
                         src="https://rukminim1.flixcart.com/image/800/960/jzhb24w0/earring/w/j/z/round-golden-stylish-earing-1-meghu-s-original-imafjhubdhfnhubf.jpeg?q=50"
                         alt="earing"/>
                    <button className='collection__like-empty'>
                        <AiOutlineHeart style={{width: '30px', height: '30px',}}/>
                    </button>
                </div>
                <div className="collection__product">
                    <img className="collection__img"
                         src="https://rukminim1.flixcart.com/image/800/960/jzhb24w0/earring/w/j/z/round-golden-stylish-earing-1-meghu-s-original-imafjhubdhfnhubf.jpeg?q=50"
                         alt="earing"/>
                    <button className='collection__like-empty'>
                        <AiOutlineHeart style={{width: '30px', height: '30px',}}/>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default Collection;