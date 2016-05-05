var Body = React.createClass({
  getInitialState(){
    return { items: [] }
  },
  componentDidMount() {
    console.log("Component mounted");
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  render(){
    return(
      <div>
        <NewItem />
        <AllItems items={this.state.items}/>
      </div>
    )
  }
});
