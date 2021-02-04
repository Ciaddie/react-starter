import React from 'react';

class App extends React.Component {
  render(){
    // var movies = [
    //   {title: 'Mean Girls'},
    //   {title: 'Hackers'},
    //   {title: 'The Grey'},
    //   {title: 'Sunshine'},
    //   {title: 'Ex Machina'},
    // ];
    return(
    <div>
      <h1>MovieList</h1>
      <ul>
        <li>Mean Girls</li>
        <li>Hackers</li>
        <li>The Grey</li>
        <li>Sunshine</li>
        <li>Ex Machina</li>
      </ul>
    </div>
  )}
}

export default App;

