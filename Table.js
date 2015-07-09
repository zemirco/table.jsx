'use strict';

var React = require('react');



/**
 * Table component
 */
class Table extends React.Component {



  /**
   * Render component
   */
  render() {

    let {highlight} = this.props;

    var body = this.props.body.map((row, index) => {
      var emphasize = false;
      if (typeof highlight === 'number' && highlight === index ) {
        emphasize = true;
      } else if (Array.isArray(highlight)) {
        if (highlight[0] <= index && index <= highlight[1]) {
          emphasize = true;
        }
      }
      return (
        <Row key={index} highlight={emphasize}>
          {row}
        </Row>
      );
    });

    return (
      <table className="table table-hover">
        <tbody>
          {body}
        </tbody>
      </table>
    );
  }

}



/**
 * Row component
 */
class Row extends React.Component {



  /**
   * Property types
   */
  static propTypes = {
    color: React.PropTypes.string
  }



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

    var style = {
      backgroundColor: this.props.color
    };

    return (
      <tr style={this.props.highlight ? style : null}>
        {this.props.children.map((cell, index) =>
          <td key={index}>{cell}</td>
        )}
      </tr>
    );
  }

}



/**
 * Export component
 */
module.exports = Table;
