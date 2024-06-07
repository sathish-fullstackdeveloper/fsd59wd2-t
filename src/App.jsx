const App = () => {

   // destructuring the person object
   const { name: personName, age, location } = {
    name: 'John',
    age: 25,
    location: 'New York'
   }
  
  console.log(personName, age, location);

  return (
    <div>
      <h1>{personName}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default App;