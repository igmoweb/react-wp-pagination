import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Pagination from '../modules/Pagination';
import './Pagination.css';

storiesOf( 'Pagination', module )
    .add( '1 page', () => (
        <Pagination
            total={1}
            onClickPage={action( 'page clicked' )}
        />
    ) )
    .add( '2 pages', () => (
        <Pagination
            total={2}
            onClickPage={action( 'page clicked' )}
        />
    ) )
    .add( '20 pages', () => (
        <Pagination
            total={20}
            onClickPage={action( 'page clicked' )}
        />
    ) )
    .add( 'current page is 11', () => (
        <Pagination
            total={20}
            current={11}
            prevText="Prev"
            nextText="Next"
            onClickPage={action( 'page clicked' )}
        />
    ) )
    .add( 'with Prev and Next button', () => (
        <Pagination
            total={20}
            prevText="Prev"
            nextText="Next"
            onClickPage={action( 'page clicked' )}
        />
    ) )
    .add( '5 items on the extremes', () => (
        <Pagination
            total={40}
            prevText="Prev"
            endSize={5}
            current={20}
            nextText="Next"
            onClickPage={action( 'page clicked' )}
        />
    ) )
    .add( '4 items on the extremes and 5 in the middle (on each side of the current page)', () => (
        <Pagination
            total={40}
            prevText="Prev"
            endSize={4}
            midSize={5}
            current={20}
            nextText="Next"
            onClickPage={action( 'page clicked' )}
        />
    ) )
    .add( 'Only Prev, next links', () => (
        <Pagination
            total={3}
            prevText="Prev"
            showPages={false}
            nextText="Next"
            onClickPage={action( 'page clicked' )}
            baseClassName="page-numbers only-prev-next"
        />
    ) );
