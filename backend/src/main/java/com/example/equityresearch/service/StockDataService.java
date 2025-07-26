package com.example.equityresearch.service;

import com.example.equityresearch.model.StockData;
import com.example.equityresearch.repository.StockDataRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.Instant;

@Service
public class StockDataService {
    private final StockDataRepository repository;

    public StockDataService(StockDataRepository repository) {
        this.repository = repository;
    }

    public StockData getLatest(String symbol) throws IOException {
        return repository.findTopBySymbolOrderByRetrievedAtDesc(symbol)
                .orElseGet(() -> scrapeAndSave(symbol));
    }

    private StockData scrapeAndSave(String symbol) {
        try {
            String url = "https://finance.yahoo.com/quote/" + symbol;
            Document doc = Jsoup.connect(url).get();
            Element price = doc.selectFirst("fin-streamer[data-field=\"regularMarketPrice\"]");
            StockData data = new StockData();
            data.setSymbol(symbol);
            data.setPrice(new BigDecimal(price.text().replace(",", "")));
            data.setRetrievedAt(Instant.now());
            return repository.save(data);
        } catch (IOException e) {
            throw new RuntimeException("Unable to scrape price", e);
        }
    }
}
