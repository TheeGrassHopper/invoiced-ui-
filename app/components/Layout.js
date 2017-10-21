import React from 'react';
import Contact from './Contact'
import data from './data'

class Layout extends React.Component {

	componentWillMount(){
		this.setState({
			contacts: data,
		})
	}

	addContact = (e) => {
		e.preventDefault()
		const contact = this.state.contacts
		const newId = contact[contact.length - 1].id + 1
		console.log('newId',newId)
		this.setState({
			contacts: contact.concat({id: newId, name:`New Contact-${newId}`, email: `${newId}@example.com` }) 
		})
	}


  render() {
    return(
    	<div id='Layout'>
    	<a href="#" className="pure-button" onClick={this.addContact}>Add Contact</a>
	      <div className='pure-g'>
	      {this.state.contacts.map(info =>
		      <Contact key={info.id} {...info} />
	      	)}
	      </div>
      </div>

    );
  }
}

export default Layout;
