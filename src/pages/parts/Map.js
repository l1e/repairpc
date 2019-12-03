import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../style/Map.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 48.450902,
            lng: 35.018797
        },
        zoom: 15
    };

    render() {
        return (
            <Container className='map'>
                <Row >
                    <Col lg='12'>
                    <div style={{ height: '60vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key:'AIzaSyAhEinEuiO3IXu7YxlgShb1fv9I47WA3Y8' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={48.450902}
                                lng={35.018797}
                                text="We are here"
                            />
                        </GoogleMapReact>
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Map;
