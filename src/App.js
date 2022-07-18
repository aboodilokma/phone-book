import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newName, setNewName] = useState('')
  const [newNumb, setNewNumb] = useState('')
  const [searchFilter, setFilter] = useState('')


  const handleNameChange = (event) => {

    const inputVal = event.target.value;
    
    setNewName(inputVal)
  }

  const handleNumbChange = (event) => {

    const inputVal = event.target.value;
    
    setNewNumb(inputVal)
  }

  const handleFilterChange = (event) => {

    const inputVal = event.target.value;
    
    setFilter(inputVal)
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObj = {name: newName, number: newNumb}

    const exists = (persons.find(p => JSON.stringify(p.name) === JSON.stringify(newName)) === undefined) ? setPersons(persons.concat(personObj)) : alert('name already exists')
    
    console.log('does the name exist ?', exists)

    setNewName('')
    setNewNumb('')
    
  }
 
  const toDisplay = (searchFilter === '') ? persons: persons.filter(p => p.name.toLowerCase().includes(searchFilter.toLowerCase()))

  return (
    <div>
      <Filter searchFilter = {searchFilter} handleFilterChange={handleFilterChange}/>
      
      <Form newName = {newName} newNumb = {newNumb} handleNameChange= {handleNameChange} handleNumbChange = {handleNumbChange} addPerson = {addPerson}/>
      <h2>Phonebook</h2>
      <Phonebook toDisplay = {toDisplay}/>
    </div>
  )
}

const Phonebook = ({toDisplay}) => {

  return(
    <>
      <ul>{toDisplay.map(person => <li> {person.name}: {person.number} </li>)}</ul>
    </>

  )
}

const Form = ({newName, newNumb, handleNameChange, handleNumbChange, addPerson}) => {
  return(
    <>
      <h2>Add a new contact:</h2>
        <form onSubmit = {addPerson}>
          <div>
            name: <input value= {newName} onChange = {handleNameChange}/>
            <br></br>
            number: <input value= {newNumb} onChange = {handleNumbChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </>
  )
}

const Filter = ({searchFilter, handleFilterChange}) => {
  return(
  <>
    <h2>Filter phonebook:</h2>
        <div>
          Filter: <input value = {searchFilter} onChange = {handleFilterChange}/>
        </div>
  </>)
}

export default App