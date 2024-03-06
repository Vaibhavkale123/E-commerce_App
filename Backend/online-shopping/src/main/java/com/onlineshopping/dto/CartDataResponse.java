package com.onlineshopping.dto;

public class CartDataResponse {
	
private int cartId;
	
	private int productId;
	
	private String productName;
	
	private String productDescription;
	
	private String productImage;
	
	private int quantity;

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	@Override
	public String toString() {
		return "CartDataResponse [cartId=" + cartId + ", productId=" + productId + ", productName=" + productName
				+ ", productDescription=" + productDescription + ", productImage=" + productImage + ", quantity="
				+ quantity + "]";
	}

}
