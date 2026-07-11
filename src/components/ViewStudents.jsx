import React, { useEffect, useState } from 'react';
// import NavBar from './NavBar';
import axios from 'axios';
import NavBar from './NavBar';

const ViewStudents = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container-fluid px-4 mt-4">
                <h2 className="mb-4 text-center">Student Placement Details</h2>
                <div className="table-responsive w-100">
                    <table className="table table-bordered table-striped table-hover align-middle w-100">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Reg No</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Aadhaar Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Branch</th>
                                <th scope="col">SSLC %</th>
                                <th scope="col">Plus Two %</th>
                                <th scope="col">UG Degree (Mark)</th>
                                <th scope="col">PG Degree (Mark)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{value.regNo}</td>
                                        <td>{value.fullName}</td>
                                        <td>{value.aadharNumber}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phoneNumber}</td>
                                        <td>{value.branch}</td>
                                        <td>{value.sslcMark}%</td>
                                        <td>{value.plusTwoMark}%</td>
                                        <td>{value.ugDegree} ({value.ugMark}%)</td>
                                        <td>{value.pgDegree ? `${value.pgDegree} (${value.pgMark}%)` : "N/A"}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewStudents;
