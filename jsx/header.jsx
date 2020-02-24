
export class Header extends React.Component {
	render() {
		return (
			<header>
				<input id="search" value="Search" />
				<div id="links">
				<button>Profile</button>
				<button>Issues</button>
				<button>Action</button>
				<button>Representation</button>
				<button>Government</button>
				</div>
				<input id="location" value="North Plainfield, NJ" />
			</header>
		);
	}
}
