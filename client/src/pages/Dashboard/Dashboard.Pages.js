import React from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import TicketTable from '../../Components/Ticket-Table/TicketTable.Comp'
import tickets from '../../assets/data/dummy-tickets.json'
import BreadcrumbComp from '../../Components/breadcrumb/breadcrumbComp';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return ( 
        <Container className="mt-4 mb-4">
            <Row>
                <Col>
                    <BreadcrumbComp page = "Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <Link to="/add-ticket">
                        <Button variant="outline-success" style={{"fontSize":"20px", "padding":"10px 30px", "overflow":"hidden"}}>Add New Ticket</Button>
                    </Link >
                </Col>
            </Row>
            <Row>
                <Col className='text-center'  style={{"marginTop":"20px"}}>
                    <div>Total Tickets:50</div>
                    <div>Pending Tickets:05</div>
                </Col>
            </Row>
            <Row>
                <Col className= "mt-3"  >Recently Added Tickets</Col>
            </Row>
            <hr />

            <Row>
                <Col className="recent Ticket"  >
                    <TicketTable tickets={tickets}/>
                </Col>
            </Row> 
    
        </Container>
    )
}

export default Dashboard