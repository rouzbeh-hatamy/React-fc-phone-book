import React, { useState, useEffect } from 'react';
import Table from '../Table/Table'
import Form from '../Form/Form'
import './styleContainer.scss'
function Container() {
    const [contacts, setContacts] = useState([]);
    const [animateForm, SetAnimateForm] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);

    const handelChange = event => {
        const { value } = event.target;
        setSearch(value);
    }

    const handleDelete = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id))
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
        setFiltered(contacts.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase())))
    }, [search, contacts])
    useEffect(()=>{
        fetch('https://jsonplaceholder.ir/users/')
        .then(response => response.json())
        .then(data=>setContacts(data))
    })

    return (
        <div className={`contain ${animateForm ? 'open-Form' : 'hide-form'}`}>
            <input type="text" name="search" onChange={handelChange} value={search} placeholder="search" />
            <div className="all">
                <Table contacts={filtered} handleDelete={handleDelete} showForm={showForm} toggleForm={toggleForm} />

                {
                    showForm ? <Form handleAdd={handleAdd} toggleForm={toggleForm} lastId={contacts[contacts.length - 1].id} /> : null

                }
            </div>
        </div>)

}

export default Container;