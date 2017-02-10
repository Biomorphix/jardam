import React from 'react';
import Header from '../components/Header';
import CenterContent from '../components/HomePage/MainContainer';
import Statistics from '../components/HomePage/Statistics';
import Categories from '../components/HomePage/Categories';
import Footer from '../components/Footer';
import makeTemplate from '../services/makeTemplate';

export default class HomePage extends React.Component {
    render() {
        return (
            makeTemplate(
                <div>
                    <CenterContent />
                    <Statistics />
                    <Categories />
                </div>
            )
        )
    }
} 