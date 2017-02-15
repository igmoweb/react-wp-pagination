# React WP Pagination Component

A simple pagination component for React based on WordPress algorithms.

Thanks to WordPress for the pagination algorithm: [https://codex.wordpress.org/Function_Reference/paginate_links](https://codex.wordpress.org/Function_Reference/paginate_links)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Samples provided thanks to [Storybook](https://github.com/storybooks/react-storybook)


# Instructions

1. `npm install`
2. `npm run storybook`. Open your browser and you'll see a few examples.
3. `npm run build` to bundle the production files under `build` folder.

# Props

- **total**: Total pages 
- **current**: Current page 
- **showAll**: Show all pages 
- **prevText**: Text for the previous link button. If nothing is provided, the link will not appear. 
- **nextText**: Text for the next link button. If nothing is provided, the link will not appear. 
- **endSize**: Number of max links on the extremes of the pages list. 
- **midSize**: Number of max links around the current page, left and right.
- **baseClassName**: Class name of the `ul` container
- **onClickPage**: Callback executed when a page is clicked. The callback will receive the page clicked number.
 