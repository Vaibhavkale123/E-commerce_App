package com.onlineshopping.dto;

public class UpdateDeliveryStatusRequest {
	
	private String orderId;
	
	private String deliveryStatus;
	
	private String deliveryTime;
	
	private String deliveryDate;
	
	private int deliveryId;  // for assigning Delivery Person for Order

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getDeliveryStatus() {
		return deliveryStatus;
	}

	public void setDeliveryStatus(String deliveryStatus) {
		this.deliveryStatus = deliveryStatus;
	}

	public String getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(String deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public int getDeliveryId() {
		return deliveryId;
	}

	public void setDeliveryId(int deliveryId) {
		this.deliveryId = deliveryId;
	}

	@Override
	public String toString() {
		return "UpdateDeliveryStatusRequest [orderId=" + orderId + ", deliveryStatus=" + deliveryStatus
				+ ", deliveryTime=" + deliveryTime + ", deliveryDate=" + deliveryDate + "]";
	}
	
}
