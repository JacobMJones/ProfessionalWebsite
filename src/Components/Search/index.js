import React from "react";

class Search extends React.Component {
	
	
	
	constructor(props) {
		super(props);
		this.state = {
			// initialItems: [
			// 	"Severian",
			// 	"Thecla",
			// 	"Dorcas",
			// 	"Valeria",
			// 	"Agia",
			// 	"Jonas",
			// 	"Jolenta",
			// 	"Baldanders",
			// 	"Talos",
			// 	"Burgundofara",
			// 	"Ouen",
			// 	"Tzadkiel",
			// 	"Apu Punchau",
			// 	"Vodalus",
			// 	"Typhon"
			// ],
			// items: []
		};
	}
	filterList = (event) => {
		let updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
    }
    
 
	componentWillMount() {
    
        this.setState({initialItems:this.props.list, items:this.props.list}, ()=>{console.log(this.state)})
	}
	
	render() {
        const listLength = this.state.items.length;
        console.log('list length', listLength)
		return(
			<div>
				<h2>{this.state.items.length}
					{listLength > 1 || listLength == 0 ?
					" results" : 
					" result"}
				</h2>
				<input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
				<List items={this.state.items} />
			</div>
		);
	}	
}

class List extends React.Component {
	render() {
        console.log('in list')
    return (
      <ul>
      {this.props.items.map((item) => {
          console.log('yerty',item)
				return <div key={item}>{item.name}</div>
			})}
      </ul>
    );  
  }
}

export default Search