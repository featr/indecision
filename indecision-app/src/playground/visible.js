class VisibilityToggle extends React.Component {
    constructor(prop) {
        super(prop);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>Here are some Details</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
