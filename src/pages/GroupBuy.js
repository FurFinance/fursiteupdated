import React from 'react';
import { Card } from 'ui-neumorphism'
import Fur from '../images/fur.png'

// Import styling
import "../pagesStyle/GroupBuy.scss";


const GroupBuy = () => {
    return (
        <div className="group-container">
            <Card className="group-mainCard">
                <img className="group-img" src={ Fur } />
            </Card>
        </div>
    );
};

export default GroupBuy;