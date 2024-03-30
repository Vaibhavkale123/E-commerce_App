package com.onlineshopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.onlineshopping.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {
	

}
