import React from 'react';
import MapSection from './components/MapSection';
import SearchBar from './components/SearchBar';
import { StyleSheet, Text, View } from 'react-native';
import InfoAll from './components/info/info_all';
import SwiperView from './components/SwiperView';
import Event from './assets/psub';
import { getSafetyRating } from './assets/utils';

export default class App extends React.Component {
  render() {

    let pubevent = new Event();

    let routes = getRoutes();

    let render_views = [];
    let avg_rating = 0;
    let avg_duration = 0;

    for (let i=0; i<routes.length; i++) {
        let { duration } = routes[i][1]["legs"];
        let rating = getSafetyRating(routes[i][0]);
        avg_duration += duration;
        avg_rating += rating;

        render_views.push(<Info name={"Route" + (i+1)} rating={rating} time={duration}/>)
    }

    return (
      <View style={styles.outerContainer}>
        <SearchBar />
        <MapSection 
          mapData={GoogleMapData}
          crimes={FakeCrimeData}
          pubsub={pubevent}
        />
        <SwiperView pubsub={pubevent} views={[<InfoAll avg_dur={avg_duration/render_views.length} rating={getSafetyRating(avg_rating/render_views.length)} rlen={render_views.length}/>, ...render_views]}/>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
}

const GoogleMapData = {
    "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJNdv8Pb9ZwokR1SHlRAL0Itw",
            "types": [
                "street_address"
            ]
        },
        {
            "geocoder_status": "OK",
            "place_id": "ChIJvwJZrWH4wokRNBcFMQ0ohIE",
            "types": [
                "establishment",
                "point_of_interest",
                "stadium"
            ]
        }
    ],
    "routes": [
        {
            "bounds": {
                "northeast": {
                    "lat": 40.817133,
                    "lng": -73.9979987
                },
                "southwest": {
                    "lat": 40.7416627,
                    "lng": -74.0725334
                }
            },
            "copyrights": "Map data ©2018 Google",
            "legs": [
                {
                    "distance": {
                        "text": "9.5 mi",
                        "value": 15295
                    },
                    "duration": {
                        "text": "23 mins",
                        "value": 1363
                    },
                    "end_address": "1 MetLife Stadium Dr, East Rutherford, NJ 07073, USA",
                    "end_location": {
                        "lat": 40.8120978,
                        "lng": -74.0724079
                    },
                    "start_address": "75 9th Ave, New York, NY 10011, USA",
                    "start_location": {
                        "lat": 40.7419113,
                        "lng": -74.0047876
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": "105 ft",
                                "value": 32
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 11
                            },
                            "end_location": {
                                "lat": 40.7416627,
                                "lng": -74.0049708
                            },
                            "html_instructions": "Head <b>southwest</b> on <b>9th Ave</b> toward <b>W 15th St</b>",
                            "polyline": {
                                "points": "}ktwF|`ubM`@VNJ"
                            },
                            "start_location": {
                                "lat": 40.7419113,
                                "lng": -74.0047876
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 344
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 139
                            },
                            "end_location": {
                                "lat": 40.7431681,
                                "lng": -74.0085374
                            },
                            "html_instructions": "Turn <b>right</b> at the 1st cross street onto <b>W 15th St</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "kjtwF`bubMIV_B`FEJEN{AxEUt@M`@q@pBEN"
                            },
                            "start_location": {
                                "lat": 40.7416627,
                                "lng": -74.0049708
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.4 mi",
                                "value": 564
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 94
                            },
                            "end_location": {
                                "lat": 40.7481923,
                                "lng": -74.00763549999999
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>11th Ave</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "ystwFjxubMe@EcBSSCyBUUAq@G_AMUCsC]kCYOAKAoBUM?cBOKAK?"
                            },
                            "start_location": {
                                "lat": 40.7431681,
                                "lng": -74.0085374
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.9 mi",
                                "value": 1526
                            },
                            "duration": {
                                "text": "4 mins",
                                "value": 260
                            },
                            "end_location": {
                                "lat": 40.7607296,
                                "lng": -74.00205799999999
                            },
                            "html_instructions": "Continue onto <b>12th Ave</b>",
                            "polyline": {
                                "points": "esuwFvrubMSAK?K?K@G@K@M@IBK@SDODOFOHQFSJk@VSHSHSFUD[Fe@DI?I?KASAOCOCSEYKUIuBo@]GcCq@kCu@uA_@EAWIUGOEOIOGMGMGOKUMSSSO{IyFoBmAUSq@a@gCeBuA{@[S]S_C}A{@k@wA}@UOoAy@a@[II"
                            },
                            "start_location": {
                                "lat": 40.7481923,
                                "lng": -74.00763549999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 312
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 82
                            },
                            "end_location": {
                                "lat": 40.7593444,
                                "lng": -73.9988302
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>W 40th St</b>/<b>Anthony Brizzi Pl</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "qaxwFzotbMxDwLTs@^gAPc@Rm@"
                            },
                            "start_location": {
                                "lat": 40.7607296,
                                "lng": -74.00205799999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.7 mi",
                                "value": 1186
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 110
                            },
                            "end_location": {
                                "lat": 40.7631296,
                                "lng": -74.0094858
                            },
                            "html_instructions": "Merge onto <b>NY-495 W</b>/<b>Lincoln Tunnel</b> via the ramp to <b>New Jersey</b><div style=\"font-size:0.9em\">Entering New Jersey</div>",
                            "polyline": {
                                "points": "{xwwFt{sbMNWDE@EDIBMBINg@Pg@@C@CBCBA@A@?BAB@@@B@BBBF@D?F@H?L?NCXC`@E`@C^Cn@CVALCJCL{BzGoA~DoA|DK`@ABUt@[~@CH_@hAcMz`@"
                            },
                            "start_location": {
                                "lat": 40.7593444,
                                "lng": -73.9988302
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "2.8 mi",
                                "value": 4516
                            },
                            "duration": {
                                "text": "5 mins",
                                "value": 280
                            },
                            "end_location": {
                                "lat": 40.7767179,
                                "lng": -74.042813
                            },
                            "html_instructions": "Continue onto <b>NJ-495 W</b>",
                            "polyline": {
                                "points": "qpxwFh~ubMsJpZsJpZgAdD[pAOv@Ij@E\\?@Ef@?\\Ax@Bh@?D?BB`@D\\BJBJ?D@DFVBFBJHZNb@Td@Z`@Z^hAx@JJl@f@^X`Ar@PN`@TnAh@l@TV@JFHDJFNFLHLHHFt@l@DDFDDBFBFBB@F?F@H?H@HAFAD?JCFAHCLEHEJEHGJIHIHKHKFKDMDMDMBOBK@M@Q@M?M?Q?MAMAOCMCMCKCKGMEKEIEIEIGGGIIIIEGGIEIEGEOGgAc@gHiCOEKEMCOEaEm@_@?[CM?S?S@QBSDODODMFMDMHML_@^KHINIJGLIPITUl@cIxUMV?BSj@_@lAi@hBEH?@s@bCg@dBQp@?BKXSp@Yt@Wt@_@bAsBhFO\\CHCDGPeBpEe@jAYr@eArCSh@Qf@M^Od@Qj@_ErOIXGXIXIXGZK^K`@YbAI\\Sz@m@`Co@bCQp@Mh@Of@I\\I\\GNEPIZI\\Sr@Sp@CLEJ"
                            },
                            "start_location": {
                                "lat": 40.7631296,
                                "lng": -74.0094858
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 435
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 22
                            },
                            "end_location": {
                                "lat": 40.7797406,
                                "lng": -74.0459794
                            },
                            "html_instructions": "Keep <b>right</b> at the fork to continue on <b>NJ-3 W</b>, follow signs for <b>Secaucus</b>/<b>Garden State Parkway</b>",
                            "maneuver": "fork-right",
                            "polyline": {
                                "points": "oe{wFpn|bM[~@EHGNINGNKNINMPMPMLKNORIH}@`AwBxBWVURURe@^g@\\k@\\eAf@"
                            },
                            "start_location": {
                                "lat": 40.7767179,
                                "lng": -74.042813
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "2.2 mi",
                                "value": 3561
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 140
                            },
                            "end_location": {
                                "lat": 40.8041562,
                                "lng": -74.0717843
                            },
                            "html_instructions": "Keep <b>left</b> to stay on <b>NJ-3 W</b>, follow signs for <b>Clifton</b>",
                            "maneuver": "keep-left",
                            "polyline": {
                                "points": "kx{wFjb}bMMJEDEBEBIDaA^k@Rw@V}Ab@iB\\qAXiB`@uCl@A?A?QDs@NSFuAXwBf@{@Za@Nm@T_@NYLi@VmAl@gAp@m@`@}@l@QPA@IDA@[XA@_@Ze@`@ONA@i@h@STu@v@eApA}@pAq@bAwAzBgC~DaBhCu@jAYd@UXYZo@hA{@pA_A~AsArB{@rAuAvBq@jAUZABA@qFjIe@t@mDpFOVcCvDgElGQVkCxDA@{BhDcD~Ew@lAqCnEyGzJ{BdDUZsAzB"
                            },
                            "start_location": {
                                "lat": 40.7797406,
                                "lng": -74.0459794
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 374
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 18
                            },
                            "end_location": {
                                "lat": 40.807415,
                                "lng": -74.07250909999999
                            },
                            "html_instructions": "Take the <b>NJ-120 N</b> exit",
                            "maneuver": "ramp-right",
                            "polyline": {
                                "points": "_q`xFrcbcMSBA?CBIFOLi@^SJSJOFQFSDODUD]Ba@@g@@_BFaFH"
                            },
                            "start_location": {
                                "lat": 40.8041562,
                                "lng": -74.0717843
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.5 mi",
                                "value": 869
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 38
                            },
                            "end_location": {
                                "lat": 40.8145647,
                                "lng": -74.06878929999999
                            },
                            "html_instructions": "Continue onto <b>NJ-120 N</b>",
                            "polyline": {
                                "points": "keaxFdhbcMc@@o@@i@AWA]Ag@GaAMuA_@kBk@s@UOGeA_@SIu@[i@Uc@SyAs@o@_@eBeAs@e@i@a@}C_CqBeBA?OM?AAA_@["
                            },
                            "start_location": {
                                "lat": 40.807415,
                                "lng": -74.07250909999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 339
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 16
                            },
                            "end_location": {
                                "lat": 40.8170874,
                                "lng": -74.0665298
                            },
                            "html_instructions": "Continue straight onto <b>Washington Ave</b>",
                            "maneuver": "straight",
                            "polyline": {
                                "points": "_rbxF|pacMm@c@}FcFi@g@SQkB_BA??AA?KK?AAAA?IIEE"
                            },
                            "start_location": {
                                "lat": 40.8145647,
                                "lng": -74.06878929999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 358
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 43
                            },
                            "end_location": {
                                "lat": 40.8143566,
                                "lng": -74.06479929999999
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>Paterson Plank Rd</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "yacxFxbacMESAK?G?EBKBQPIFE@ALGPGxDyAp@YhAc@LEn@WHENEvAi@"
                            },
                            "start_location": {
                                "lat": 40.8170874,
                                "lng": -74.0665298
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "184 ft",
                                "value": 56
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 11
                            },
                            "end_location": {
                                "lat": 40.8139759,
                                "lng": -74.06522369999999
                            },
                            "html_instructions": "Turn <b>right</b> toward <b>N Connection Rd</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "wpbxF~w`cM^^HLFHFHPP"
                            },
                            "start_location": {
                                "lat": 40.8143566,
                                "lng": -74.06479929999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "476 ft",
                                "value": 145
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 21
                            },
                            "end_location": {
                                "lat": 40.81381340000001,
                                "lng": -74.06693179999999
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>N Connection Rd</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "knbxFrz`cM@R@RDn@PtDDfA"
                            },
                            "start_location": {
                                "lat": 40.8139759,
                                "lng": -74.06522369999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 302
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 31
                            },
                            "end_location": {
                                "lat": 40.8149566,
                                "lng": -74.07002729999999
                            },
                            "html_instructions": "Continue straight onto <b>Rd D</b>",
                            "maneuver": "straight",
                            "polyline": {
                                "points": "imbxFheacMFfA@X?R?D?HAHAH?FCJAHCFCJCFS^Yf@Yp@_@|@ABO\\CHg@hAEJCFAFCFQb@Q`@"
                            },
                            "start_location": {
                                "lat": 40.81381340000001,
                                "lng": -74.06693179999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 376
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 47
                            },
                            "end_location": {
                                "lat": 40.8120978,
                                "lng": -74.0724079
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>W Peripheral Rd</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "otbxFtxacMHDFFr@f@RNl@f@pCxBfB|ARPXTb@\\\\Vf@\\`@X"
                            },
                            "start_location": {
                                "lat": 40.8149566,
                                "lng": -74.07002729999999
                            },
                            "travel_mode": "DRIVING"
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": "}ktwF|`ubMp@b@iBxF}BjH_ArCENe@EwBWoCW{Gw@wGs@iCQw@?k@H_ATaBt@g@Ri@LaALS?_AKyDkAaDy@aFuAcAY{@a@e@Yg@c@sO}JgCeBuA{@y@g@iHwEoAy@a@[IIxDwLt@{Bd@qA\\m@h@gBJMJALNBd@MlBMtBGXkEzMsBxGcOne@gVbv@gAdD[pAYbBE^EdA@bBHhAHb@XfAd@hAv@`AtAdAlA`ArAbA`@TnAh@l@TV@TLv@b@lA`AXLb@Bb@Gh@QTMTSRWLYRw@D{@C}@Os@Ym@_@e@e@YWMoJmDy@UaEm@_@?i@Cg@@e@H{@X[Vk@h@e@z@qJtX}AfFaBtFq@`Cq@jBsClH_@~@kFdNcAvCcFrRkBnHiDtMm@~By@jC_@x@q@bAs@z@cFfF{@r@sAz@eAf@MJKH}B|@uCz@{Dv@aGnAgATiB`@wBf@{@ZoAd@y@\\wBdAuBrA{AfA_Ax@aB|AiAlAcCbDsJhOoApBo@t@_GnJyErHuFpIcF~HkIdM}CpEyIxMqCnEyGzJ{BdDiBvCUBgAx@iAf@c@Js@HiABaIPsABaACeAIaAMuA_@_DaAuAg@sB{@}BgAuCeB}AgA}C_CqBeBQMACmA_AgHkGaCqB[[KYASBQBQPIHG^ObI}C`DmAx@`APP@RFbA`@~IAl@Gf@_@z@s@xAa@`AaA|B[z@Q`@HDz@n@`Av@xFvEnB|AhAv@"
            },
            "summary": "NJ-495 W and NJ-3 W",
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": "OK"
}

const FakeCrimeData = [ { cdid: 46846473,
    type: 'Assault',
    date: '12/04/13 06:52 PM',
    address: '2200 BLOCK OF E SCHOOL DR',
    link: 'http://spotcrime.com/crime/46846473-bf48f72ccce82295caf2aee6aedca3e1',
    lat: 33.4037116,
    lon: -112.0341417 },
  { cdid: 46845797,
    type: 'Burglary',
    date: '12/03/13 12:00 PM',
    address: '2000 BLOCK OF E ST ANNE AV',
    link: 'http://spotcrime.com/crime/46845797-82cbf298a022813edcee81e0a7ec827b',
    lat: 33.3880011,
    lon: -112.0387037 },
  { cdid: 46846182,
    type: 'Theft',
    date: '12/01/13 08:00 AM',
    address: '2200 BLOCK OF E ALTA VISTA RD',
    link: 'http://spotcrime.com/crime/46846182-818423ce25e8e193cf531e769e0e4c30',
    lat: 33.3892497,
    lon: -112.0344112 },
  { cdid: 46039372,
    type: 'Arrest',
    date: '11/29/13 01:18 AM',
    address: '2000 BLOCK OF E BURGESS LA',
    link: 'http://spotcrime.com/crime/46039372-bb0eb5147f7f6ab63f30ce7298ff2de2',
    lat: 33.3902173,
    lon: -112.0386689 },
  { cdid: 46846219,
    type: 'Assault',
    date: '11/28/13 09:00 AM',
    address: '6000 BLOCK OF S 25TH LA',
    link: 'http://spotcrime.com/crime/46846219-cbe45d070a76520090147ac862b8eae4',
    lat: 33.3933088,
    lon: -112.0272747 },
  { cdid: 46038235,
    type: 'Arrest',
    date: '11/26/13 09:45 PM',
    address: '2100 BLOCK OF E MOBILE LA',
    link: 'http://spotcrime.com/crime/46038235-61f1ce3ad5a5f259b95ca709b7e42700',
    lat: 33.4015345,
    lon: -112.0368315 },
  { cdid: 45526778,
    type: 'Assault',
    date: '11/23/13 12:29 PM',
    address: '2200 BLOCK OF E NANCY LA',
    link: 'http://spotcrime.com/crime/45526778-aacdddd8c5fd83edee8aee7b55ce7cba',
    lat: 33.3907383,
    lon: -112.0343804 },
  { cdid: 45526648,
    type: 'Arrest',
    date: '11/22/13 12:45 AM',
    address: '00 BLOCK OF S 18TH PL',
    link: 'http://spotcrime.com/crime/45526648-8c6523cf0f2ede15fa06ee8ba43ff7a9',
    lat: 33.3996538,
    lon: -112.0425118 },
  { cdid: 45525295,
    type: 'Burglary',
    date: '11/19/13 06:00 PM',
    address: '2000 BLOCK OF E ALTA VISTA RD',
    link: 'http://spotcrime.com/crime/45525295-ac2846846772b7295d08b11c122b764f',
    lat: 33.3894736,
    lon: -112.0386812 },
  { cdid: 45526055,
    type: 'Assault',
    date: '11/17/13 07:00 PM',
    address: '2000 BLOCK OF E SOUTHERN AV',
    link: 'http://spotcrime.com/crime/45526055-2226a1b74f9c35f93eea4f05e8790b8c',
    lat: 33.3928994,
    lon: -112.038771 },
  { cdid: 45526002,
    type: 'Assault',
    date: '11/17/13 01:20 PM',
    address: '1800 BLOCK OF E SUNLAND AV',
    link: 'http://spotcrime.com/crime/45526002-7e8696518721e503edc21b66d681f69a',
    lat: 33.3952706,
    lon: -112.0419982 },
  { cdid: 45399939,
    type: 'Assault',
    date: '11/14/13 06:26 PM',
    address: '1800 BLOCK OF E CHIPMAN RD',
    link: 'http://spotcrime.com/crime/45399939-60fe48fae1b88a8bb13a3f8da1321913',
    lat: 33.4021139,
    lon: -112.0425066 },
  { cdid: 45399867,
    type: 'Theft',
    date: '11/14/13 02:50 AM',
    address: '1800 BLOCK OF E WIER AV',
    link: 'http://spotcrime.com/crime/45399867-16eec0ec24e8826e280f76e3cf3d5960',
    lat: 33.4028975,
    lon: -112.0419515 },
  { cdid: 45399736,
    type: 'Arrest',
    date: '11/13/13 03:48 PM',
    address: '2200 BLOCK OF E ALTA VISTA RD',
    link: 'http://spotcrime.com/crime/45399736-8ad39cd813c9b532c36b067fdc33f389',
    lat: 33.3892497,
    lon: -112.0344112 },
  { cdid: 45399857,
    type: 'Theft',
    date: '11/13/13 09:00 AM',
    address: '2400 BLOCK OF E CHIPMAN RD',
    link: 'http://spotcrime.com/crime/45399857-ebab1be3c66ca74d188fd1a837dc12dc',
    lat: 33.4023596,
    lon: -112.0298543 },
  { cdid: 45399981,
    type: 'Theft',
    date: '11/12/13 10:00 PM',
    address: '2200 BLOCK OF E SOUTHERN AV',
    link: 'http://spotcrime.com/crime/45399981-e45f253643e6738ceb002d476c86bd78',
    lat: 33.393055,
    lon: -112.0343692 },
  { cdid: 45398534,
    type: 'Burglary',
    date: '11/12/13 09:40 PM',
    address: '6000 BLOCK OF S 24TH ST',
    link: 'http://spotcrime.com/crime/45398534-1dd99d3647e293f6e85c3e59e40d1224',
    lat: 33.3931883,
    lon: -112.0300853 },
  { cdid: 45398249,
    type: 'Burglary',
    date: '11/12/13 11:00 AM',
    address: '2500 BLOCK OF E MOBILE LA',
    link: 'http://spotcrime.com/crime/45398249-464b7a13198f081a547b7d3c5df7e3e3',
    lat: 33.4014647,
    lon: -112.0269926 },
  { cdid: 45398125,
    type: 'Burglary',
    date: '11/11/13 05:00 PM',
    address: '2200 BLOCK OF E SUNLAND AV',
    link: 'http://spotcrime.com/crime/45398125-ed1c0ef761d15dc49c5073dcfbde7d65',
    lat: 33.3963898,
    lon: -112.0342238 },
  { cdid: 45397891,
    type: 'Burglary',
    date: '11/10/13 05:00 PM',
    address: '1900 BLOCK OF E ROESER RD',
    link: 'http://spotcrime.com/crime/45397891-d0d1e497c806f4e1141363fa44d2ec33',
    lat: 33.3996718,
    lon: -112.0409278 },
  { cdid: 45397831,
    type: 'Burglary',
    date: '11/10/13 09:00 AM',
    address: '2200 BLOCK OF E ALTA VISTA RD',
    link: 'http://spotcrime.com/crime/45397831-a3069cd4985acc7f10d81e7253717da8',
    lat: 33.3892497,
    lon: -112.0344112 },
  { cdid: 45398680,
    type: 'Assault',
    date: '11/10/13 03:47 AM',
    address: '2200 BLOCK OF E ST CATHERINE AV',
    link: 'http://spotcrime.com/crime/45398680-5042b57e3c8b382023f3b1d8f502f175',
    lat: 33.3885581,
    lon: -112.0344187 },
  { cdid: 45397854,
    type: 'Burglary',
    date: '11/09/13 02:00 AM',
    address: '5700 BLOCK OF S 21ST TE',
    link: 'http://spotcrime.com/crime/45397854-78d4b817012ae47dbd87c52761d7fc24',
    lat: 33.3946717,
    lon: -112.0350565 },
  { cdid: 45286939,
    type: 'Arrest',
    date: '11/05/13 10:58 PM',
    address: '2500 BLOCK OF E MOBILE LA',
    link: 'http://spotcrime.com/crime/45286939-0f5d31616ac37df9341c0a64c2201a0b',
    lat: 33.4014647,
    lon: -112.0269926 },
  { cdid: 45286601,
    type: 'Assault',
    date: '11/04/13 08:27 AM',
    address: '2100 BLOCK OF E CARVER DR',
    link: 'http://spotcrime.com/crime/45286601-6cf7b1a49862dbb04cdf5f1a09a56044',
    lat: 33.4035415,
    lon: -112.0374932 },
  { cdid: 45286385,
    type: 'Arrest',
    date: '11/03/13 12:18 AM',
    address: '1900 BLOCK OF E MOBILE LA',
    link: 'http://spotcrime.com/crime/45286385-93710be743ce7ffbafd083a91eeb59a3',
    lat: 33.4013553,
    lon: -112.0405715 },
  { cdid: 45171443,
    type: 'Arrest',
    date: '11/02/13 12:55 PM',
    address: '2200 BLOCK OF E NANCY LA',
    link: 'http://spotcrime.com/crime/45171443-c035e100285bc17fe5e0db4829037106',
    lat: 33.3907383,
    lon: -112.0343804 },
  { cdid: 45171359,
    type: 'Assault',
    date: '11/02/13 12:38 AM',
    address: '2500 BLOCK OF E ATLANTA AV',
    link: 'http://spotcrime.com/crime/45171359-fe024ee261e9a7ca74d580ade7d75af0',
    lat: 33.400552,
    lon: -112.0270119 },
  { cdid: 45171362,
    type: 'Assault',
    date: '11/02/13 12:20 AM',
    address: '2500 BLOCK OF E MOBILE LA',
    link: 'http://spotcrime.com/crime/45171362-85a51c7741e699a7a75dbea0ab2234e4',
    lat: 33.4014647,
    lon: -112.0269926 },
  { cdid: 45286756,
    type: 'Theft',
    date: '11/01/13 01:00 AM',
    address: '2100 BLOCK OF E HUNTINGTON DR',
    link: 'http://spotcrime.com/crime/45286756-061412908c91bc0eb281c94a2c25849d',
    lat: 33.3935261,
    lon: -112.0361545 },
  { cdid: 45169993,
    type: 'Burglary',
    date: '10/31/13 01:00 PM',
    address: '1100 BLOCK OF E FRAKTUR RD',
    link: 'http://spotcrime.com/crime/45169993-10af575a29849fb468f16ab54c6b1466',
    lat: 33.3957776,
    lon: -112.035973 },
  { cdid: 45286658,
    type: 'Theft',
    date: '10/30/13 06:38 AM',
    address: '2000 BLOCK OF E BURGESS LA',
    link: 'http://spotcrime.com/crime/45286658-e9de501f4c2fe13bbf6bffc1c84fccc6',
    lat: 33.3902173,
    lon: -112.0386689 },
  { cdid: 45170421,
    type: 'Theft',
    date: '10/28/13 12:48 PM',
    address: '2400 BLOCK OF E SOUTHERN AV',
    link: 'http://spotcrime.com/crime/45170421-9025f8a35bc99276306dc893dddae0ce',
    lat: 33.3932169,
    lon: -112.0300395 },
  { cdid: 45169901,
    type: 'Arrest',
    date: '10/27/13 06:29 AM',
    address: '6600 BLOCK OF S 22ND ST',
    link: 'http://spotcrime.com/crime/45169901-7ca79c121712ddf1ecb769379ee8375f',
    lat: 33.3874058,
    lon: -112.0344249 },
  { cdid: 45038273,
    type: 'Burglary',
    date: '10/23/13 04:30 PM',
    address: '5000 BLOCK OF S 24TH ST',
    link: 'http://spotcrime.com/crime/45038273-a640b6bac5b0016d71082887679606a0',
    lat: 33.4014265,
    lon: -112.0299195 },
  { cdid: 45039443,
    type: 'Assault',
    date: '10/23/13 09:00 AM',
    address: '2500 BLOCK OF E MOBILE LA',
    link: 'http://spotcrime.com/crime/45039443-4f2ba90a57a63d75cead4a851b6ed0bf',
    lat: 33.4014647,
    lon: -112.0269926 },
  { cdid: 45038782,
    type: 'Theft',
    date: '10/21/13 03:00 PM',
    address: '2400 BLOCK OF E SOUTHERN AV',
    link: 'http://spotcrime.com/crime/45038782-5db5b9cd7bd5b7417dd1137f845b7204',
    lat: 33.3932169,
    lon: -112.0300395 },
  { cdid: 44894183,
    type: 'Shooting',
    date: '10/18/13 03:39 PM',
    address: '6400 BLOCK OF S 21ST ST',
    link: 'http://spotcrime.com/crime/44894183-5d0b413f7e4c3a28d48610cb028d7d78',
    lat: 33.387732,
    lon: -112.036577 },
  { cdid: 44911288,
    type: 'Assault',
    date: '10/18/13 02:18 PM',
    address: '6400 BLOCK OF S 21ST ST',
    link: 'http://spotcrime.com/crime/44911288-c1efbbd1542fce8a7493223228763555',
    lat: 33.3892406,
    lon: -112.0363713 },
  { cdid: 44911226,
    type: 'Assault',
    date: '10/17/13 09:03 AM',
    address: '4600 BLOCK OF S 21ST ST',
    link: 'http://spotcrime.com/crime/44911226-a5da6b4674cce468c13441e5b5d72ac0',
    lat: 33.4048519,
    lon: -112.0374933 },
  { cdid: 44911141,
    type: 'Assault',
    date: '10/16/13 07:22 PM',
    address: '6400 BLOCK OF S 21ST PL',
    link: 'http://spotcrime.com/crime/44911141-08029f307406e3dad33f2067e09ad97f',
    lat: 33.3892621,
    lon: -112.0355023 },
  { cdid: 45171089,
    type: 'Assault',
    date: '10/16/13 06:00 PM',
    address: '1900 BLOCK OF E HIDALGO AV',
    link: 'http://spotcrime.com/crime/45171089-28227b4f9c26be35690c8dbfef697635',
    lat: 33.3937439,
    lon: -112.0403549 },
  { cdid: 45399029,
    type: 'Theft',
    date: '10/16/13 12:00 PM',
    address: '2300 BLOCK OF E HUNTINGTON DR',
    link: 'http://spotcrime.com/crime/45399029-c3330abb26eae61b51ac7e827197cd3c',
    lat: 33.3934823,
    lon: -112.0324101 },
  { cdid: 44910717,
    type: 'Robbery',
    date: '10/15/13 01:00 PM',
    address: '2200 BLOCK OF E SOUTHERN AV',
    link: 'http://spotcrime.com/crime/44910717-f9f834daa00f8191456c3125296b5112',
    lat: 33.393055,
    lon: -112.0343692 },
  { cdid: 44910713,
    type: 'Assault',
    date: '10/15/13 01:00 PM',
    address: '2300 BLOCK OF E SHERATON LA',
    link: 'http://spotcrime.com/crime/44910713-e41ea41b532986798080e6446812cc90',
    lat: 33.4011662,
    lon: -112.0320788 },
  { cdid: 44909910,
    type: 'Burglary',
    date: '10/14/13 10:25 PM',
    address: '2400 BLOCK OF E SOUTHERN AV',
    link: 'http://spotcrime.com/crime/44909910-0d6137ab2d47cf823ec67430d66d1108',
    lat: 33.3932169,
    lon: -112.0300395 },
  { cdid: 45039181,
    type: 'Robbery',
    date: '10/12/13 04:25 PM',
    address: '2400 BLOCK OF E SOUTHERN AV',
    link: 'http://spotcrime.com/crime/45039181-881d5c4a2b7d3fc1803607ccbcf4be4c',
    lat: 33.3932169,
    lon: -112.0300395 },
  { cdid: 44782000,
    type: 'Assault',
    date: '10/12/13 10:00 AM',
    address: '6400 BLOCK OF S 21ST ST',
    link: 'http://spotcrime.com/crime/44782000-b1495fa097bab2b2b7c06a8daa8f7662',
    lat: 33.3892406,
    lon: -112.0363713 },
  { cdid: 44781985,
    type: 'Theft',
    date: '10/12/13 02:30 AM',
    address: '5100 BLOCK OF S 18TH PL',
    link: 'http://spotcrime.com/crime/44781985-b77fdb76e43f57c8b6923955c1f40a60',
    lat: 33.4001492,
    lon: -112.0425218 },
  { cdid: 44781895,
    type: 'Arrest',
    date: '10/11/13 04:28 PM',
    address: '2000 BLOCK OF E BURGESS LA',
    link: 'http://spotcrime.com/crime/44781895-2a9588f327c3234480e1a276882f3372',
    lat: 33.3902173,
    lon: -112.0386689 } ]
