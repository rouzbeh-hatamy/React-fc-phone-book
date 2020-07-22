import React, { useState, useEffect } from 'react';
import Table from '../Table/Table'
import Form from '../Form/Form'
import './styleContainer.scss'
function Container() {
    const [contacts, setContacts] = useState([]);
    const [animateForm, SetAnimateForm] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [search, setSearch] = useState('');
    let filtered = this.state.contacts.filter(item => item.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    
    const handelChange = event => {
        const { value } = event.target;
        setSearch(value);
    }
    return (
        <div className={`contain ${animateForm ? 'open-Form' : 'hide-form'}`}>
            <input type="text" name="search" onChange={handelChange} value={search} placeholder="search" />
            <div className="all">
                <Table contacts={filtered} handleDelete={this.handleDelete} showForm={this.state.showForm} toggleForm={this.toggleForm} />

                {
                    showForm ? <Form handleAdd={this.handleAdd} toggleForm={this.toggleForm} lastId={contacts[contacts.length - 1].id} /> : null

                }
            </div>
        </div>)

}

export default Container;