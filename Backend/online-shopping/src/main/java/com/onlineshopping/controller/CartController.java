package com.onlineshopping.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.onlineshopping.dao.CartDao;
import com.onlineshopping.dao.ProductDao;
import com.onlineshopping.dao.UserDao;
import com.onlineshopping.dto.AddToCartRequest;
import com.onlineshopping.dto.CartDataResponse;
import com.onlineshopping.dto.CartResponse;
import com.onlineshopping.model.Cart;
import com.onlineshopping.model.Product;
import com.onlineshopping.model.User;

@RestController
@RequestMapping("api/user/")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
	
	@Autowired
	private CartDao cartDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ProductDao productDao;
	
	ObjectMapper objectMapper = new ObjectMapper();
	
	@PostMapping("cart/add")
	public ResponseEntity add(@RequestBody AddToCartRequest addToCartRequest) {
		
		System.out.println("request came for ADD PRODUCT TO CART");
		System.out.println(addToCartRequest);
		Optional<User> optionalUser = userDao.findById(addToCartRequest.getUserId());
		User user = null;
		if(optionalUser.isPresent()) {
			user = optionalUser.get();
		}
		
		Optional<Product> optionalProduct = productDao.findById(addToCartRequest.getProductId());
		Product product = null;
		if(optionalProduct.isPresent()) {
			product = optionalProduct.get();
		}
		
		Cart cart = new Cart();
		cart.setProduct(product);
		cart.setQuantity(addToCartRequest.getQuantity());
		cart.setUser(user);
		
		cartDao.save(cart);
		
		return new ResponseEntity(HttpStatus.OK);
		
	}
	
	@GetMapping("mycart")
	public ResponseEntity getMyCart(@RequestParam("userId") int userId) throws JsonProcessingException {
		
		System.out.println("request came for MY CART for USER ID : "+userId);
		
		List<CartDataResponse> cartDatas = new ArrayList<>();
		
		List<Cart> userCarts = cartDao.findByUser_id(userId);
		
		double totalCartPrice = 0;
		
		for (Cart cart : userCarts) {
			CartDataResponse cartData = new CartDataResponse();
			cartData.setCartId(cart.getId());
			cartData.setProductDescription(cart.getProduct().getDescription());
			cartData.setProductName(cart.getProduct().getTitle());
			cartData.setProductImage(cart.getProduct().getImageName());
			cartData.setQuantity(cart.getQuantity());
			cartData.setProductId(cart.getProduct().getId());
			
			cartDatas.add(cartData);
			
			double productPrice = Double.parseDouble(cart.getProduct().getPrice().toString());
			
			totalCartPrice =  totalCartPrice + (cart.getQuantity() * productPrice);
			
		}
		
		CartResponse cartResponse = new CartResponse();
		cartResponse.setTotalCartPrice(String.valueOf(totalCartPrice));
		cartResponse.setCartData(cartDatas);
		
		String json = objectMapper.writeValueAsString(cartResponse);
		
		System.out.println(json);
		
		return new ResponseEntity(cartResponse, HttpStatus.OK);
		
	}
	
	@GetMapping("mycart/remove")
	public ResponseEntity removeCartItem(@RequestParam("cartId") int cartId) throws JsonProcessingException {
		
		System.out.println("request came for DELETE CART ITEM WHOSE ID IS : "+cartId);
		
		Optional<Cart> optionalCart = this.cartDao.findById(cartId);
		Cart cart = new Cart();
		
		if(optionalCart.isPresent()) {
			cart = optionalCart.get();
		}
		
		this.cartDao.delete(cart);
		
		return new ResponseEntity("SUCCESS", HttpStatus.OK);
		
	}

}
