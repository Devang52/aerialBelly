import React, { useState, useEffect } from "react";
import useGeoLocation from "./UseGeoLocation";

function UserLocation() {
    const { country, city, lat, lon } = useGeoLocation();

    return (
        <div>
            <p>Country : {country}</p>
            <p>City: {city}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
        </div>
    );
}

export default UserLocation