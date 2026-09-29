# ShopHub - Modern E-Commerce Website

A fully functional, responsive e-commerce website built with HTML5, CSS3, and JavaScript. This project demonstrates modern web development practices with a clean, professional design and interactive features.

## Features

### 🏠 Homepage
- **Sticky Navigation Bar**: Easy navigation with search and cart access
- **Hero Section**: Eye-catching banner with call-to-action button
- **Featured Products**: Showcase of top products with discount badges
- **Product Grid**: Browse all products with filter and search capabilities
- **About Section**: Company information with benefits list
- **Newsletter Signup**: Email subscription form
- **Footer**: Links and social media integration

### 🛍️ Product Management
- **16 Products**: Variety of clothing and accessories
- **Product Cards**: Display with images, price, ratings, and discount information
- **Category Filtering**: Filter by Men's, Women's Fashion, and Accessories
- **Product Search**: Real-time search functionality
- **Star Ratings**: 5-star rating system with review counts
- **Discount Badges**: Visual indicators for savings

### 🛒 Shopping Cart
- **Dynamic Cart Management**: Add, remove, and update quantities
- **Cart Persistence**: Shopping cart saved in browser's localStorage
- **Real-time Updates**: Instant cart count updates
- **Cart Summary**: Subtotal, tax, and total calculations
- **Responsive Cart Page**: Dedicated cart management page
- **Empty Cart Message**: User-friendly message when cart is empty

### 💳 Checkout Process
- **Multi-step Checkout**: Visual progress indicators
- **Shipping Form**: Comprehensive address information fields
- **Payment Information**: Credit card details with validation
- **Form Validation**: Real-time validation with error messages
- **Order Summary**: Review items before purchase
- **Payment Methods**: Display of accepted cards

### ✨ Design & UX
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, professional color scheme
- **Smooth Animations**: Hover effects and page transitions
- **Gradient Backgrounds**: Modern gradient styling
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Touch-friendly**: Large buttons and spacing for mobile interaction

### 🔧 Technical Features
- **Form Validation**: 
  - Email validation
  - Phone number validation
  - Card number validation (format check)
  - Expiry date validation (MM/YY format)
  - CVV validation
  - ZIP code validation
- **Local Storage**: Cart persistence across sessions
- **Event Listeners**: Efficient event handling
- **Modular Code**: Well-organized JavaScript structure

## File Structure

```
Ecommerce-Website-main/
├── index.html           # Homepage
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout page
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
├── img/                # Image assets
│   ├── logo.png
│   ├── hero4.png
│   ├── products/       # Product images
│   ├── banner/
│   ├── about/
│   └── ... other images
└── README.md           # This file
```

## How to Use

### 1. View the Website
Simply open `index.html` in a web browser to start browsing products.

```bash
# Option 1: Direct file opening
# Double-click index.html or open with your browser

# Option 2: Using Live Server (VS Code)
# Install Live Server extension, then right-click index.html > Open with Live Server
```

### 2. Browse Products
- Scroll through the featured products
- Use filters to view specific categories (Men's, Women's, Accessories)
- Search for products using the search bar

### 3. Add Items to Cart
- Click "Add to Cart" button on any product card
- View cart by clicking the shopping cart icon
- Or navigate to the dedicated cart page

### 4. Manage Cart
- On the cart page, increase/decrease quantities
- Remove items with the trash icon
- View order summary with totals

### 5. Checkout
- Click "Proceed to Checkout" button
- Fill in shipping information
- Enter payment details
- Review order summary
- Click "Complete Purchase" to finish

## Product Categories

- **Men's Fashion**: T-Shirts, Jeans, Sweaters, Blazers
- **Women's Fashion**: Dresses, Jackets, Pants, Skirts
- **Accessories**: Shoes, Bags, Belts, Hats, Sunglasses

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Color Scheme

- **Primary**: #ff6b35 (Orange)
- **Secondary**: #004e89 (Navy Blue)
- **Accent**: #f7931e (Gold)
- **Success**: #27ae60 (Green)
- **Error**: #e74c3c (Red)

## Form Validation Rules

### Email
- Must contain @ symbol
- Must have valid domain

### Phone Number
- Minimum 10 digits
- Can include spaces, dashes, parentheses

### Card Number
- 13-19 digits with spaces allowed
- Formatted as XXXX XXXX XXXX XXXX

### Expiry Date
- Format: MM/YY
- Example: 12/25

### CVV
- 3-4 digits

### ZIP Code
- 3-10 characters
- Can include letters, numbers, spaces, dashes

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features Implemented

✅ HTML5 semantic structure
✅ Responsive CSS3 design
✅ Modern gradient effects
✅ Smooth animations and transitions
✅ Font Awesome icons
✅ Local storage for cart persistence
✅ Real-time search functionality
✅ Category filtering
✅ Form validation with error messages
✅ Mobile-friendly hamburger menu
✅ Professional color palette
✅ Accessibility considerations
✅ Performance optimizations

## Future Enhancements

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Quantity pre-selection
- Multiple payment gateways
- Order tracking
- Customer support chat
- Product recommendations
- Inventory management
- Admin dashboard

## Credits

- Icons: Font Awesome
- Images: Product placeholder images

## License

This project is open source and available for educational purposes.

## Notes

- All prices are in USD
- Tax is calculated at 10%
- Shipping is free on all orders
- All form submissions are simulated (no real payment processing)
- Cart data is stored locally in browser storage

---

Enjoy shopping at ShopHub! 🛍️
