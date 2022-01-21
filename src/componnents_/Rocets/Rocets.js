import React, {useEffect, useState} from 'react';
import Rocet from "../Rocet/Rocet";

const Rocets = () => {

    const [rocerts, setRocets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())

            .then(value => {
                let filter = value.filter(value => value.launch_year != '2020')

                setRocets(filter)
            })

    }, []);
    return (
        <div className={'rocets'}>
            {rocerts.map(value => <Rocet key={value.flight_number} props={value}
            />)
            };
        </div>
    );
};

export default Rocets;
