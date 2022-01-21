import React from 'react';

const Rocet = ({props: value}) => {
    return (
        <div className={'rocet'}>
            {value.mission_name}
            {value.launch_year}
            <img src={value.links.mission_patch} alt="links.mission_patch"/>

        </div>
    );
};

export default Rocet;