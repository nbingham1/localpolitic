export class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: ""};
	}

	/*static getDerivedStateFromProps(props, state) {
		return {
			data: axios.get(props.content + '.py')
		};
	}*/

	render() {
		return <main>{this.state.data}</main>;
	}
}
