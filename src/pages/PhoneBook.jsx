import { useState } from 'react'
import axios from 'axios'

import Filter from "../components/persons/Filter.jsx";
import PersonForm from "../components/persons/PersonForm.jsx";
import Persons from "../components/persons/Person.jsx";

const PhoneBook = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '848658', id: 1 },
        { name: 'Ada Lovelace', number: '123', id: 2 },
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        const exists = persons.find(p => p.name === newName)
        if (exists) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        axios
            .post('http://localhost:3001/persons', personObject)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })
    }

    const handleFilterChange = (e) => setFilter(e.target.value)
    const handleNameChange = (e) => setNewName(e.target.value)
    const handleNumberChange = (e) => setNewNumber(e.target.value)

    const personsToShow =
        filter.trim() === ''
            ? persons
            : persons.filter(p =>
                p.name.toLowerCase().includes(filter.toLowerCase())
            )

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} onFilterChange={handleFilterChange} />

            <h3>Add a new</h3>
            <PersonForm
                onSubmit={addPerson}
                newName={newName}
                onNameChange={handleNameChange}
                newNumber={newNumber}
                onNumberChange={handleNumberChange}
            />

            <h2>Numbers</h2>
            <Persons persons={personsToShow} />
        </div>
    )
}

export default PhoneBook
