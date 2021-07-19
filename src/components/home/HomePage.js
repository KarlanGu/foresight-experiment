import React from 'react';
//import  { POIlist } from '../POI-list';
import { CardView } from './Card';
import { connect } from 'react-redux'
//import * as cardActions from '../../redux/actions/cardAction'
const HomePage = () => (
    //<POIlist />
    <CardView />
);

function mapStateToProps(state){
    return{
        cards: state.cards
    }
}

export default connect(mapStateToProps)(HomePage);
