import React from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import TicketTable from '../../../Components/Ticket-Table/TicketTable'
import tickets from '../../../assets/data/dummy-tickets.json';

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center' mt-5 mb-2>
                    <Button variant="outline-success" style={{"fontSize":"20px", "padding":"10px 30px", "overflow":"hidden"}}>Add New Ticket</Button>
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