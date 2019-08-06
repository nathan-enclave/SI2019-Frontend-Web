import React, {Component} from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker
} from "react-simple-maps"
import {Motion, spring} from "react-motion"

const json_dump = [
    {
        "city": "Singapore",
        "location": {
            "longitude": 103.8558,
            "latitude": 1.293
        },
        "country": "Singapore"
    },
    {
        "city": "New York",
        "location": {
            "longitude": -74.6909,
            "latitude": 41.3782
        },
        "country": "United States"
    },
    {
        "city": "Sydney",
        "location": {
            "longitude": 151.1852,
            "latitude": -33.92
        },
        "country": "Australia"
    },
    {
        "city": "Beijing",
        "location": {
            "longitude": 116.3883,
            "latitude": 39.9289
        },
        "country": "China"
    },
    {
        "city": "Shanghai",
        "location": {
            "longitude": 121.4365,
            "latitude": 31.2165
        },
        "country": "China"
    },
    {
        "city": "Tokyo",
        "location": {
            "longitude": 139.7514,
            "latitude": 35.685
        },
        "country": "Japan"
    },
    {
        "city": "London",
        "location": {
            "longitude": -0.1167,
            "latitude": 51.5
        },
        "country": "United Kingdom"
    },
    {
        "city": "Manchester",
        "location": {
            "longitude": -2.248,
            "latitude": 53.5004
        },
        "country": "United Kingdom"
    },
    {
        "city": "Ho Chi Minh City",
        "location": {
            "longitude": 106.695,
            "latitude": 10.78
        },
        "country": "Vietnam"
    },
    {
        "city": "Da Nang",
        "location": {
            "longitude": 108.25,
            "latitude": 16.06
        },
        "country": "Vietnam"
    },
    {
        "city": "Moscow",
        "location": {
            "longitude": -116.9986,
            "latitude": 46.7307
        },
        "country": "United States"
    },
    {
        "city": "Mumbai",
        "location": {
            "longitude": 72.857,
            "latitude": 19.017
        },
        "country": "India"
    },
    {
        "city": "Manila",
        "location": {
            "longitude": 120.9822,
            "latitude": 14.6042
        },
        "country": "Philippines"
    },
    {
        "city": "Dhaka",
        "location": {
            "longitude": 90.4086,
            "latitude": 23.7231
        },
        "country": "Bangladesh"
    },
    {
        "city": "Istanbul",
        "location": {
            "longitude": 29.01,
            "latitude": 41.105
        },
        "country": "Turkey"
    },
    {
        "city": "Jakarta",
        "location": {
            "longitude": 106.8294,
            "latitude": -6.1744
        },
        "country": "Indonesia"
    },
    {
        "city": "New Delhi",
        "location": {
            "longitude": 77.2,
            "latitude": 28.6
        },
        "country": "India"
    },
    {
        "city": "Seoul",
        "location": {
            "longitude": 126.9997,
            "latitude": 37.5663
        },
        "country": "Korea, South"
    },
    {
        "city": "S\u00e3o Paulo",
        "location": {
            "longitude": -46.625,
            "latitude": -23.5587
        },
        "country": "Brazil"
    },
    {
        "city": "Mexico City",
        "location": {
            "longitude": -99.131,
            "latitude": 19.4424
        },
        "country": "Mexico"
    },
    {
        "city": "Los Angeles",
        "location": {
            "longitude": -118.4068,
            "latitude": 34.1139
        },
        "country": "United States"
    },
    {
        "city": "Vancouver",
        "location": {
            "longitude": -123.1216,
            "latitude": 49.2734
        },
        "country": "Canada"
    },
    {
        "city": "Bangkok",
        "location": {
            "longitude": 100.5166,
            "latitude": 13.75
        },
        "country": "Thailand"
    },
    {
        "city": "Paris",
        "location": {
            "longitude": 2.3333,
            "latitude": 48.8667
        },
        "country": "France"
    },
    {
        "city": "Wellington",
        "location": {
            "longitude": 175.6456,
            "latitude": -40.9439
        },
        "country": "New Zealand"
    },
    {
        "city": "Amsterdam",
        "location": {
            "longitude": 4.9166,
            "latitude": 52.35
        },
        "country": "Netherlands"
    },
    {
        "city": "Chicago",
        "location": {
            "longitude": -87.6861,
            "latitude": 41.8373
        },
        "country": "United States"
    },
    {
        "city": "Washington",
        "location": {
            "longitude": -122.8908,
            "latitude": 38.9072
        },
        "country": "United States"
    }
]

const citiesFormatted = []
json_dump.forEach(e=>{
    citiesFormatted.push({
        name: e.city,
        coordinates:[e.location.longitude, e.location.latitude]
    })
}) 
class AnimatedMap extends Component {
    constructor() {
        super()
        this.state = {
            center: [
                0, 20
            ],
            zoom: 1
        }
        this.handleZoomIn = this
            .handleZoomIn
            .bind(this)
        this.handleZoomOut = this
            .handleZoomOut
            .bind(this)
        this.handleCityClick = this
            .handleCityClick
            .bind(this)
        this.handleReset = this
            .handleReset
            .bind(this)
    }
    handleZoomIn() {
        this.setState({
            zoom: this.state.zoom * 2
        })
    }
    handleZoomOut() {
        this.setState({
            zoom: this.state.zoom / 2
        })
    }
    handleCityClick(city) {
        this.setState({zoom: 5, center: city.coordinates})
    }
    handleReset() {
        this.setState({
            center: [
                0, 20
            ],
            zoom: 1
        })
    }
    render() {
        return (
            <div className="AnimatedMap">
                <div className="action-list margin-bottom-10">
                    <button onClick={this.handleZoomIn} className="btn green-meadow margin-left-md">
                        {"Zoom in"}
                    </button>
                    <button
                        onClick={this.handleZoomOut}
                        className="btn blue-chambray  margin-left-md">
                        {"Zoom out"}
                    </button>
                    <button onClick={this.handleReset} className="btn red-haze  margin-left-md">
                        {"Reset"}
                    </button>
                </div>
                <div className="MainMap">
                    <Motion
                        defaultStyle={{
                        zoom: 1,
                        x: 0,
                        y: 20
                    }}
                        style={{
                        zoom: spring(this.state.zoom, {
                            stiffness: 210,
                            damping: 20
                        }),
                        x: spring(this.state.center[0], {
                            stiffness: 210,
                            damping: 20
                        }),
                        y: spring(this.state.center[1], {
                            stiffness: 210,
                            damping: 20
                        })
                    }}>
                        {({zoom, x, y}) => (
                            <ComposableMap
                                projectionConfig={{
                                scale: 205
                            }}
                                width={980}
                                height={500}
                                style={{
                                width: "100%",
                                height: "auto"
                            }}>
                                <ZoomableGroup center={[x, y]} zoom={zoom}>
                                    <Geographies geography="/static/world-110m.json">
                                        {(geographies, projection) => geographies.map((geography, i) => geography.id !== "010" && (<Geography
                                            key={i}
                                            geography={geography}
                                            projection={projection}
                                            style={{
                                            default: {
                                                fill: "#ECEFF1",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: "#CFD8DC",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none"
                                            },
                                            pressed: {
                                                fill: "#FF5722",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none"
                                            }
                                        }}/>))}
                                    </Geographies>
                                    <Markers>
                                        {this.props.data.map((city, i) => (
                                            <Marker key={i} marker={city} onClick={this.handleCityClick}>
                                                <circle cx={0} cy={0} r={10} fill="#FF5722" stroke="#DF3702">123</circle>
                                                <text cursor={"pointer"} x={0} y={0} fill="white"  textAnchor="middle" fontSize="10px" alignmentBaseline="middle"> {city.numProjects} </text>
                                            </Marker>
                                        ))}
                                    </Markers>
                                </ZoomableGroup>
                            </ComposableMap>
                        )}
                    </Motion>

                </div>

            </div>
        )
    }
}

export default AnimatedMap