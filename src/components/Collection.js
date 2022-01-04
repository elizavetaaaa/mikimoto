import React from 'react';
import {AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai";
import {changeActive} from "../redux/reducer/store";
import {useDispatch, useSelector} from "react-redux";


const Collection = ({src, id}) => {
    const activeProduct = useSelector(state => state.store.activeProduct);

    const dispatch = useDispatch();
    return (
        <div className="collection">

            <div className="collection__bottom">
                <div className="collection__product">
                    <h1>{id}</h1>
                    <img className="collection__img"
                         src={src}
                         alt="earing"/>
                    <button className='collection__like-empty' onClick={()=>dispatch(changeActive())}>
                        {activeProduct? <AiTwotoneHeart style={{width: '30px', height: '30px'}}/> :<AiOutlineHeart style={{width: '30px', height: '30px'}} />}

                    </button>

                </div>
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
                    <h1>{id}</h1>
                    <img className="collection__img"
                         src={src}
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