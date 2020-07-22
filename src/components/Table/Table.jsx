import React from 'react';
import Tbody from '../TBody/Tbody'
import './TableStyle.scss'
function table(props) {


        const { contacts, showForm, toggleForm } = props
        return (
            <div id="table" className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead text-primary bg-light">
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>username</th>
                            <th>phone number</th>
                            <th>email</th>
                            <th>company</th>
                            <th>website</th>
                            <th id="action">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((item) => (
                            <Tbody key={item.id} contact={item} handleDelete={() => props.handleDelete(item.id)} />))}
                    </tbody>
                </table>
                <button className="btn btn-success mx-4 " onClick={toggleForm}>{showForm ? 'close' : 'add'}</button>
            </div>
        );
    
}

export default table;