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
class AnimatedMap extends Component {
    constructor() {
        super()
        this.state = {
            center: [
                0, 20
            ],
            zoom: 1,
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
        this.handleCityHover = this
            .handleCityHover
            .bind(this)
        this.handleCityUnHover = this
            .handleCityUnHover
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
        this.setState({zoom: 4, center: city.coordinates})
    }
    handleCityHover(city, e) {
        const rect = this.AnimatedMap.getBoundingClientRect()
        const parent = {
            left:window.pageXOffset + rect.left,
            top: window.pageYOffset + rect.top
        } 
        //set postion for tooltip
        this.cityTooltip.classList.add('active')
        this.cityTooltip.style.left = `${e.pageX - parent.left}px`
        this.cityTooltip.style.top = `${e.pageY - parent.top - 50}px` 
        this.cityTooltip.innerHTML =`${city.name} (${city.numProjects})`
    }
    handleCityUnHover(city) {
        this.cityTooltip.classList.remove('active')
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
            <div className="AnimatedMap" ref={(el) => {
                this.AnimatedMap = el
            }}>
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
                            damping: 40
                        }),
                        x: spring(this.state.center[0], {
                            stiffness: 210,
                            damping: 40
                        }),
                        y: spring(this.state.center[1], {
                            stiffness: 210,
                            damping: 40
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
                                                strokeWidth: 0.25,
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: "#CFD8DC",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.45,
                                                outline: "none"
                                            },
                                            pressed: {
                                                fill: "#00b894",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.45,
                                                outline: "none"
                                            }
                                        }}/>))}
                                    </Geographies>
                                    <Markers>
                                        {this
                                            .props
                                            .data
                                            .map((city, i) => (
                                                <Marker
                                                    key={i}
                                                    marker={city}
                                                    onClick={this.handleCityClick}
                                                    onMouseEnter={this.handleCityHover}
                                                    onMouseLeave={this.handleCityUnHover}>
                                                    <circle
                                                        cursor={"pointer"}
                                                        cx={0}
                                                        cy={0}
                                                        r={3}
                                                        fill="#FF5722"
                                                        stroke="#DF3702"
                                                       ></circle>
                                                </Marker>
                                            ))}
                                    </Markers>
                                </ZoomableGroup>
                            </ComposableMap>
                        )}

                    </Motion>
                </div>
                <div
                        className='cityTooltip'
                        ref={(el) => {
                        this.cityTooltip = el
                    }}></div>
            </div>
        )
    }
}

export default AnimatedMap