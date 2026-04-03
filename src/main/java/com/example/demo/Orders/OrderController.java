package com.example.demo.Orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/place")
    public Order placeOrder(@RequestBody Order order){
        return orderService.placeOrder(order);
    }
}
