import { useState } from 'react'
import personService from '../services/Person.jsx'


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

        const existing = persons.find(p => p.name === newName)

        if (existing) {
            const ok = window.confirm(
                `${existing.name} est déjà dans le répertoire, remplacer le numéro ?`
            )
            if (!ok) return

            const updatedPerson = { ...existing, number: newNumber }

            personService
                .update(existing.id, updatedPerson) // -> PUT
                .then(returnedPerson => {
                    setPersons(persons.map(p => p.id !== existing.id ? p : returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
                .catch(() => {
                    alert(`Impossible de mettre à jour ${existing.name} (peut-être supprimé du serveur)`)
                    setPersons(persons.filter(p => p.id !== existing.id))
                })

            return
        }

        const personObject = { name: newName, number: newNumber }
        personService
            .create(personObject) // -> POST
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
    }


    const handleDelete = (id, name) => {
        const ok = window.confirm(`Delete ${name}?`)
        if (!ok) return

        personService
            .remove(id)
            .then(() => {
                setPersons(persons.filter(p => p.id !== id))
            })
            .catch(() => {
                alert(`Information of ${name} was already removed from server`)
                setPersons(persons.filter(p => p.id !== id))
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
            <Persons persons={personsToShow} handleDelete={handleDelete} />
        </div>
    )
}

export default PhoneBook
