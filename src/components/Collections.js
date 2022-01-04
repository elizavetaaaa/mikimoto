import React, {useEffect} from 'react';
import Collection from "./Collection";
import {useDispatch, useSelector} from "react-redux";
import {getData, getShopData, getTemp} from "../redux/reducer/store";

const Collections = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, []);
    const data = useSelector(state => state.store.data);

    console.log(data.length);


    return (
        <div className="collections">
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

            {data.map((el, idx)=>{
                return idx===0 ? <Collection src={el.product_list[0].product_image[0].product_image_url}
                id={el.product_list[0].product_image[0].id}/>
                : ''
            })}



            <div className="collection__top">

                <div className="collection__content-half">
                    <h3 className="collection__title">Silver rings</h3>
                </div>
                <div className="collection__content-half">
                    <p className="collection__subtitle">
                        Aiyo, Indian head, jewelry
                        Out in Egypt with the wrists of fury
                        Spanking bracelet, rocking Asics
                        Trick bandit, Ghost is brick granite
                        At the U.S. Open with my whole len, slapping up fifty scramblers.

                    </p>
                </div>
            </div>

            {data.map((el, idx)=>{
                return idx===1 ? <Collection src={el.product_list[0].product_image[0].product_image_url}
                                             id={el.product_list[0].product_image[0].id}/>
                    : ''
            })}
            <div className="collection__top">

                <div className="collection__content-half">
                    <h3 className="collection__title">Necklesses</h3>
                </div>
                <div className="collection__content-half">
                    <p className="collection__subtitle">
                        Our Necklesses, Indian head, jewelry
                        Out in Egypt with the wrists of fury
                        Spanking bracelet, rocking Asics
                        Trick bandit, Ghost is brick granite
                        At the U.S. Open with my whole len, slapping up fifty scramblers.

                    </p>
                </div>
            </div>

            {data.map((el, idx)=>{
                return idx===2 ? <Collection src={el.product_list[0].product_image[0].product_image_url}
                                             id={el.product_list[0].product_image[0].id}/>
                    : ''
            })}




        </div>
    );
};

export default Collections;

