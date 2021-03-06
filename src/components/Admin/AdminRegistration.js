import React from 'react';
// import './DoctorTable';
// import DoctorTable from './DoctorTable';
// import AppointmentPage from './AppointmentPage';

class AdminRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.getUsers
        }
    }



    render() {
        // const { onRouteChange } = this.props;

        return (
            <div>
                <p className='f2'>{`Welcome to Health-Hub, admin`}</p>
                <p><div className="pa4">
                    <div className="overflow-auto">
                        <table className="f6 w-100 mw8 center" cellSpacing="0">
                            <thead>
                                <tr className="stripe-dark">
                                    <th className="fw6 tl pa3 bg-white">ID</th>
                                    <th className="fw6 tl pa3 bg-white">Name</th>
                                    <th className="fw6 tl pa3 bg-white">Email</th>
                                    <th className="fw6 tl pa3 bg-white">Operation1</th>
                                    <th className="fw6 tl pa3 bg-white">Operation2</th>
                                </tr>
                            </thead>
                            <tbody className="lh-copy">
                                {
                                    this.state.users && this.state.users.map((users, i) => {
                                        return (
                                            <tr className="tl stripe-dark">
                                                <td className="pa3">{this.state.users[i].id}</td>
                                                <td className="pa3">{this.state.users[i].name}</td>
                                                <td className="pa3">{this.state.users[i].email}</td>

                                                <td
                                                    // onClick={}
                                                    className='f5 link dim black underline pa3 pointer'>Approve</td>
                                                <td
                                                    // onClick={}
                                                    className='f5 link dim black underline pa3 pointer'>Deny</td>

                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div></p>
            </div>
        );
    }
}


export default AdminRegistration;