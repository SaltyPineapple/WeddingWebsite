import React from "react";
import Card from "./card/card";
import "./stay.css"

const stay = () => {

    var airbnb = [
        {
            id: 1,
            title:"AirBnb Lake Wenatchee Area",
            link:"https://www.airbnb.com/s/Leavenworth--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=1&query=Leavenworth%2C%20WA&place_id=ChIJjfn4pJJNmlQRfu-_CvuVT6E&date_picker_type=calendar&checkin=2023-06-17&checkout=2023-06-18&source=structured_search_input_header&search_type=user_map_move&ne_lat=47.915905045766216&ne_lng=-120.53201739956484&sw_lat=47.60294562612523&sw_lng=-120.89341467992261&zoom=11&search_by_map=true"
        },
        {
            id: 2,
            title:"VRBO Lake Wenatchee Area",
            link:"https://www.vrbo.com/search/keywords:leavenworth-washington-united-states-of-america/arrival:2023-06-17/departure:2023-06-18?adultsCount=2&petIncluded=false&filterByTotalPrice=true"
        },
    ]

    var hotels = [
        {
            id: 1,
            title:"Leavenworth Area",
            link:"https://www.google.com/travel/hotels/Leavenworth%2C%20WA?q=hotels%20leavenworth%20wa&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4718358%2C4723331%2C4731329%2C4757164%2C4814050%2C4861688%2C4864715%2C4879519%2C4886082%2C4886480%2C4887844%2C4888422%2C4893075%2C4898159&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAaSAoqGigKEgnMkTkxscdHQBFluh_UL0JewBISCaGVgVBE90dAEWW6HxRfHl7AEhoSFAoHCOcPEAYYERIHCOcPEAYYEhgBMgIIASoJCgU6A1VTRBoA&rp=OAFAAEgCogEPTGVhdmVud29ydGgsIFdBmgICCAA&ap=KigKEgnMkTkxscdHQBFluh_UL0JewBISCaGVgVBE90dAEWW6HxRfHl7AMAJoAA&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls"
        },
        {
            id: 2,
            title:"Lake Wenatchee Area",
            link:"https://www.google.com/travel/hotels/Leavenworth%2C%20WA?q=hotels%20leavenworth%20wa&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4718358%2C4723331%2C4731329%2C4757164%2C4814050%2C4861688%2C4864715%2C4879519%2C4886082%2C4886480%2C4887844%2C4888422%2C4893075%2C4898159&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAaSAoqGigKEgkoOqfyIttHQBGFG4NShTpewBISCV_74aTl8kdAEYUbg_KcKF7AEhoSFAoHCOcPEAYYERIHCOcPEAYYEhgBMgIIASoJCgU6A1VTRBoA&rp=ogEPTGVhdmVud29ydGgsIFdBOAFAAEgCmgICCAA&ap=KigKEgnMkTkxscdHQBFluh_UL0JewBISCaGVgVBE90dAEWW6HxRfHl7AMAJawgEKBQisAhAAIgNVU0QqFgoHCOcPEAYYERIHCOcPEAYYEhgBIAGwAQFYAWgBcgQIAhgAigEoChIJzJE5MbHHR0ARZbof1C9CXsASEgmhlYFQRPdHQBFluh8UXx5ewKIBGAoJL20vMDEwcHNtEgtMZWF2ZW53b3J0aKoBCgoCCBwSAghzGAGqAQYKAggzGACqAQoKAgg1EgIIJhgBkgICCBGSAgIIE5ICAggPkgICCBCSAgIIEpICAggMkgICCBSSAQIgAWgA&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls"
        }
    ]

    var camping = [
        {
            id: 1,
            title:"Lake Wenatchee State Park",
            link:"https://washington.goingtocamp.com/create-booking/results?resourceLocationId=-2147483594&mapId=-2147483375&searchTabGroupId=0&bookingCategoryId=0&startDate=2023-06-17&endDate=2023-06-18&nights=1&isReserving=true&equipmentId=-32768&subEquipmentId=-32768&partySize=1&equipmentCapacity=1&filterData=%7B%22-32759%22:%22%5B%5B1%5D,0,0,0%5D%22,%22-32708%22:%22%5B%5B1%5D,0,0,0%5D%22%7D&searchTime=2022-11-23T00:22:17.938"
        },
        {
            id: 2,
            title:"Nason Creek Campground",
            link:"https://www.recreation.gov/camping/campgrounds/121390"
        },
        {
            id: 3,
            title:"Other Campgrounds",
            link:"https://www.google.com/search?rlz=1C1MMCH_enUS932US932&tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=ALiCzsZBIxc_vY9tzFDIg4-mfoEpLdF41A:1669191661842&q=campsites+leavenworth&rflfq=1&num=10&sa=X&ved=2ahUKEwiJrMPA78P7AhVPMTQIHagEBKYQjGp6BAgTEAE&biw=1920&bih=937&dpr=1#rlfi=hd:;si:6609951358866949313;mv:[[47.85421793237302,-120.64318998534068],[47.7640625973265,-120.90068205077037],null,[47.80915982736423,-120.77193601805553],13]"
        },
    ]

    return (
        <div className="stay-container" id="location-and-stay">
            <div className="stay-title">
                <h1>Find Lodging</h1>
            </div>
            <div className="card-container">
                    <Card title="Hotels" content={hotels} />
                    <Card title="AirBnB" content={airbnb} />
                    <Card title="Camping" content={camping} />
            </div>
        </div>
    );
}

export default stay;