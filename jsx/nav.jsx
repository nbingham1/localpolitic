
export class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			elections: true,
			meetings: true,
			protests: true,
			petitions: true,
			donations: true,
			volunteering: true,
			municipal: true,
			county: true,
			state: true,
			federal: true,
			international: true
		};
		
	}

	toggleElections() {
		this.setState({
			elections: this.state.elections ? false : true
		});
	}

	toggleMeetings() {
		this.setState({
			meetings: this.state.meetings ? false : true
		});
	}

	toggleProtests() {
		this.setState({
			protests: this.state.protests ? false : true
		});
	}

	togglePetitions() {
		this.setState({
			petitions: this.state.petitions ? false : true
		});
	}

	toggleDonations() {
		this.setState({
			donations: this.state.donations ? false : true
		});
	}

	toggleVolunteering() {
		this.setState({
			volunteering: this.state.volunteering ? false : true
		});
	}

	toggleMunicipal() {
		this.setState({
			municipal: this.state.municipal ? false : true
		});
	}

	toggleCounty() {
		this.setState({
			county: this.state.county ? false : true
		});
	}
	
	toggleState() {
		this.setState({
			state: this.state.state ? false : true
		});
	}
	
	toggleFederal() {
		this.setState({
			federal: this.state.federal ? false : true
		});
	}

	toggleInternational() {
		this.setState({
			international: this.state.international ? false : true
		});
	}

	render() {
		return (
			<nav>
				<button>Elections</button>
				<button>Meetings</button>
				<button>Protests</button>
				<button>Petitions</button>
				<button>Donations</button>
				<button>Volunteering</button>
				<br /><br />
				<button>Municipal</button>
				<button>County</button>
				<button>State</button>
				<button>Federal</button>
				<button>International</button>
			</nav>
		);
	}
}
