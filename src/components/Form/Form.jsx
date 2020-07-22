import React, { useState, useEffect } from 'react';
import './Form.scss';
import Swal from 'sweetalert2';

function Form(props) {
    let [newContact, setNewContact] = useState({
        id: 1,
        name: '',
        username: '',
        phone: '',
        email: '',
        company: '',
        website: '',
    })
    const [ids, setIds] = useState([]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewContact({ ...newContact, id: props.lastId + 1, [name]: value });
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        const { name, username, phone, email, company, website } = newContact
        if ((name && username && phone && email && company && website) === '') {
            alert(' هيچ ورودي نبايد خالي باشد')
        } else if (ids.includes(newContact.id)) {
            props.updateContact(newContact)
            props.toggleForm()
        } else {
            props.handleAdd(newContact)
            props.toggleForm();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'اضافه شد',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
    useEffect(() => {
        if (props.editmode) {
            setNewContact(props.editContact)
        }
    }, [props.editContact, props.editmode]);


    useEffect(() => {
        let ids = props.contacts.map(item => item.id)
        setIds(ids)
    }, [newContact, props.contacts]);


    const { name, username, phone, email, company, website } = newContact
    return (
        <div id="form">
            <form id="form_contact" onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="id_name">name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id_name"
                        name="name"
                        onChange={handleChange} value={name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_last_name">username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id_last_name"
                        name="username"
                        onChange={handleChange} value={username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_Phone_number">phone number</label>
                    <input
                        type="phone"
                        className="form-control"
                        id="id_Phone_number"
                        name="phone"
                        onChange={handleChange} value={phone}
                    /></div>
                <div className="form-group">
                    <label htmlFor="id_email">email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="id_email"
                        name="email"
                        onChange={handleChange} value={email}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="id_company">company name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id_company"
                        name="company"
                        onChange={handleChange} value={company}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_website">website</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id_website"
                        name="website"
                        onChange={handleChange} value={website}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default Form;