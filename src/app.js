import React from 'react';

import Rounter from './router/index';
import Header from '@/common/components/Header/index';
import Footer from '@/common/components/Footer/index';

import 'antd/dist/antd.css';


function App () {
    return (
        <div className="App">
            
            <Header />
            <Rounter />
            <Footer />
        </div>
    );
}
export default App;