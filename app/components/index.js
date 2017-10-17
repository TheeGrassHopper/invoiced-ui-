import React from 'react';

const data = [
	{name: "Zack Siri", email: "zack@codemy.net", id: 1},
	{name: "Mike Siri", email: "Mike@codemy.net", id: 2},
	{name: "Tom Siri", email: "Tom@codemy.net", id: 3}
];

const Contact = (props) =>
	<div className="pure-u-1-3">
		<h2> {props.name} </h2>
		<p> {props.email} </p>
	</div>;

class Layout extends React.Component {
  render() {
    return(
      <div id='Layout' className='pure-g'>
      {data.map(info =>
	      <Contact name={info.name} email={info.email} />      	
      	)}
      </div>

    );
  }
}

export default Layout;
