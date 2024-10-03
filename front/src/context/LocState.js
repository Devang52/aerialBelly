import LocContext from "./locContext"
import axios from "axios";

const LocState = (props) => {
    const userPlace = JSON.parse(localStorage.getItem("userPlace"));

    if (!userPlace) {
        const fetchCountry = async () => {
            try {
                const response = await axios.get('https://ipinfo.io/json');
                const data = response.data;
                localStorage.setItem("userPlace", JSON.stringify(data.country));
            } catch (error) {
                console.error('Error fetching country:', error);
            }
        };
        fetchCountry()
    } else {
        console.log('');
    }
    return (
        <LocContext.Provider value={userPlace}>
            {props.children}
        </LocContext.Provider>
    )
}

export default LocState;