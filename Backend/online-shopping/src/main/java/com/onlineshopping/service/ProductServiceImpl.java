package com.onlineshopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.onlineshopping.dao.ProductDao;
import com.onlineshopping.model.Product;
import com.onlineshopping.utility.StorageService;


@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired 
	private ProductDao productDao;
	
	@Autowired
	private StorageService storageService;

	@Override
	public void addProduct(Product product, MultipartFile productImmage) {
		
		String productImageName = storageService.store(productImmage);
		
		product.setImageName(productImageName);
		
		this.productDao.save(product);
	}

}
