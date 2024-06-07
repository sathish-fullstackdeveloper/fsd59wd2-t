const App = () => {

  const favourites = ['ReactJS', 'Node', 'MongoDB', 'Express', 'JavaScript'];

  return (
    <>
      <h1>My Favourite List</h1>
      <ul>
        {
          favourites.map((item, index) => {
            return <li key={index}>{ item }</li>
          })
        }
      </ul>
    </>
  )
}

export default App;