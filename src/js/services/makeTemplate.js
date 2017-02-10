'use strict';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function makeTemplate(code) {
    return (
        <div>
            <Header />
                {code}
            <Footer />
        </div>
    )
}

export default makeTemplate