import React from 'react'
import { Table } from 'react-bootstrap'
const TicketTable = ({tickets}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ?
          tickets.map((row, i) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          )) :

          <tr>
          <td colSpan="4" className="text-center">No Tickets to show</td>
        </tr>
        }

      </tbody>
    </Table>
  ); 
}

export default TicketTable