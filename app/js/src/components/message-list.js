var MessageList = React.createClass({
    render: function () {
        var messages = [];

        for (var i in this.props.messages) {
            messages.push((
                <Message author={this.props.messages[i].author} key={i}>
                    {this.props.messages[i].text}
                </Message>
            ));
        }

        return (
            <ul className="message-list">
                {messages}
            </ul>
        );
    }
});