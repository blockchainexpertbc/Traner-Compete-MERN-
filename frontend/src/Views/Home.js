import React, { useEffect, useState } from 'react'
import { Row, Col, Dropdown, Button } from 'react-bootstrap'
import { FaUsers } from 'react-icons/fa'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Home(props) {


    return (
        <div style={{margin: '20px'}}>
            <Row style={{marginTop: '30px'}}>
                <Col md={8}>
                    <span><FaUsers size={40} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '30px'}}>Players</span></span>
                </Col>
                <Col md={2}>
                    <span style={{fontSize: '20px', color: 'white'}}>Sort by</span>
                </Col>
                <Col md={2}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Name 
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                        Name
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>

            <Row>
              <table className="table table-striped table-dark" style={{marginTop: '20px'}}>
                <thead>
                    <tr style={{height: '60px', fontSize: '20px', color: "#55B4C5"}}>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">SurName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Scholasticlnstitute</th>
                        <th scope="col">Class</th>
                        <th scope="col">City</th>
                        <th scope="col">Percent</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user, index) => 
                            <tr key={index} style={{height: '40px', fontSize: '20px'}}>
                                <th scope="row">{index+1}</th>
                                <td>{user.Name}</td>
                                <td>{user.SurName}</td>
                                <td>{user.Email}</td>
                                <td>{user.ScholasticInstitute}</td>
                                <td>{user.Class}</td>
                                <td>{user.City}</td>
                                <td width={40} style={{marginRight: '20px'}}>
                                <CircularProgressbar
                                    value={30}
                                    text={`${30}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                        textColor: "white",
                                        pathColor: "#55B4C5",
                                        trailColor: "#333738"
                                    })}
                                />
                                </td>
                                <td>
                                    <Button variant="outline-primary" onClick={() => { props.history.push(`/userDetail/${user._id}`)}}>Detail</Button>
                                </td>
                            </tr>
                        )
                    }
                    
                    
                </tbody>
                </table>
            </Row>
     
        </div>
    )
}
