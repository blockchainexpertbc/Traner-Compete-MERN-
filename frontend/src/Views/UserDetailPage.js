import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown } from 'react-bootstrap'
import { FaUsers } from 'react-icons/fa'
import { Line } from "react-chartjs-2";
import axios from 'axios';
import { baseURL } from '../Common/const';

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const colors = ["#742774", '#4f4f4f', '#55B4C5', 'white']

export default function UserDetailPage(props) {

    const [ selectedUser, setSelectedUser ] = useState({});
    const [ selectedUserDetail, setSelecteduserDetail ] = useState({});
    const [ firstChartData, setFirstChartdata ] = useState({});
    const [ secondChartData, setSecondChartdata ] = useState({});

    useEffect(() => {
        let labels = Object.keys(selectedUserDetail.ReportExercise == null? {} : selectedUserDetail.ReportExercise);
        let result = {labels: [], datasets: []};

        labels.map((key, i) => {
            result.labels.push(i+1);
            result.datasets.push({
                label: key.slice(5),
                data: selectedUserDetail.ReportExercise[labels[i]],
                fill: false,
                borderColor: colors[i]
            })
        })

        setSecondChartdata(result)
        result = { labels: [], datasets: [{label: 'experience', data: [], fill: false, borderColor: colors[0]}] }
        selectedUser.Details?.map((d, i) => {  
            result.labels.push(`experience ${i+1}`);
            result.datasets[0].data.push(d.ProgressiveHistoricalUser);
        })
        setFirstChartdata(result)
    }, [ selectedUserDetail ])

    useEffect(() => {
        axios.get(`${baseURL}/api/userDetail/${props.match.params.userId}`)
            .then(res => {
                setSelectedUser(res.data)
                setSelecteduserDetail(res.data.Details[0]);
            }) 
     
    }, [ props.match.params ])


    return (
        <div style={{margin: '20px'}}>
            <Row>
                <Col md={12}>
                    <span><FaUsers size={40} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '30px'}}>Players</span></span>
                </Col>
            </Row>
            <Row>
                <Col lg={3} sm={3} xl={3}>
                    <table className="table table-striped table-dark" style={{marginTop: '20px'}}>
                        <thead>
                            <tr style={{height: '60px', fontSize: '22px', color: "#55B4C5"}}>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{height: '40px', fontSize: '20px'}}>
                                <td>
                                    <span><FaUsers size={20} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '20px'}}>{selectedUser.Name}</span></span>
                                </td>
                            </tr>
                            <tr style={{height: '40px', fontSize: '20px'}}>
                                <td>
                                    <span><FaUsers size={20} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '20px'}}>{selectedUser.Email}</span></span>
                                </td>
                            </tr>
                            <tr style={{height: '40px', fontSize: '20px'}}>
                                <td>
                                    <span><FaUsers size={20} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '20px'}}>{selectedUser.ScholasticInstitute}</span></span>
                                </td>
                            </tr>
                            <tr style={{height: '40px', fontSize: '20px'}}>
                                <td>
                                    <span><FaUsers size={20} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '20px'}}>{selectedUser.Class}</span></span>
                                </td>
                            </tr>
                            <tr style={{height: '40px', fontSize: '20px'}}>
                                <td>
                                    <span><FaUsers size={20} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '20px'}}>{selectedUser.City}</span></span>
                                </td>
                            </tr>


                            
                        </tbody>
                    </table>
    
                </Col>

                <Col lg={3} sm={3} xl={3}>
                    <table className="table table-striped table-dark" style={{marginTop: '20px'}}>
                        <thead>
                            <tr style={{height: '60px', fontSize: '22px', color: "#55B4C5"}}>
                                <th scope="col">Overall score</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr  style={{height: '40px', fontSize: '20px', textAlign: 'center'}}>
                                <td>
                                    <Row>
                                        <span style={{fontSize: '100px', color: '#55B4C5'}}>85<span style={{fontSize: '100px', color: 'black'}}>/</span><span style={{fontSize: '30px', color: 'black'}}>100</span></span>
                                    </Row>
                                    <Row>
                                        <Container>
                                            <Row>
                                                <Col md={3}>
                                                    <div className='custom11-card'>
                                                        <div style={{fontSize: '10px'}}>Velocity</div>
                                                        <span style={{fontSize: '40px', color: '#55B4C5'}}>{Number.parseInt(selectedUserDetail.ReportExercise?.ArrayVelocity.reduce((memo, item) => { memo += item; return memo }, 0)/selectedUserDetail.ReportExercise?.ArrayVelocity.length)}<span style={{fontSize: '20px', color: 'black'}}>/</span><span style={{fontSize: '10px', color: 'black'}}>100</span></span>

                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='custom11-card'>
                                                        <div style={{fontSize: '10px'}}>Work Angle</div>
                                                        <span style={{fontSize: '40px', color: '#55B4C5'}}>{Number.parseInt(selectedUserDetail.ReportExercise?.ArrayWorkingAngle.reduce((memo, item) => { memo += item; return memo }, 0)/selectedUserDetail.ReportExercise?.ArrayWorkingAngle.length)}<span style={{fontSize: '20px', color: 'black'}}>/</span><span style={{fontSize: '10px', color: 'black'}}>100</span></span>

                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='custom11-card'>
                                                        <div style={{fontSize: '10px'}}>Orientaion Angle</div>
                                                        <span style={{fontSize: '40px', color: '#55B4C5'}}>{Number.parseInt(selectedUserDetail.ReportExercise?.ArrayAngleOrientation.reduce((memo, item) => { memo += item; return memo }, 0)/selectedUserDetail.ReportExercise?.ArrayAngleOrientation.length)}<span style={{fontSize: '20px', color: 'black'}}>/</span><span style={{fontSize: '10px', color: 'black'}}>100</span></span>

                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='custom11-card'>
                                                        <div style={{fontSize: '10px'}}>Distance</div>
                                                        <span style={{fontSize: '40px', color: '#55B4C5'}}>{Number.parseInt(selectedUserDetail.ReportExercise?.ArrayDistance.reduce((memo, item) => { memo += item; return memo }, 0)/selectedUserDetail.ReportExercise?.ArrayDistance.length)}<span style={{fontSize: '20px', color: 'black'}}>/</span><span style={{fontSize: '10px', color: 'black'}}>100</span></span>

                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                        </Container>

                                        
                                    </Row>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
    
                </Col>

                <Col lg={6} sm={6} xl={6}>
                    <table className="table table-striped table-dark" style={{marginTop: '20px'}}>
                        <thead>
                            <tr style={{height: '60px', fontSize: '22px', color: "#55B4C5"}}>
                                <th scope="col">PROGRESS</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr  style={{height: '40px', fontSize: '20px'}}>
                                <td>
                                
                                    <Line data={firstChartData}/>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
    
                </Col>

            </Row>
    
            <Row>
                <Col lg={6} sm={6} xl={6}>
                <Row style={{marginTop: '20px'}}>
                    <Col md={6}>
                        <span><FaUsers size={20} color="#55B4C5"/> <span style={{marginLeft: '10px', color: 'white', fontSize: '20px'}}>Experiences performed</span></span>
                    </Col>
                    <Col md={3}>
                        <span style={{fontSize: '20px', color: 'white'}}>Sort by</span>
                    </Col>
                    <Col md={3}>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another</Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
            </Row>

            <Row>
              <table className="table table-striped table-dark" style={{marginTop: '20px'}}>
                <thead>
                    <tr style={{ color: "#55B4C5"}}>
                        <th scope="col">#</th>
                        <th scope="col">type of welding</th>
                        <th scope="col">type of joint</th>
                        <th scope="col">Difficult</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedUser.Details?.map((d, i) => (
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{d.WeldType}</td>
                                <td>{d.JointType}</td>
                                <td>{d.DegreeDifficulty}</td>
                                <td>{`${new Date(d.createdAt).getDate()}/${new Date(d.createdAt).getMonth()}/${new Date(d.createdAt).getFullYear()}`}</td>
                            </tr>
                            
                        ))
                    }
                    
                </tbody>
                </table>
            </Row>
      
                </Col>

                <Col lg={6} sm={6} xl={6}>
                    <table className="table table-striped table-dark" style={{marginTop: '78px'}}>
                        <thead>
                            <tr style={{height: '60px', fontSize: '22px', color: "#55B4C5"}}>
                                <th scope="col">Exercise report</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr  style={{height: '40px', fontSize: '20px'}}>
                                <td>
                                
                                    <Line data={secondChartData}/>
                                
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
    
                </Col>

            </Row>
    
        </div>
    )
}
