import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BreadcrumbComp from '../../Components/breadcrumb/breadcrumbComp'
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../Components/Message-history/MessageHistory.comp';
import { UpdateTicket } from '../../Components/Update-Ticket/UpdateTicket.Comp';
import {useParams} from 'react-router-dom';

// const ticket = tickets[0];

export const Ticket= () => {
    const {tId} = useParams();
    const[message, setMessage] = useState('');
    const [ticket, setTicket] = useState("");

    useEffect(() => { for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
    }       
    }
    }, [message, tId])

    const changeHandler = e => {
        setMessage(e.target.value);
    }

    const submitHandler = e => {
        alert('form Submitted!')
    }
    
    return (
        <Container>
            <Row>
                <Col className='mt-3'>
                    <BreadcrumbComp page="Ticket" />
                </Col>
            </Row> 

            <Row>
                <Col className= ' mt-3 text-weight-bold text-secondary'>

                    <div className='subject'>Subject: {ticket.subject} </div>
                    <div className='date'>Ticket Opened: {ticket.addedAt} </div>
                    <div className='status'>status: {ticket.status} </div>

                </Col>

                <Col className='text-end'>
                    <Button  variant="outline-secondary">Close Ticket</Button>
                </Col>
            </Row>

            <Row className='mt5'>
                <Col>
                { ticket.history && <MessageHistory msg={ticket.history} /> }
                </Col>
            </Row>

            <Row className='mt4'>
                <Col>
                    <UpdateTicket  msg={message} changeHandler={changeHandler} submitHandler={submitHandler} />
                </Col>
            </Row>
        </Container>
    )
}
