import { useState } from 'react'

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

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    const personsToShow =
        filter.trim() === ''
            ? persons
            : persons.filter(p =>
                p.name.toLowerCase().includes(filter.toLowerCase())
            )

    return (
        <div>
            <h2>Phonebook</h2>

            <div>
                filter shown with:{' '}
                <input
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>

            <h3>Add a new</h3>
            <form onSubmit={addPerson}>
                <div>
                    name:{' '}
                    <input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div>
                    number:{' '}
                    <input
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                    />
                </div>
                <button type="submit">add</button>
            </form>

            <h2>Numbers</h2>
            <ul>
                {personsToShow.map(person => (
                    <li key={person.id}>
                        {person.name} {person.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PhoneBook
