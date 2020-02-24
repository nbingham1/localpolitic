import {Header} from './header.js';
import {Nav} from './nav.js';
import {Main} from './main.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "action",
			query: "",
			filter: {},
		};

		this.setQuery = this.setQuery.bind(this);
		this.setContent = this.setContent.bind(this);
		this.setFilter = this.setFilter.bind(this);
	}

	setQuery(queryString) {
		this.setState({query: queryString});
	}

	setContent(contentString) {
		this.setState({content: contentString});
	}

	setFilter(filterString) {
		this.setState({filter: filterString});
	}

	render() {
		return [
			<Header setQuery={this.setQuery} setContent={this.setContent} />,
			<Nav content={this.state.content} setFilter={this.setFilter} />,
			<Main content={this.state.content} search={this.state.query} filter={this.state.filter} />,
		]
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
