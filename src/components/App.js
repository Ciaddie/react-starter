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

