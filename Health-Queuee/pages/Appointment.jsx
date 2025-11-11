import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Table, Card, Form } from 'react-bootstrap';
import './Appointments.css'; 

const Appointments = () => {
    const appointmentData = [
        { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '08.00-09.00' },
        { name: 'นายเอบีซี', phone: '0942513799', type: 'อายุรกรรม', time: '08.00-09.00' },
        { name: 'นายเอบีซี', phone: '0942513799', type: 'จิตเวช', time: '08.00-09.00' },
        { name: 'นายเอบีซี', phone: '0942513799', type: 'แพคเกจตรวจสุขภาพ', time: '08.00-09.00' },
        { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '08.00-09.00' },
        { name: 'นายเอบีซี', phone: '0942513799', type: 'ศัลยกรรม', time: '0942513799', time: '08.00-09.00' },
        { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '08.00-09.00' },
        { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '08.00-09.00' },
    ];

    const notificationData = [
        { id: 1, name: 'นาย-----------------------', note: 'ขอยกเลิกนัด', date: '17/11/2568' },
        { id: 2, name: 'นาย-----------------------', note: 'เลื่อนนัด', date: '19/11/2568' },
        { id: 3, name: 'นาย-----------------------', note: 'คิวใหม่', date: '19/11/2568' },
        { id: 4, name: 'นาย-----------------------', note: 'เลื่อนนัด', date: '20/11/2568' },
    ];

    // Helper Card component for the Queue status boxes
    const StatusCard = ({ icon, label, count, className }) => (
        <Card className={`text-center p-3 shadow-sm ${className}`} style={{ minWidth: '150px', borderLeft: '5px solid #007bff' }}>
            <div className="d-flex align-items-center justify-content-start">
                <i className={`${icon} display-6 me-3`}></i>
                <div>
                    <Card.Text className="mb-0 text-muted small">{label}</Card.Text>
                    <Card.Title className="mb-0 h4">{count}</Card.Title>
                </div>
            </div>
        </Card>
    );

    return (
        <Container fluid className="p-0" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <Row className="g-0">
                {/* --- Left Sidebar --- */}
                <Col xs={2} className="bg-dark text-white p-3 sidebar" style={{ minHeight: '100vh' }}>
                    <h2 className="text-white mb-4">Health-Queue</h2>
                    <div className="d-flex align-items-center mb-4">
                        <div className="rounded-circle bg-white" style={{ width: '40px', height: '40px', marginRight: '10px' }}></div>
                        <div>
                            <p className="mb-0 small">ชื่อ-นามสกุล</p>
                            <p className="mb-0 small">ชื่อโรงพยาบาล</p>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <Button variant="primary" className="w-100 text-start active">
                                รายการนัด
                            </Button>
                        </li>
                        <li className="mb-2">
                            <Button variant="link" className="text-white w-100 text-start">
                                จัดการคนไข้
                            </Button>
                        </li>
                        <li className="mb-2">
                            <Button variant="link" className="text-white w-100 text-start">
                                จัดการหมอ
                            </Button>
                        </li>
                        <li className="mb-2">
                            <Button variant="link" className="text-white w-100 text-start">
                                จัดการข้อมูลอื่นๆ
                            </Button>
                        </li>
                    </ul>
                </Col>

                {/* --- Main Content --- */}
                <Col xs={10} className="p-4">
                    <Row className="mb-4">
                        <Col xs={12}>
                            <Form.Control
                                type="text"
                                placeholder="All Queue Date 2/11/68"
                                className="p-2 border rounded shadow-sm"
                                style={{ width: '300px', backgroundColor: '#e9ecef', fontWeight: 'bold' }}
                                disabled // To match the non-editable appearance in the image
                                value="All Queue Date 2/11/68"
                            />
                        </Col>
                    </Row>

                    {/* --- Queue Status Cards --- */}
                    <Row className="mb-5 g-4">
                        <Col md={4} lg={3}>
                            {/* The icon in the image looks like an hourglass with an arrow inside */}
                            <StatusCard icon="bi-hourglass-split text-warning" label="Waiting Queues" count="5" className="border-warning" />
                        </Col>
                        <Col md={4} lg={3}>
                            <StatusCard icon="bi-x-circle-fill text-danger" label="Canceled Visited" count="1" className="border-danger" />
                        </Col>
                        <Col md={4} lg={3}>
                            {/* The icon in the image looks like a calendar with a check */}
                            <StatusCard icon="bi-calendar2-check-fill text-info" label="เลื่อนนัด" count="2" className="border-info" />
                        </Col>
                    </Row>
                    
                    {/* --- Appointments Table --- */}
                    <h5 className="mb-3 text-secondary">ตารางนัดหมาย</h5>
                    <div className="table-responsive shadow-sm bg-white rounded">
                        <Table striped hover responsive className="mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>ชื่อคนไข้</th>
                                    <th>เบอร์โทรศัพท์</th>
                                    <th>ประเภทการจอง</th>
                                    <th>วันเวลา</th>
                                    <th>รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointmentData.map((appointment, index) => (
                                    <tr key={index}>
                                        <td>{appointment.name}</td>
                                        <td>{appointment.phone}</td>
                                        <td>{appointment.type}</td>
                                        <td>{appointment.time}</td>
                                        <td><Button variant="outline-primary" size="sm">Details</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    
                    <hr className="my-5" />

                    {/* --- Doctor Notifications Table --- */}
                    <h5 className="mb-3 text-secondary">แจ้งเตือนหมอ (คิวใหม่, ขอลเลื่อนนัด, ยกเลิก)</h5>
                    <div className="table-responsive shadow-sm bg-white rounded">
                        <Table hover responsive className="mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>ลำดับ</th>
                                    <th>รายชื่อ</th>
                                    <th>หมายเหตุ</th>
                                    <th>วันที่เปลี่ยน</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notificationData.map((notification) => (
                                    <tr key={notification.id}>
                                        <td>{notification.id}</td>
                                        <td>{notification.name}</td>
                                        <td>{notification.note}</td>
                                        <td>{notification.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Appointments;