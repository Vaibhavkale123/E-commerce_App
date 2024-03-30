package com.onlineshopping.dto;

public class AddReviewRequest {
	
	private int userId;
	
	private int productId;
	
	private int star;
	
	private String review;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getStar() {
		return star;
	}

	public void setStar(int star) {
		this.star = star;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "AddReviewRequest [userId=" + userId + ", productId=" + productId + ", star=" + star + ", review="
				+ review + "]";
	}
	
}
