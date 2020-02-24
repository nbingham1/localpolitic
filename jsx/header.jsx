

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "Search",
			search: false,
			loc: "North Plainfield, NJ"
		};

		this.setProfile = this.setProfile.bind(this);
		this.setIssues = this.setIssues.bind(this);
		this.setAction = this.setAction.bind(this);
		this.setRepresentation = this.setRepresentation.bind(this);
		this.setGovernment = this.setGovernment.bind(this);

		this.activateSearch = this.activateSearch.bind(this);
		this.deactivateSearch = this.deactivateSearch.bind(this);
		this.updateQuery = this.updateQuery.bind(this);
	}

	setProfile() {
		this.props.setContent("profile");
	}
	
	setIssues() {
		this.props.setContent("issues");
	}

	setAction() {
		this.props.setContent("action");
	}

	setRepresentation() {
		this.props.setContent("representation");
	}

	setGovernment() {
		this.props.setContent("government");
	}

	activateSearch(e) {
		this.setState({query: this.state.search ? this.state.query : "", search: true});
	}

	deactivateSearch(e) {
		this.setState({query: "Search", search: false});
	}

	updateQuery(e) {
		this.setState({query: e.target.value});
	}

	render() {
		return (
			<header>
				<input id="search" value={this.state.query} onClick={this.activateSearch} onChange={this.updateQuery} />
				<div id="links">
				<button onClick={this.setProfile}>Profile</button>
				<button onClick={this.setIssues}>Issues</button>
				<button onClick={this.setAction}>Action</button>
				<button onClick={this.setRepresentation}>Representation</button>
				<button onClick={this.setGovernment}>Government</button>
				</div>
				<input id="location" value="North Plainfield, NJ" />
			</header>
		);
	}
}
