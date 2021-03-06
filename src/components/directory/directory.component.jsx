import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        
        
        this.state = {
            sections: [{
                title: 'LOVE',
                imageUrl: 'https://i.ibb.co/wrPWvPR/luca-bravo-h-Fz-Io-D0-F-i8-unsplash.jpg',
                id:1,
                linkUrl: 'love'
            },{
                title: 'FAMILY',
                imageUrl: 'https://i.ibb.co/4Mc7PD8/david-marcu-78-A265w-Pi-O4-unsplash.jpg',
                id:2,
                linkUrl: 'family'
            },{
                title: 'UNKNOWN',
                imageUrl: 'https://i.ibb.co/4TkGfXs/daniel-roe-lpjb-UMOyx8-unsplash.jpg',
                id:3,
                linkUrl: 'unknown'
            },{
                title: 'CARE',
                imageUrl: 'https://i.ibb.co/ZLZp7wT/jay-mantri-TFyi0-QOx08c-unsplash.jpg',
                id:4,
                size: 'large',
                linkUrl: 'care'
            },{
                title: 'SELF',
                imageUrl: 'https://i.ibb.co/qRrP4qB/henry-be-Iicyia-PYGGI-unsplash.jpg',
                id:5,
                size: 'large',
                linkUrl: 'self'

            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id , ...otherSectionProps}) => 
                    <MenuItem key={id} {...otherSectionProps} subtitle={'SHOP NOW'}  />)}
            </div>
        )
    }
}

export default Directory;