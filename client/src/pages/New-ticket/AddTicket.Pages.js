import React from 'react'
import { Col, Container, Row } from'react-bootstrap';
import BreadcrumbComp from '../../Components/breadcrumb/breadcrumbComp';
export const AddTicket = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <BreadcrumbComp page="Dashboard"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
