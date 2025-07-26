package com.example.equityresearch.controller;

import com.example.equityresearch.model.StockData;
import com.example.equityresearch.service.StockDataService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stocks")
public class StockController {
    private final StockDataService service;

    public StockController(StockDataService service) {
        this.service = service;
    }

    @GetMapping("/{symbol}")
    public StockData latest(@PathVariable String symbol) throws Exception {
        return service.getLatest(symbol);
    }
}
