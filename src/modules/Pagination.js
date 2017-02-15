import React, {PropTypes} from 'react';
import Page from './Page'

export default class Pagination extends React.Component {

    static defaultProps = {
        total: 0,
        current: 1,
        showAll: false,
        showPages: true,
        prevText: '',
        nextText: '',
        endSize: 1,
        midSize: 2,
        baseClassName: 'page-numbers'
    };

    constructor() {
        super();

        this.state = {
            current: 0
        }
    }

    handleClickPage( e, page ) {
        e.preventDefault();
        this.setState({ current: page });
        if ( this.props.onClickPage ) {
            this.props.onClickPage( page );
        }
    }

    componentWillMount() {
        this.setState({ current: this.props.current });
    }

    render() {

        if ( ! this.props.total ) {
            return null;
        }

        let endSize = this.props.endSize < 1 ? 1 : this.props.endSize;
        let midSize = this.props.midSize < 0 ? 2 : this.props.midSize;

        let dots = false;

        let pages = [];

        if ( this.props.prevText && this.state.current && 1 < this.state.current ) {
            pages.push(
                <Page
                    isCurrent={true}
                    key="prev"
                    onClick={(e) => this.handleClickPage( e, this.state.current - 1 ) }
                    className="prev"
                >
                    {this.props.prevText}
                </Page>
            );
        }

        if ( this.props.showPages ) {
            for ( let n = 1; n <= this.props.total; n++ ) {

                let isCurrent = ( n === this.state.current );
                if ( isCurrent ) {
                    dots = true;
                    pages.push(
                        <Page
                            isCurrent={true}
                            key={n}
                        >
                            {n}
                        </Page>
                    );
                }
                else {
                    if (
                        this.props.showAll
                        || (
                            n <= endSize
                            || (
                                this.state.current
                                && n >= ( this.state.current - midSize )
                                && n <= ( this.state.current + midSize )
                            )
                            || n > ( this.props.total - endSize )
                        )
                    )
                    {
                        pages.push(
                            <Page
                                isLink={true}
                                onClick={(e) => this.handleClickPage( e, n ) }
                                key={n}
                            >
                                {n}
                            </Page>
                        );
                        dots = true;
                    }
                    else if ( dots && ! this.props.showAll ) {
                        pages.push(
                            <Page
                                isDots={true}
                                key={n}
                            >
                                &hellip;
                            </Page>
                        );
                        dots = false;
                    }
                }
            }
        }

        if ( this.props.nextText && this.state.current && this.state.current < this.props.total ) {
            pages.push(
                <Page
                    isCurrent={true}
                    key="next"
                    onClick={(e) => this.handleClickPage( e, this.state.current + 1 ) }
                    className="next"
                >
                    {this.props.nextText}
                </Page>
            );
        }

        return <ul className={this.props.baseClassName}>
            {pages}
        </ul>;
    }
};



Pagination.propTypes = {
    total: PropTypes.number,
    current: PropTypes.number,
    showAll: PropTypes.bool,
    prevText: PropTypes.string,
    nextText: PropTypes.string,
    endSize: PropTypes.number,
    midSize: PropTypes.number,
    baseClassName: PropTypes.string,
    onClickPage: PropTypes.func
};



