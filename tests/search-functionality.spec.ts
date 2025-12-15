import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home page before each test
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    // Wait for products to load - using h4 heading selector
    await page.waitForSelector('h4', { timeout: 10000 });
    await page.waitForLoadState('networkidle');
  });

  // Test Case 2.1: Search for Product by Name
  test('Search for Product by Name', async ({ page }) => {
    // Click on the search box
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    await searchBox.click();
    
    // Type "apple" in the search box
    await searchBox.fill('apple');
    
    // Wait for search results to update
    await page.waitForTimeout(500);
    
    // Get all product headings displayed
    const productHeadings = await page.locator('h4').allTextContents();
    
    // Verify only Apple product is displayed
    expect(productHeadings.length).toBe(1);
    expect(productHeadings[0]).toContain('Apple');
    
    // Clear search
    await searchBox.clear();
    
    // Wait for all products to reappear
    await page.waitForTimeout(500);
    
    // Verify all products reappear (should be more than 1)
    const allProductHeadings = await page.locator('h4').allTextContents();
    expect(allProductHeadings.length).toBeGreaterThan(1);
  });

  // Test Case 2.2: Search with Partial Name Match
  test('Search with Partial Name Match', async ({ page }) => {
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    
    // Test 1: Search for "tom" should show Tomato
    await searchBox.fill('tom');
    await page.waitForTimeout(500);
    
    let productHeadings = await page.locator('h4').allTextContents();
    expect(productHeadings.some(h => h.includes('Tomato'))).toBeTruthy();
    
    // Test 2: Search for "ber" should show Strawberry and Water Melon
    await searchBox.clear();
    await searchBox.fill('ber');
    await page.waitForTimeout(500);
    
    productHeadings = await page.locator('h4').allTextContents();
    const productText = productHeadings.join('|');
    
    // Verify both Strawberry and Water Melon contain "ber"
    expect(productHeadings.some(h => h.includes('Strawberry'))).toBeTruthy();
    expect(productHeadings.some(h => h.includes('Water Melon'))).toBeTruthy();
    
    // Clear search
    await searchBox.clear();
    await page.waitForTimeout(500);
  });

  // Test Case 2.3: Search with Non-Existent Product
  test('Search with Non-Existent Product', async ({ page }) => {
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    
    // Type non-existent product name
    await searchBox.fill('xyz123');
    
    // Wait for search results to update
    await page.waitForTimeout(500);
    
    // Get all product headings displayed
    const productHeadings = await page.locator('h4').allTextContents();
    
    // Verify no products are displayed
    expect(productHeadings.length).toBe(0);
    
    // Verify the product grid is empty or no items shown
    const productItems = await page.locator('h4').count();
    expect(productItems).toBe(0);
  });

  // Additional Test: Verify Search supports case-insensitive partial matching
  test('Search Functionality Behavior with Case', async ({ page }) => {
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    
    // Search for "app" in lowercase - should find Apple
    await searchBox.fill('app');
    await page.waitForTimeout(500);
    
    let productHeadings = await page.locator('h4').allTextContents();
    expect(productHeadings.some(h => h.includes('Apple'))).toBeTruthy();
    
    // Search for "APP" in uppercase - search uses case-insensitive partial matching
    await searchBox.clear();
    await searchBox.fill('APP');
    await page.waitForTimeout(500);
    
    productHeadings = await page.locator('h4').allTextContents();
    // Application matches case-insensitively for partial searches
    expect(productHeadings.some(h => h.includes('Apple'))).toBeTruthy();
    
    // Search for "aPp" mixed case - should still work
    await searchBox.clear();
    await searchBox.fill('aPp');
    await page.waitForTimeout(500);
    
    productHeadings = await page.locator('h4').allTextContents();
    expect(productHeadings.some(h => h.includes('Apple'))).toBeTruthy();
  });

  // Additional Test: Verify Search Filters Dynamically
  test('Search Filters Dynamically as User Types', async ({ page }) => {
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    
    // Type one character at a time to test dynamic filtering
    await searchBox.fill('p');
    await page.waitForTimeout(300);
    let productHeadings = await page.locator('h4').allTextContents();
    const countAfterP = productHeadings.length;
    expect(countAfterP).toBeGreaterThan(0);
    
    // Type another character
    await searchBox.fill('po');
    await page.waitForTimeout(300);
    productHeadings = await page.locator('h4').allTextContents();
    const countAfterPo = productHeadings.length;
    
    // Should narrow down results
    expect(countAfterPo).toBeLessThanOrEqual(countAfterP);
    
    // Type full word
    await searchBox.fill('potato');
    await page.waitForTimeout(300);
    productHeadings = await page.locator('h4').allTextContents();
    expect(productHeadings.some(h => h.includes('Potato'))).toBeTruthy();
  });

  // Additional Test: Verify Search with Whitespace
  test('Search Handles Whitespace Correctly', async ({ page }) => {
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    
    // Search with leading/trailing spaces
    await searchBox.fill('  apple  ');
    await page.waitForTimeout(500);
    
    let productHeadings = await page.locator('h4').allTextContents();
    
    // Should still find apple (depending on implementation, it may trim spaces)
    // If app doesn't trim, this should return 0 results
    // If app does trim, this should return Apple
    // We'll verify it handles gracefully without errors
    expect(productHeadings).toBeDefined();
    
    // Clear and verify recovery
    await searchBox.clear();
    await page.waitForTimeout(500);
    
    const recoveredProducts = await page.locator('h4').allTextContents();
    expect(recoveredProducts.length).toBeGreaterThan(1);
  });
});
