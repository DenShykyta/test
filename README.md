# Store

Follow the link to view the site [Store](https://dummyjson.com)

Online store selling goods of various categories with the possibility to create
a shopping cart and place an order. It is a single-page site with two pages:

- Products page
- Basket/Cart of goods

## Products page

The page consists of a header, a category and search filter field, a product
cards field, and a "Loadmore" button.

![Products page](./src/images/productPage.jpg)

### Header

The header contains the Logo, the Cart button and the dynamic Total field. The
header has Sticky positioning, so it does not hide when scrolling.

- Logo - when clicked, you will be taken to the product page
- Cart link - when pressed, a transition to the product basket page takes place,
  has a hover effect and highlights the active status
- Total field - appears when goods appear in the cart and displays the total of
  the cart's contents in value terms. When the cart is cleared, the total
  disappears.

![Header ](./src/images/header.jpg)
![Header with total](./src/images/headerTotal.jpg)

### Filter & Search field

The search and filtering field consists of:

- Filtering by categories from the drop-down menu and the Reset button
- Search filters the list of products based on the entered search query. The
  search is performed dynamically with the input of characters.

#### Filter & Search field

![Filter & Search field](./src/images/filterField.jpg)

#### Filter options

![Filter options](./src/images/filter.png)

### Products field

The product card display field contains a set of 30 cards. and the Load more
button, which is used to load and expand the list of cards, if the cards for
loading have run out, the button disappears and the message "There are no more
products!" appears.

Product cards consist of a product image, product name, description, price, and
an Add to Cart button for adding the product to the Cart. Product description
reduced to 50 characters.

![Load More](./src/images/loadMore.jpg)
![No product to loadig](./src/images/noProducts.jpg)

## Cart page

The Сart page consists of a header, a title, a list of cards of added products
or a picture of an empty cart, an order form with Back to Store and Clear Cart
buttons.

### Header

The cart header differs only in the active state of the Cart button.

### Cart field

An empty cart displays the title 'Your CART is EMPTY' and a picture. The Back to
Store button loads the product page

The shopping cart displays a card list of added products, an order form, a Clear
Cart button, and a Back to Store button.

The card of the product in the Cart consists of a picture of the product, name,
description, cost of the selected quantity of the product, buttons to increase
and decrease the quantity, a quantity indicator and a button to remove the
product from the Cart.

Pressing the button to increase and decrease the amount changes the indicator of
the amount of the product and the price of the product. Pressing the delete
button and the button to reduce the quantity of the product in the position of
the quantity indicator 1 - the product is removed from the basket.

![Cart page](./src/images/cart.jpg)
![Cart page Empty](./src/images/cartEmpty.jpg)

### Form Order

The order form has validation for all fields:

- each field is mandatory
- the number of characters entered in the name surname fields
- the correctness of entering the phone number according to the template
  +380XXXXXXXXX

In case of violation of validation, a message appears under the input field, the
validation of which is violated. If any of the fields are entered incorrectly,
the Order button does not send the order.

If the data is entered correctly, the Order button sends an array with a data
object from the form and a data object with the ordered goods, the form is
reset, the basket is cleared.

The successful dispatch of the order is notified by a notification in the upper
right corner with the text "Thank you for your order, [name surname - data from
the form]!".

![Order Form All invalid](./src/images/formValidation.jpg)
![Order Form Phone invalid](./src/images/formPhoneValid.jpg)
![Success Order](./src/images/sendNotification.jpg)

Follow the link to view the site [Store](https://dummyjson.com)

## Technologies

- JavaScript
- React
- react-hook-form
- yup
- react-icons
- react-redux
- redux-toolkit
- react-router-dom
- redux-persist
- asyncThunk
- styled-components
- axios
- gitHub Desctope
- gitHub

##

This project is developed with
[Create React App](https://github.com/facebook/create-react-app).

## Backend

Еhe service used for the backend [DummyJSON](https://dummyjson.com).

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=Test+Task+Test+Task)](https://git.io/typing-svg)
