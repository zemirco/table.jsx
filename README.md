
# table.jsx

React Table component

## Installation

```
$ npm install table.jsx
```

## Usage

```js
var React = require('react');
var Table = require('table.jsx');

class App extends React.Component {

  render() {

    var head = [
      'Left', 'Center', 'Right'
    ];

    var body = [
      ['horse', 'dog', <a href="#">cat</a>],
      ['steve', 'john', <a href="#">max</a>],
      ['milk', 'water', <a href="#">tea</a>],
      ['volleyball', 'skiing', <a href="#">diving</a>]
    ];

    return (
      <div>
        <Table head={head} body={body} highlight={[1, 3]} />
      </div>
    );
  }

}

React.render(<App />, document.getElementById('react'));
```

## Test

```
$ make test
```

## License

MIT
