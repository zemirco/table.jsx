'use strict';

var React = require('react');



/**
 * Table component
 */
class Table extends React.Component {



  /**
   * Default properties
   */
  static defaultProps = {
    color: '#fff8dc'
  }



  /**
   * Render component
   */
  render() {

    let {highlight, color} = this.props;

    var head = (
      <tr>
        {this.props.head.map((cell, j) =>
          <th key={j}>{cell}</th>
        )}
      </tr>
    );

    var body = this.props.body.map((row, i) => {
      var emphasize = false;
      if (typeof highlight === 'number' && highlight === i ) {
        emphasize = true;
      } else if (Array.isArray(highlight)) {
        if (highlight[0] <= i && i <= highlight[1]) {
          emphasize = true;
        }
      }
      return (
        <tr key={i} style={emphasize ? {backgroundColor: color} : null}>
          {row.map((cell, j) =>
            <td key={j}>{cell}</td>
          )}
        </tr>
      );
    });

    return (
      <table className="table table-hover">
        <thead>
          {head}
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    );
  }

}



/**
 * Export component
 */
module.exports = Table;
