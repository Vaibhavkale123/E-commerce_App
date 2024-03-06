package com.onlineshopping.dto;

public class AddToCartRequest {
	
	private int productId;
	
	private int quantity;
	
	private int userId;

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "AddToCartRequest [productId=" + productId + ", quantity=" + quantity + ", userId=" + userId + "]";
	}
	
	
	
}
