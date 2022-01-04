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
            {data.map((el, idx)=>{
                // console.log(el.product_list[0].product_image[0].product_image_url)
                return <Collection src={el.product_list[0].product_image[0].product_image_url}
                id={el.product_list[0].product_image[0].id}/>
            })}
            {/*<Collection/>*/}
            {/*<Collection/>*/}
            {/*<Collection/>*/}

        </div>
    );
};

export default Collections;