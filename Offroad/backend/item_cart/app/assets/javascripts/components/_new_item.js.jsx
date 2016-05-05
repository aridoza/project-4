var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    console.log("the name value is" + name + "the description value is" + description);
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },
  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter item name' />
        <input ref='description' placeholder='enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
