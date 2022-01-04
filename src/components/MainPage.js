import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopData} from "../redux/reducer/store";
import {showExtraText} from '../redux/reducer/store'

const MainPage = () => {
    const dispatch = useDispatch();
    const shopData = useSelector(state => state.store?.shop_data);
    const showExtra = useSelector(state => state.store?.showExtra);

    useEffect(() => {
        dispatch(getShopData());
        console.log(shopData)
    }, []);

    console.log(shopData);
    return (
        <section className="home">
            {/*<div className="container">*/}
            <section className="home__top">
                <img src={require("../images/top1.jpg")} alt="top1"/>
                <img src={require("../images/top2.png")} alt="top2"/>
                <img src={require("../images/top3.png")} alt="top3"/>
            </section>
            {/*</div>*/}


            <section className="home__second-sec">
                <div className="container home__second-sec-content ">

                    <div className="home__second-text-div">
                        <p className="home__second-sec-text">Mikimoto transcends generations, regardless <br/>of age or
                            gender. Meet responsible high-end <br/> jewelry made in Japan. Our creations
                            are <br/> designed to stand the test of time.</p>

                    </div>
                    <div className="home__second-text-div-btn">
                        <button className="home__second-sec-btn" onClick={()=>dispatch(showExtraText())}>KNOW MORE</button>

                    </div>
                </div>

                <div className="container extra-div" style={{display : showExtra ? 'block' : 'none'}}>
                    <p className="home__second-third-text">In 1893, our founder Kokichi Mikimoto successfully created
                        the world's first cultured pearls.
                        Ever since then, Mikimoto has been seeking to harness the allure of pearls, translating our
                        hopes and dreams into pearl necklaces for over 120 years. <br/>

                        Our pearl necklaces have been loved across all generations and genders. They are designed to
                        become a part of you, bringing out the goddess in you with that radiant shine. <br/>

                        In 1893, our founder Kokichi Mikimoto successfully created the world's first cultured pearls.
                        Mikimoto constantly strives to update the tradition of beauty to ensure our products are always
                        new and exciting. <br/>

                        One of our goals is to preserve and protect the ocean and to promote coexistence with nature as
                        a prerequisite to producing beautiful pearls. We strive to help the pearl industry improve while
                        safeguarding the sustainability of the environment.
                    </p>
                </div>
            </section>

            <section className="home__third-sec">
                <div className="container ">
                    <h3 className="home__third-sec-title">SHOP NEW ARRIVALS</h3>

                    <div className="home__third-sec-cards">
                        <div className="home__third-sec-card">
                            <p className="home__third-sec-card-title">Stein Necklace in Silver with Aquamarine</p>
                            <img src={require("../images/arrival1.png")} alt="card-img"/>
                        </div>
                        <div className="home__third-sec-card">
                            <p className="home__third-sec-card-title">Paris La Flear Earing from new Spring
                                collection</p>
                            <img src={require("../images/arrival2.png")} alt="card-img"/>
                        </div>
                        <div className="home__third-sec-card">
                            <p className="home__third-sec-card-title">Pendant in Yellow Gold with Ethical stone</p>
                            <img src={require("../images/arrival3.png")} alt="card-img"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home__forth-sec">
                <div className="container">
                    <p className="home__forth-sec-text">Together, we can build a brighter tomorrow. We use ethical
                        stones and the most eco-responsible
                        raw material possible.</p>
                    <h4 className="home__forth-sec-slides-title">
                        WE PRODUCE
                    </h4>
                    <div className="home__forth-sec-slides">
                        <img src={require("../images/rings.png")} alt="rings"/>
                        <img src={require("../images/bracelets.png")} alt="bracelets"/>
                        <img src={require("../images/earing.png")} alt="earing"/>

                    </div>
                </div>
            </section>

            <section className="home__fifth-sec">
                <img src={require("../images/subsrribe.png")} alt=""/>
            </section>


        </section>
    );
};

export default MainPage;