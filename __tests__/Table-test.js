'use strict';

var React = require('react/addons');
var Table = require('../Table');
var TestUtils = React.addons.TestUtils;



describe('Table', () => {

  it('should work', () => {
    var instance = TestUtils.renderIntoDocument(
      <Table />
    );
    var table = TestUtils.findRenderedDOMComponentWithClass(instance, 'table');
    expect(React.findDOMNode(table)).toBeTruthy();
  });

  // it('should render some rows', () => {
  //   var instance = TestUtils.renderIntoDocument(
  //     <Table body={[['one', 'two', 'three'], ['four', 'five', 'six']]} />
  //   );
  //   var rows = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'tr');
  //   // console.log(rows[0]);
  //   expect(React.findDOMNode(rows[0]).textContent).toEqual('onetwothree');
  //   // expect(React.findDOMNode(rows[1]).textContent).toEqual('fourfivesix');
  // });

  // it('should render the header', () => {
  //
  // });
  //
  // it('should highlight some rows', () => {
  //
  // });

});
