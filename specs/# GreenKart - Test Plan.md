# GreenKart - Test Plan

## Test Suite: GreenKart E-commerce Application
**Application URL:** https://rahulshettyacademy.com/seleniumPractise/#/

---

## 1. Product Browsing & Display

### Test Case 1.1: Verify Home Page Loads with All Products
**Objective:** Ensure the application displays all available products on initial load
**Steps:**
1. Navigate to https://rahulshettyacademy.com/seleniumPractise/#/
2. Wait for page to load completely
3. Verify the banner with GREENKART logo is visible
4. Verify a list of at least 30 products is displayed (vegetables, fruits, nuts)
5. Verify each product displays: product image, name, price, quantity controls, and ADD TO CART button

**Expected Result:** All products load successfully with correct pricing and UI elements

---

### Test Case 1.2: Verify Product Details Display Correctly
**Objective:** Confirm product information is accurate and properly formatted
**Steps:**
1. Observe product cards displayed on the home page
2. Verify each product has:
   - Product image
   - Product name (e.g., "Apple - 1 Kg", "Brocolli - 1 Kg")
   - Unit price in Rupees (₹)
   - Quantity selector with "-" and "+" buttons
   - Default quantity of 1
   - "ADD TO CART" button in enabled state

**Expected Result:** All product details are displayed accurately with proper formatting

---

## 2. Search Functionality

### Test Case 2.1: Search for Product by Name
**Objective:** Verify search feature filters products by name
**Steps:**
1. Navigate to home page
2. Click on the search box (Search for Vegetables and Fruits)
3. Type "apple" in the search box
4. Observe the product list updates
5. Verify only Apple product(s) are displayed
6. Clear search and verify all products reappear

**Expected Result:** Search dynamically filters products in real-time. Only matching products are displayed.

---

### Test Case 2.2: Search with Partial Name Match
**Objective:** Verify search functionality supports partial matching
**Steps:**
1. Go to home page
2. Type "tom" in search box
3. Verify Tomato product is displayed
4. Type "ber" in search box
5. Verify Strawberry and Water Melon are displayed
6. Clear search

**Expected Result:** Partial text matches trigger relevant product results

---

### Test Case 2.3: Search with Non-Existent Product
**Objective:** Verify application behavior when searching for unavailable products
**Steps:**
1. Navigate to home page
2. Type "xyz123" in search box
3. Observe the product grid

**Expected Result:** No products are displayed when search term doesn't match any products

---

## 3. Quantity Management

### Test Case 3.1: Increase Quantity Using + Button
**Objective:** Verify quantity can be incremented for a product
**Steps:**
1. Navigate to home page
2. Select any product (e.g., Brocolli)
3. Click the "+" button next to quantity field
4. Verify quantity increases from 1 to 2
5. Click "+" button multiple times
6. Verify quantity continues to increment

**Expected Result:** Quantity increments correctly with each "+" click. Console logs "quantity added..." message.

---

### Test Case 3.2: Decrease Quantity Using - Button
**Objective:** Verify quantity can be decremented for a product
**Steps:**
1. Navigate to home page
2. Select a product (e.g., Carrot)
3. Click "+" button to increase quantity to 3
4. Click "–" button
5. Verify quantity decreases by 1
6. Verify minimum quantity is 1 (cannot go below)

**Expected Result:** Quantity decrements correctly. Minimum quantity enforced at 1.

---

### Test Case 3.3: Modify Quantity Before Adding to Cart
**Objective:** Verify quantity modification applies when adding to cart
**Steps:**
1. Navigate to home page
2. Select a product (e.g., Beans)
3. Click "+" button to set quantity to 4
4. Click "ADD TO CART" button
5. Verify cart count updates correctly

**Expected Result:** Correct quantity is added to cart as configured

---

## 4. Add to Cart Functionality

### Test Case 4.1: Add Single Item to Cart
**Objective:** Verify adding a product to cart updates cart counter
**Steps:**
1. Navigate to home page
2. Verify cart count shows "0"
3. Click "ADD TO CART" for any product with quantity 1
4. Verify cart count updates to "1"
5. Verify "ADD TO CART" button changes to "✔ ADDED" (disabled state)

**Expected Result:** Cart count increments correctly. Button state changes to show item is added.

---

### Test Case 4.2: Add Multiple Different Products to Cart
**Objective:** Verify multiple different products can be added to cart
**Steps:**
1. Navigate to home page
2. Add Apple to cart (qty: 1)
3. Add Brocolli to cart (qty: 3)
4. Verify cart count shows "2" (2 different items, though 4 total units)
5. Verify both buttons show "✔ ADDED" state

**Expected Result:** Cart correctly tracks multiple unique products

---

### Test Case 4.3: Add Same Product Multiple Times
**Objective:** Verify adding the same product multiple times doesn't duplicate
**Steps:**
1. Navigate to home page
2. Add Potato to cart (qty: 2)
3. Modify Potato quantity to 3 and add again
4. Open cart
5. Verify Potato shows only one entry with correct quantity

**Expected Result:** System consolidates multiple additions of same product

---

## 5. Cart Management

### Test Case 5.1: View Cart Contents
**Objective:** Verify cart displays all added items with correct details
**Steps:**
1. Add Apple (qty: 1) to cart
2. Add Brocolli (qty: 3) to cart
3. Click Cart icon/link
4. Verify cart panel displays:
   - Product image
   - Product name
   - Quantity in Nos.
   - Individual price
   - Total price per item
   - Remove (×) button

**Expected Result:** Cart displays complete information for each item

---

### Test Case 5.2: Remove Item from Cart
**Objective:** Verify items can be removed from cart
**Steps:**
1. Add Apple and Brocolli to cart
2. Open cart
3. Click "×" button next to Apple
4. Verify Apple is removed from cart
5. Verify Brocolli remains in cart

**Expected Result:** Item is removed from cart. Other items unaffected.

---

### Test Case 5.3: Cart Totals Calculation
**Objective:** Verify cart calculates totals correctly
**Steps:**
1. Add Apple (qty: 1, price: ₹72) to cart
2. Add Brocolli (qty: 3, price: ₹120 each) to cart
3. Open cart
4. Verify total amount = (1 × 72) + (3 × 120) = ₹432

**Expected Result:** Total amount calculated correctly (72 + 360 = 432)

---

## 6. Checkout Process

### Test Case 6.1: Proceed to Checkout
**Objective:** Verify checkout page displays cart summary
**Steps:**
1. Add items to cart
2. Open cart panel
3. Click "PROCEED TO CHECKOUT" button
4. Verify checkout page loads with URL containing "#/cart"
5. Verify table displays all items with columns: Product Name, Quantity, Price, Total

**Expected Result:** Checkout page displays correctly with all cart items

---

### Test Case 6.2: Verify Order Summary on Checkout Page
**Objective:** Confirm checkout page shows accurate order calculations
**Steps:**
1. Add Apple (qty: 1, ₹72) and Brocolli (qty: 3, ₹120) to cart
2. Proceed to checkout
3. Verify table shows:
   - Apple: Qty 1, Price 72, Total 72
   - Brocolli: Qty 3, Price 120, Total 360
4. Verify summary shows:
   - "No. of Items: 2"
   - "Total Amount: 432"
   - "Discount: 0%"
   - "Total After Discount: 432"

**Expected Result:** Order summary displays correctly with accurate calculations

---

## 7. Promo Code / Discount

### Test Case 7.1: Apply Valid Promo Code
**Objective:** Verify promo code functionality (positive test case)
**Assumptions:** Valid promo code(s) exist in the system
**Steps:**
1. Add items to cart with total amount 432
2. Proceed to checkout
3. Locate promo code input field "Enter promo code"
4. Enter a valid promo code (if available)
5. Click "Apply" button
6. Verify discount is applied and total is reduced

**Expected Result:** Discount is applied when valid promo code is entered

---

### Test Case 7.2: Apply Invalid Promo Code
**Objective:** Verify system behavior with invalid promo code
**Steps:**
1. Proceed to checkout page
2. Enter "INVALID123" in promo code field
3. Click "Apply" button
4. Verify error message appears or no discount is applied
5. Verify original total remains unchanged

**Expected Result:** Invalid promo code is rejected. No discount applied.

---

### Test Case 7.3: Apply Empty Promo Code
**Objective:** Verify system handles empty promo code submission
**Steps:**
1. Go to checkout page
2. Leave promo code field empty
3. Click "Apply" button
4. Verify no error and no discount is applied

**Expected Result:** Empty submission is handled gracefully

---

## 8. Top Deals / Offers Section

### Test Case 8.1: Navigate to Top Deals Page
**Objective:** Verify Top Deals page loads and displays discounted products
**Steps:**
1. Navigate to home page
2. Click "Top Deals" link
3. Verify URL changes to "#/offers"
4. Verify page displays table with columns: Veg/fruit name, Price, Discount price
5. Verify products with discount information are displayed (e.g., Wheat, Tomato, Rice, Potato, Strawberry)

**Expected Result:** Top Deals page loads with discounted product list

---

### Test Case 8.2: Verify Pagination on Top Deals
**Objective:** Confirm pagination functionality works on offers page
**Steps:**
1. Navigate to Top Deals page
2. Verify current page is "1" with 5 items per page
3. Click pagination "Next" button or page "2"
4. Verify next 5 products are displayed
5. Verify pagination buttons: First, Previous, Next, Last
6. Click "Last" button
7. Verify last page is displayed with remaining items

**Expected Result:** Pagination allows navigation through all offers

---

### Test Case 8.3: Search on Top Deals Page
**Objective:** Verify search functionality on offers page
**Steps:**
1. Navigate to Top Deals page
2. Locate "Search:" field
3. Type "wheat" in search box
4. Verify only Wheat product is displayed
5. Clear search and verify all products reappear

**Expected Result:** Search filters offers dynamically

---

### Test Case 8.4: Change Page Size on Top Deals
**Objective:** Verify page size selector works
**Steps:**
1. Navigate to Top Deals page
2. Verify default page size is "5"
3. Click page size dropdown
4. Select "10"
5. Verify 10 items are displayed on current page
6. Select "20"
7. Verify 20 items are displayed (or all items if less than 20 exist)

**Expected Result:** Page size changes dynamically

---

### Test Case 8.5: Sort Offers by Product Name
**Objective:** Verify sorting functionality on offers
**Steps:**
1. Navigate to Top Deals page
2. Observe current sort order (descending by name)
3. Click "Veg/fruit name" column header
4. Verify products are re-sorted in ascending order
5. Click header again
6. Verify products return to descending order

**Expected Result:** Column header sorting works correctly

---

## 9. Delivery Date Selection

### Test Case 9.1: Verify Date Picker Display
**Objective:** Confirm delivery date picker is visible on offers page
**Steps:**
1. Navigate to Top Deals page
2. Scroll down to find "Delivery Date" section
3. Verify date input shows current date (12/15/2025)
4. Verify three spinbuttons for month/day/year
5. Verify calendar/date picker buttons are visible

**Expected Result:** Delivery date selector is properly displayed

---

### Test Case 9.2: Change Delivery Date Using Spinbuttons
**Objective:** Verify date can be modified using spinbuttons
**Steps:**
1. Navigate to Top Deals page
2. Locate date selector showing "12/15/2025"
3. Click + button on day field
4. Verify day increments to 16
5. Click - button on month field
6. Verify month decrements to 11

**Expected Result:** Date modifications work correctly

---

## 10. Navigation & External Links

### Test Case 10.1: Verify Navigation Links
**Objective:** Confirm all header navigation links work
**Steps:**
1. Navigate to home page
2. Verify header contains:
   - GREENKART logo
   - Search box
   - "Limited offer" link (external)
   - "Top Deals" link
   - "Flight Booking" link (external)
   - Cart icon with count badge
3. Click "Flight Booking" link
4. Verify it navigates to external URL

**Expected Result:** All navigation links are functional

---

### Test Case 10.2: Verify GREENKART Logo Navigation
**Objective:** Confirm logo returns to home page
**Steps:**
1. Navigate to Top Deals page
2. Click GREENKART logo
3. Verify page returns to home page (#/)

**Expected Result:** Logo acts as home page link

---

## 11. Header Information Display

### Test Case 11.1: Verify Cart Count Badge
**Objective:** Confirm cart counter displays correct count
**Steps:**
1. Start with empty cart (count = 0)
2. Add Apple to cart
3. Verify cart count badge shows "1"
4. Add Brocolli to cart
5. Verify cart count shows "2"
6. Remove one item from cart
7. Verify count updates to "1"

**Expected Result:** Cart badge accurately reflects number of unique items

---

### Test Case 11.2: Verify Items and Price Summary in Header
**Objective:** Verify header shows items and price totals
**Steps:**
1. Navigate to home page
2. Verify header table shows "Items : 0" and "Price : 0"
3. Add Apple (₹72) to cart
4. Verify header shows "Items : 1" and "Price : 72"
5. Add Brocolli qty 3 (₹120 each) to cart
6. Verify header shows "Items : 2" (unique products) and "Price : 432" (total)

**Expected Result:** Header correctly displays cart summary

---

## 12. Edge Cases & Error Handling

### Test Case 12.1: Rapid Add to Cart Clicks
**Objective:** Verify system handles rapid clicks on ADD TO CART
**Steps:**
1. Navigate to home page
2. Rapidly click ADD TO CART button multiple times for same product
3. Verify cart count doesn't exceed expected value
4. Verify console doesn't show errors

**Expected Result:** System handles rapid clicks gracefully

---

### Test Case 12.2: Browser Back Button Behavior
**Objective:** Verify application state after using browser back button
**Steps:**
1. Add items to cart
2. Proceed to checkout page
3. Click browser back button
4. Verify cart items are retained
5. Verify cart page loads correctly

**Expected Result:** Cart state persists when using browser back button

---

### Test Case 12.3: Page Refresh on Cart Page
**Objective:** Verify cart data persists after page refresh
**Steps:**
1. Add items to cart
2. Proceed to checkout
3. Refresh page (F5 or Cmd+R)
4. Verify cart items are still displayed
5. Verify totals are correct

**Expected Result:** Cart data is preserved using localStorage/sessionStorage

---

## 13. Product Price Validation

### Test Case 13.1: Verify All Product Prices
**Objective:** Confirm displayed prices are accurate
**Steps:**
1. Navigate to home page
2. Verify prices for sample products:
   - Brocolli: ₹120
   - Tomato: ₹16
   - Apple: ₹72
   - Mushroom: ₹75
   - Strawberry: ₹180

**Expected Result:** All displayed prices match expected values

---

## 14. UI/UX Responsiveness

### Test Case 14.1: Verify Button States
**Objective:** Confirm button states change appropriately
**Steps:**
1. Navigate to home page
2. Verify ADD TO CART buttons are enabled
3. Click ADD TO CART
4. Verify button changes to "✔ ADDED" (appears disabled/different style)
5. Verify clicking again doesn't duplicate in cart

**Expected Result:** Button states provide clear visual feedback

---

### Test Case 14.2: Verify Loading States
**Objective:** Confirm page loads smoothly without errors
**Steps:**
1. Navigate to home page
2. Monitor network requests
3. Verify all resources load successfully
4. Navigate to Top Deals
5. Verify page transitions are smooth
6. Check browser console for errors

**Expected Result:** No console errors. Page loads smoothly.

---

## 15. Data Integrity

### Test Case 15.1: Verify Cart Doesn't Mix Product Variants
**Objective:** Confirm each unique product is tracked separately
**Steps:**
1. Note all products have 1 Kg (or 1/4 Kg) quantities
2. Add Tomato to cart with qty 2
3. Verify cart shows "Tomato - 1 Kg" once with qty 2
4. Verify system doesn't create duplicate entries

**Expected Result:** Product variants are properly consolidated

---

## Test Execution Notes

- **Browser Compatibility:** Test should run on Chrome, Firefox, Safari, Edge
- **Test Environment:** Test against production URL or dedicated test environment
- **Prerequisites:** Clear browser cache before running full suite
- **Assumptions:** Promo codes may not be available; adjust tests accordingly
- **Test Duration:** Full suite execution approximately 60-90 minutes
- **Dependencies:** None - tests are independent and can run in any order

---

## Defect Reporting Standards

When a test fails, report the following:
- Test Case ID and name
- Steps to reproduce
- Expected vs actual result
- Browser and OS version
- Screenshots/recordings
- Console errors (if applicable)
- Network requests (if applicable)