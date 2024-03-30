package com.onlineshopping.service;

import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.model.Product;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

}
