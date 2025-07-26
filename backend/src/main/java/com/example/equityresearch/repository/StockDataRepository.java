package com.example.equityresearch.repository;

import com.example.equityresearch.model.StockData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StockDataRepository extends JpaRepository<StockData, Long> {
    Optional<StockData> findTopBySymbolOrderByRetrievedAtDesc(String symbol);
}
