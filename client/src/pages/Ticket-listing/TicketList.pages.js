import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BreadcrumbComp from '../../Components/breadcrumb/breadcrumbComp'
import { SearchForm } from '../../Components/Search-Form/SearchForm.Comp'
import TicketTable from '../../Components/Ticket-Table/TicketTable.Comp'
import tickets from '../../assets/data/dummy-tickets.json';


export const TicketLists = () => {
    const[str, setStr] = useState('');
    const [displayTickets, setDisplayTickets] = useState(tickets);

    useEffect(() => {
        // setDisplayTickets(tickets);
    }, [str, displayTickets])
    

    const handleOnchange = e => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);
    }

    const searchTicket = (sttr) => {
        const displayTickets = tickets.filter((row) => 
        row.subject.toLowerCase().includes(sttr.toLowerCase())
        );
        
        console.log(displayTickets);
        setDisplayTickets(displayTickets);
    }

    
    return (
        <Container>
            <Row>
                <Col className="mt-3">
                <BreadcrumbComp page="Ticket Lists" />
                </Col>
            </Row>

            <Row>
                <Col className='mt-5'>
                    <Button variant='info'>Add New Ticket</Button>
                </Col>

                <Col className='text-end'>
                    <SearchForm handleOnchange={handleOnchange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="mt-5">
                    <TicketTable  tickets={displayTickets}/>
                </Col>
            </Row>
        </Container>
    )
}

