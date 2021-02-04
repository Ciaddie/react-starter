import React from 'react';

class App extends React.Component {
  render(){
    var movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];
    return(
    <div>
      <h1>MovieList</h1>
      <div>
        <input type="search" id="search" name="name" placeholder="Search..."></input>
        <button>Go!</button>

      </div>
      <ul>
        <li>{movies[0].title}</li>
        <li>{movies[1].title}</li>
        <li>{movies[2].title}</li>
        <li>{movies[3].title}</li>
        <li>{movies[4].title}</li>
      </ul>
    </div>
  )}
}



export default App;

