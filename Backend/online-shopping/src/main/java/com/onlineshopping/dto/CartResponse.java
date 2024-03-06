package com.onlineshopping.dto;

import java.util.List;

public class CartResponse {
	
	private String totalCartPrice;
	
	private List<CartDataResponse> cartData;

	public String getTotalCartPrice() {
		return totalCartPrice;
	}

	public void setTotalCartPrice(String totalCartPrice) {
		this.totalCartPrice = totalCartPrice;
	}

	public List<CartDataResponse> getCartData() {
		return cartData;
	}

	public void setCartData(List<CartDataResponse> cartData) {
		this.cartData = cartData;
	}

	@Override
	public String toString() {
		return "CartResponse [totalCartPrice=" + totalCartPrice + ", cartData=" + cartData + "]";
	}

}
