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
			contacts: contact.concat({id: newId, name: this.refs.name.value, email: this.refs.email.value }) 
		})
		this.refs.name.value = null
		this.refs.email.value = null
	}

	newContact = () =>
  	<div className='pure-g'>
    	<div className='pure-u-12-24'>
    		<form className='pure-form' onSubmit={this.addContact}>
    		    <fieldset>
  		        <legend>New Contact</legend>
  		      <input ref='email' type='email' placeholder='Email'/>
  		      <input ref='name' type='text' placeholder='name'/>
  		      <button type='submit' className='pure-button pure-button-primary'>Add</button>
    		  </fieldset>
    		</form>
    	</div>
    </div>;

  render() {
    return(
    	<div>
	    	<div id='Layout'>
	    	{this.newContact()}
		    </div>
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
