import React, {PropTypes} from 'react';


export default class Page extends React.Component {
    static defaultProps = {
        isCurrent: false,
        isDots: false,
        className: ''
    };

    render() {
        const item = this.props.onClick ?
            <a href="" onClick={this.props.onClick}>{this.props.children}</a>
            :
            <span>{this.props.children}</span>;

        let className = this.props.className;
        if ( this.props.isCurrent ) {
            className += ' current';
        }
        if ( this.props.isDots ) {
            className += ' dots';
        }
        return <li className={className}>
            {item}
        </li>;
    }
}

Page.propTypes = {
    isCurrent: PropTypes.bool,
    className: PropTypes.string,
    isDots: PropTypes.bool,
    onClick: PropTypes.func
};
