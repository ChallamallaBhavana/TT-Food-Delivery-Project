package com.example.demo.Orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Cart.CartRepository;

@Service
public class OrderService {

    @Autowired
    OrderRepo orderRepository;
    
    public Order placeOrder(Order order){
        return orderRepository.save(order);
    }
}