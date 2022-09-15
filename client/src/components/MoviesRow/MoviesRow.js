import React from "react";
import { Col, Row, Typography} from "antd";
const { Title } = Typography;

function MoviesRows({image, movieId, title, text}) {
    return (
        <Col lg={4} md={4} xs={4}>
            <div style={{position: 'relative',}}>
            <a href={`/movie/${movieId}`}>
            <img style = {{height: '500px',
                            background:
                            `linear-gradient(to bottom, rgba(0,0,0,0)
                    39%,rgba(0,0,0,0)
                    41%,rgba(0,0,0,0.65)
                    100%),, #1c1c1c`,
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '100%',
                position: 'relative'}} alt src={image} />
            </a>
            </div>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }} >
                    <Title style={{ color: 'white' }} level={2} > {title} </Title>
                    <p style={{ color: 'white', fontSize: '1rem' }}  >{text} </p>
                </div>
            </div>
        </Col>
    )
}
export default MoviesRows