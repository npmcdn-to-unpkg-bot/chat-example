var MessageForm = React.createClass({
    getInitialState: function () {
        return {text: ''};
    },

    updateText: function (event) {
        this.setState({text: event.target.value});
    },

    send: function (event) {
        event.preventDefault();

        var text = this.state.text.trim();

        this.props.onMessageSend({author: 'test author', text: text});

        this.setState({text: ''});
    },

    render: function () {
        return (
            <form className="message-form" onSubmit={this.send}>
                <input type="text" value={this.state.text} onChange={this.updateText}/>
                <button>Send</button>
            </form>
        );
    }
});