package com.onlineshopping.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.onlineshopping.model.Orders;
import com.onlineshopping.model.User;

@Repository
public interface OrderDao extends JpaRepository<Orders, Integer> {
	
	List<Orders> findByUser_id(int userId);
	List<Orders> findByOrderId(String orderId);
	List<Orders> findByUser_idAndProduct_id(int userId, int productId);
	List<Orders> findByUser(User user);
	List<Orders> findByDeliveryPersonId(int deliveryPersonId);
	 
}
