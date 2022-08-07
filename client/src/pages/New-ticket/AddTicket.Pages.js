import React, {useState,useEffect} from 'react'
import { Col, Container, Row } from'react-bootstrap';
import BreadcrumbComp from '../../Components/breadcrumb/breadcrumbComp';
import {  AddTicketForm } from '../../Components/AddTicket-Form/AddTicketForm.Comp';

const initialFrmData = {

    Subject: "",
    IssueDate:"",
    Details: ""

};
export const AddTicket = () => {

    const[frmData, setFrmdata] = useState(initialFrmData);
    useEffect(() => {}, [frmData]);

    const changeHandler = e => {
        const{name,value} = e.target;

        setFrmdata({
            ...frmData,
            [name]:value
        })

        
    }

    const submitHandler = e =>{
        e.preventDefault()

        console.log("Form Data Received", frmData);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className='mt-3'>
                        <BreadcrumbComp page="NewTicket"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <AddTicketForm changeHandler={changeHandler} submitHandler={submitHandler} frmData={frmData} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
