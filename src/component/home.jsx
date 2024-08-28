import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import { Container } from 'reactstrap';



export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {console.log(data)}
            <h1>Home</h1>
            <Container fluid="md">
            <Row>
            <Col>

            <Table striped size="sm">
                <thead>
                    <tr className="table-success">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}, {user.address.suite}, {user.address.city}</td>
                            <td>{user.phone}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>
            </Col>
            </Row>
            </Container>
        </div>
    );
};
