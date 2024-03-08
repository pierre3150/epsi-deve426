export async function getProductTitle(title) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${title}/`);
    const data = await response.json();
    const title = data.title;
    return title;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
}
