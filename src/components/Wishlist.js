import React from 'react';
import {changeActive} from "../redux/reducer/store";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai";


const Login = () => {
    const dispatch = useDispatch();
    const activeProduct = useSelector(state => state.store.activeProduct);
    return (
        <div className="wishlist">
            <div className="container">
                <h4 className="wishlist__empty-title" style={{display : activeProduct ? 'none' : 'block'}}>Your wish list is empty</h4>
                <div className="wishlist__product" style={{display : activeProduct ? 'block' : 'none'}}>
                    <h4 className="wishlist__title"> Akoya Cultured Pearl and Diamond Ring</h4>
                    <h5 className="wishlist__price">150 $</h5>
                    <img className="collection__img"
                         src=''
                         alt="earing"/>
                    <p className="wishlist__subtitle"> The new Mikimoto Feather Collection represents the ideal of beauty and grace. On the wings of
                        faith and elation now is the time to soar above the treasured skies. This ring features 7.7mm
                        Akoya cultured pearl with 0.31 cttw diamonds set in 18K white gold.</p>


                    <button className='wishlist__like-btn' onClick={()=>dispatch(changeActive())}>
                        {activeProduct? <AiTwotoneHeart style={{width: '30px', height: '30px'}}/> :<AiOutlineHeart style={{width: '30px', height: '30px'}} />}

                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;