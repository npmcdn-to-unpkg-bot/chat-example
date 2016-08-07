var Message = React.createClass({

    render: function () {
        return (
            <li className="message">
                <span className="author">
                    [{this.props.author}]:
                </span>
                {this.props.children}
            </li>
        );
    }
});