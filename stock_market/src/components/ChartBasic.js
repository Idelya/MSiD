import React from 'react';
import Chart from './Chart';

class ChartComponent extends React.Component {

	
	componentDidMount() { 
		
			this.setState({ data:null })
	}

	componentDidUpdate(prevProps){
		if (this.props.data != null&&this.props.data !== prevProps.data) {
		console.log(this.props.data)
		this.setState({ data: this.props.data})
		}
	}

	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		if (this.state.data == null) {
		return <div>Brak danych dla {this.props.title}</div>
		}
		return (
			<Chart type="svg" data={this.state.data} />
		)
	}
}
export default ChartComponent;