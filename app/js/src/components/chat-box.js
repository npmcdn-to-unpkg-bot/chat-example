var ChatBox = React.createClass({
    getInitialState: function () {
        return {messages: []};
    },

    updateMessageList: function (message) {
        var messages = this.state.messages;
        messages.push(message);
        this.setState({messages: messages});
    },

    render: function () {
        return (
            <div className="chat">
                <MessageList messages={this.state.messages}/>
                <MessageForm onMessageSend={this.updateMessageList}/>
            </div>
        );
    }
});