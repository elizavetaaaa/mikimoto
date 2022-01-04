import axios from "axios";

const GET_SHOP_DATA = 'GET_SHOP_DATA';
const GET_DATA = 'GET_DATA';
const CHANGE_PROGRAM = 'CHANGE_PROGRAM';
const SHOW_EXTRA_TEXT = 'SHOW_EXTRA_TEXT';
const SHOW_PROGRAM_INFO = 'SHOW_PROGRAM_INFO';
const TEMP = 'TEMP';

const initialState = {
    data: [],
    showExtra: false,
    myData: [],
    hidden: false,
    showSpan: false,
    programInfo: false,
    temp: 'hello'

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOP_DATA: {
            return {
                ...state, shop_data: action.data
            }
        }

        case GET_DATA: {
            return {
                ...state, data: action.data
            }
        }
        case TEMP: {
            return {
                ...state, temp: state.temp + " me"
            }
        }
        case SHOW_EXTRA_TEXT: {
            return {
                ...state, showExtra: !state.showExtra
            }
        }
        case SHOW_PROGRAM_INFO: {
            return {
                ...state,
                myData: state.myData.map((el) => el.id === action.id
                    ?
                    {...el, isExpended: !el.isExpended}
                    :
                    el)

            }
        }


        case CHANGE_PROGRAM: {
            return {
                ...state,
                showSpan: !state.showSpan,
                myData: state.data.programs?.map(v => ({...v, isExpended: false}))

            }
        }
        default :
            return state
    }
}


export const getShopData = () => {
    return (dispatch) => {
        axios("https://shop-api-project.herokuapp.com/categories/")
            .then(({data}) => {
                console.log("инфо" + data);

                return dispatch({type: GET_SHOP_DATA, shop_data: data})
            })
    }
};


export const getData = () => {
    return (dispatch) => {
        axios("https://shop-api-project.herokuapp.com/categories/")
            .then(({data}) => {
                console.log(data);
                return dispatch({type: GET_DATA, data: data})
            })
    }
};

export const changeProgram = () => ({
    type: CHANGE_PROGRAM
});

export const showExtraText = () => ({
    type: SHOW_EXTRA_TEXT
});

export const showProgramInfo = (id) => ({
    type: SHOW_PROGRAM_INFO,
    id

});

export const getTemp = () => ({
    type: TEMP
})
