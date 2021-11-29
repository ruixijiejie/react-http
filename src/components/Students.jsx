import React, { Component } from "react";
import HTTP from '../utils/HTTP'

class Students extends Component {
    state = {
        grade: 2
    }
    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Grade NO.</th>
                    </tr>
                    </thead>
                    <tbody>
                        <HTTP.Get
                            url="http://localhost:8080/getStudents"
                            delay={1000}
                            loading={
                                <tr>
                                    <td colSpan="3" align="center">Data is loading...</td>
                                </tr>
                            }
                            error={
                                <tr>
                                    <td colSpan="3" align="center">Some error occured!</td>
                                </tr>
                            }
                        >
                            {
                                (data) => {
                                    return data.map(item => (
                                        <tr key={item.id}>
                                            <td>{ item.id }</td>
                                            <td>{ item.name }</td>
                                            <td>{ item.grade }</td>
                                        </tr>
                                    ))
                                }
                            }
                        </HTTP.Get>
                    </tbody>
                </table>
                <table border="1">
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Grade NO.</th>
                    </tr>
                    </thead>
                    <tbody>
                    <HTTP.Post
                        url="http://localhost:8080/getGradeStudents"
                        data={
                            {
                                grade: this.state.grade
                            }
                        }
                        delay={2000}
                        loading={
                            <tr>
                                <td colSpan="3" align="center">Data is loading...</td>
                            </tr>
                        }
                        error={
                            <tr>
                                <td colSpan="3" align="center">Some error occured!</td>
                            </tr>
                        }
                    >
                        {
                            (data) => {
                                return data.map(item => (
                                    <tr key={item.id}>
                                        <td>{ item.id }</td>
                                        <td>{ item.name }</td>
                                        <td>{ item.grade }</td>
                                    </tr>
                                ))
                            }
                        }
                    </HTTP.Post>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Students;
