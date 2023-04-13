package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Facturas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sigma.sigma.services.FacturasService;

import java.util.List;

@RestController
@RequestMapping("/api/facturas/")
public class FacturasController {

    @Autowired
    private  FacturasService facturasService;

    @GetMapping("")
    public List<Facturas> getFacturas() {
        return facturasService.findAll();
    }

    @GetMapping("{id}")
    public Facturas getFactura(@PathVariable Long id) {
        return facturasService.findById(id);
    }

    @PostMapping("")
    public Facturas addFactura(@RequestBody Facturas facturas) {
        return facturasService.save(facturas);
    }

    @PutMapping("{id}")
    public Facturas updateFactura(@PathVariable Long id, @RequestBody Facturas facturas) {
        facturas.setNumFactura(id);
        return facturasService.save(facturas);
    }

    @DeleteMapping("")
    public String deleteFacturas(@RequestBody Facturas facturas) {
        return facturasService.delete(facturas);
    }

    @DeleteMapping("{id}")
    public String deleteFactura(@PathVariable Long id) {
        return facturasService.deleteById(id);
    }
}
