const App = () => {

  const favourites = ['React', 'Node', 'MongoDB', 'Express', 'JavaScript'];

  // [5, 4, 7, 7, 10]

  // create an empty array to store the list of favourite items as JSX elements or React elements
  const favouriteList = [];

  // loop through the favourites array
  for (let index = 0; index < favourites.length; index++){
    favouriteList.push(<li>{favourites[index]}</li>);
  }

  console.log(favouriteList);

  return (
    <>
      <h1>My Favourite List</h1>
      <ul>
        {favouriteList}
      </ul>
    </>
  )
}

export default App;