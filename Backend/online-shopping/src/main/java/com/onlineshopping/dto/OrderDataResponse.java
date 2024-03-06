package com.onlineshopping.dto;

import java.util.List;

public class OrderDataResponse {
	
	private List<MyOrderResponse> orderResponse;
	
	private String totalCartPrice;

	public List<MyOrderResponse> getOrderResponse() {
		return orderResponse;
	}

	public void setOrderResponse(List<MyOrderResponse> orderResponse) {
		this.orderResponse = orderResponse;
	}

	public String getTotalCartPrice() {
		return totalCartPrice;
	}

	public void setTotalCartPrice(String totalCartPrice) {
		this.totalCartPrice = totalCartPrice;
	}

	@Override
	public String toString() {
		return "OrderDataResponse [orderResponse=" + orderResponse + ", totalCartPrice=" + totalCartPrice + "]";
	}
	
}
