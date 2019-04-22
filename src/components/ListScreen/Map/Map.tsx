import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    PixelRatio
} from 'react-native';
import MapView, {Polyline, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomMarker from './CustomMarker/CustomMarker';

interface Props {
    activeRoute: {
      arrivalTime: object,
      departureTime: object,
      distance: number,
      duration: object,
      key: string,
      legs: [
        {
          arrivalTime: object,
          color: string,
          departureTime: object,
          displayName: string,
          distance: number,
          duration: object,
          iconRef: string,
          places: [
            {
              city: string,
              country: string,
              location: {
                lat: number,
                lon: number
              },
              name: string,
              subtitle: string,
              title: string,
              type: string,
            }
          ],
          line: {
            code: string,
            iconRef: string,
            travelMode: string
          }
          shape: [
            [
              number, number
            ]
          ],
          travelMode: string
        }
      ],
      mainMode: string,
      preferred: boolean,
      request: {
        start: {
          location: {
            lat: number,
            lon: number
          }
        },
        end: {
          location: {
            lat: number,
            lon: number
          }
        },
        time: string,
        timeType: string
      },
      sortingIndex: number,
      source: object,
      totalPollution: number,
      totalPrice: object
    }
}

interface State {
  initialRegion: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
  }
}

class map extends React.Component<Props, State> {
    state = {
        initialRegion: {
            latitude: 60.189862,
            longitude: 24.921628,
            latitudeDelta: 0.0722,
            longitudeDelta: 0.0421,
        }
    }

    map: any

    mapReadyHandler = () => {
        this.map.fitToSuppliedMarkers(
          ["Start", "End"], 
          {
            edgePadding: {
              top: Platform.OS === "android" ? PixelRatio.getPixelSizeForLayoutSize(190) : 190, 
              right: Platform.OS === "android" ? PixelRatio.getPixelSizeForLayoutSize(100) : 100, 
              left: Platform.OS === "android" ? PixelRatio.getPixelSizeForLayoutSize(100) : 100,
              bottom: Platform.OS === "android" ? PixelRatio.getPixelSizeForLayoutSize(290) : 290
            }, 
            animated: true
          })
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView 
                    style={styles.map}
                    onMapReady={this.mapReadyHandler}
                    ref={(c: any) => this.map = c}
                    customMapStyle={mapStyle}
                    showsPointsOfInterest={false}
                    showsCompass={false}
                    showsBuildings={false}
                    showsTraffic={false}
                    showsIndoors={false}
                    pitchEnabled={false}
                    loadingEnabled={true}
                    provider={PROVIDER_GOOGLE}
                    showsMyLocationButton={false}
                    initialRegion={this.state.initialRegion}
                    showsUserLocation>
                      <Marker 
                      identifier="Start"
                      coordinate={{
                        latitude: this.props.activeRoute.request.start.location.lat,
                        longitude: this.props.activeRoute.request.start.location.lon,
                      }}>
                      <CustomMarker color="red" iconName="account-check" />
                    </Marker>
                    <Marker 
                    identifier="End"
                    coordinate={{
                      latitude: this.props.activeRoute.request.end.location.lat,
                      longitude: this.props.activeRoute.request.end.location.lon,
                    }}>
                      <CustomMarker color="orange" iconName="flag-checkered" />
                    </Marker>
                    {
                      this.props.activeRoute.legs.map(leg => {
                        const shapeArray = leg.shape.map(item => {
                            return {
                                latitude: item[0],
                                longitude: item[1]
                            }
                        })
                        return <Polyline 
                            coordinates={shapeArray}
                            strokeColor={leg.color}
                            strokeWidth={5}
                            key={Math.random()} /> 
                      })
                    }
                    {
                      this.props.activeRoute.legs.map(leg => {
                        if (leg.displayName === "Walk") {
                          return 
                        } else {
                          return (
                            <View key={Math.random()}>
                              <Marker 
                                key={Math.random()}
                                coordinate={{
                                  latitude: leg.places[0].location.lat,
                                  longitude: leg.places[0].location.lon
                                }}>
                                  <CustomMarker color={leg.color} size={20}  />
                                </Marker>
                               <Marker 
                                coordinate={{
                                  latitude: leg.places[leg.places.length -1].location.lat,
                                  longitude: leg.places[leg.places.length -1].location.lon
                                }}>
                                  <CustomMarker color={leg.color} size={20} />
                                </Marker> 
                            </View>
                            
                            )
                        }
                      })
                    }
                   
                   
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        zIndex: 0.5
    },
    map: {
        width: "100%",
        height: "100%"
    }
})

export default map;

const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]