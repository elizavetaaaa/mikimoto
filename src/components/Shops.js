import React from 'react';
import {Link} from "react-router-dom";
// import {useHistory} from 'react-router-dom';

const Shops = () => {

    // let history = useHistory();
    return (
        <div className="shops">

            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop1.png")} alt="shop"/>
                <h5 className="shops__city">New York</h5>
                <p className="shops__address">730 Fifth Avenue <br/>
                    New York, NY 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 4600</p>

                <button className="shops__btn"><Link to="/shop" className="btn btn-primary">more ></Link></button>

            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop2.png")} alt="shop"/>
                <h5 className="shops__city">Paris</h5>
                <p className="shops__address">21 La Fleur De Paris
                    Paris, <br/> P 10019, France
                </p>
                <p className="shops__tel">TEL : +23 212 457 </p>
                <button className="shops__btn"><Link to="/shop" className="btn btn-primary">more ></Link></button>
            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop3.png")} alt="shop"/>
                <h5 className="shops__city">Los Angeles</h5>
                <p className="shops__address">730 Sweet Street <br/>
                    Los Angeles, LA 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 5500</p>
                <button className="shops__btn"> more ></button>
            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop2.png")} alt="shop"/>
                <h5 className="shops__city">New York</h5>
                <p className="shops__address">730 Fifth Avenue
                    New York, NY 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 4600</p>
                <button className="shops__btn"> more ></button>
            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop2.png")} alt="shop"/>
                <h5 className="shops__city">New York</h5>
                <p className="shops__address">730 Fifth Avenue
                    New York, NY 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 4600</p>
                <button className="shops__btn"> more ></button>
            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop2.png")} alt="shop"/>
                <h5 className="shops__city">New York</h5>
                <p className="shops__address">730 Fifth Avenue
                    New York, NY 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 4600</p>
                <button className="shops__btn"> more ></button>
            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop2.png")} alt="shop"/>
                <h5 className="shops__city">New York</h5>
                <p className="shops__address">730 Fifth Avenue
                    New York, NY 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 4600</p>
                <button className="shops__btn"> more ></button>
            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop2.png")} alt="shop"/>
                <h5 className="shops__city">New York</h5>
                <p className="shops__address">730 Fifth Avenue
                    New York, NY 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 4600</p>
                <button className="shops__btn"> more ></button>
            </div>
            <div className="shops__shop">
                <img className="shops__img" src={require("../images/shops/shop2.png")} alt="shop"/>
                <h5 className="shops__city">New York</h5>
                <p className="shops__address">730 Fifth Avenue
                    New York, NY 10019, United States
                </p>
                <p className="shops__tel">TEL : +1 212 457 4600</p>
                <button className="shops__btn"> more ></button>
            </div>
        </div>
    );
};

export default Shops;