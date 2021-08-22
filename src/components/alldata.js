import React from "react";
import {DataContext} from '../App';

function AllData(){
    const ctx = React.useContext(DataContext);
    console.log("ALLDATA")
    console.log(ctx)
    console.log("ALLDATA")
    return (
        <h1>AllData<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default AllData;

