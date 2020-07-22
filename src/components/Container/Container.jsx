import React, { useState, useEffect } from 'react';
import Table from '../Table/Table'
import Form from '../Form/Form'
import './styleContainer.scss'
function Container() {
    const [firstTime, setFirstTime] = useState(true)
    const [editContact, setEditContact] = useState({})
    const [contacts, setContacts] = useState([]);
    const [animateForm, SetAnimateForm] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [editmode, setEditmode] = useState(false)

    const handelChange = event => {
        const { value } = event.target;
        setSearch(value);
    }

    const handleDelete = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }
    const handleEdit = (contact) => {
        toggleForm();
        setEditmode(true)
        setEditContact(contact)
    }
    const updateContact = (contact) => {
        // let tempContact = contacts;
        //  tempContact.map(item => contact.id === item.id ? tempContact = contact: null )
        // setContacts(tempContact)
        console.log('1');
    }
    const toggleForm = () => {
        if (showForm) {
            SetAnimateForm(false)
            setTimeout(() => {
                setShowForm(false)
            }, 1000)
        } else {
            SetAnimateForm(true);
            setShowForm(true)
        }
    }

    const handleAdd = (obj) => {
        setContacts([...contacts, obj])
    }


    useEffect(() => {
        console.log('contacts');
        setFiltered(contacts.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase())))
    }, [search, contacts])

    useEffect(() => {
        if (firstTime) {
            fetch('https://jsonplaceholder.ir/users/')
                .then(response => response.json())
                .then(data => { setContacts(data) });
            setFirstTime(false)
        } else { return }
    }, [firstTime])


    return (
        <div className={`contain ${animateForm ? 'open-Form' : 'hide-form'}`}>
            <input type="text" name="search" onChange={handelChange} value={search} placeholder="search" />
            <div className="all">
                <Table contacts={filtered} handleDelete={handleDelete} handleEdit={handleEdit} showForm={showForm} toggleForm={toggleForm} />

                {
                    showForm ? <Form handleAdd={handleAdd} editmode={editmode} updateContact={updateContact} editContact={editContact} contacts={contacts} toggleForm={toggleForm} lastId={contacts[contacts.length - 1].id} /> : null

                }
            </div>
        </div>)

}

export default Container;