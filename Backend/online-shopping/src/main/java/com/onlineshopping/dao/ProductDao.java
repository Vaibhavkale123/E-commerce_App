package com.onlineshopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onlineshopping.model.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {
	
	List<Product> findByCategoryId(int category);

}
