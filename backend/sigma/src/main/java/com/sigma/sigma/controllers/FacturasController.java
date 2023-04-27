package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Facturas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sigma.sigma.services.FacturasService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FacturasController {

    @Autowired
    private  FacturasService facturasService;

    @GetMapping("/facturas")
    public List<Facturas> getFacturas() {
        return facturasService.findAll();
    }

    @GetMapping("/facturas/{id}")
    public Facturas getFactura(@PathVariable Long id) {
        return facturasService.findById(id);
    }

    @PostMapping("/facturas/add")
    public Facturas addFactura(@RequestBody Facturas facturas) {
        return facturasService.save(facturas);
    }

    @PutMapping("/facturas/update/{id}")
    public Facturas updateFactura(@PathVariable Long id, @RequestBody Facturas facturas) {
        facturas.setNumFactura(id);
        return facturasService.save(facturas);
    }

    @DeleteMapping("/facturas/delete")
    public String deleteFacturas(@RequestBody Facturas facturas) {
        return facturasService.delete(facturas);
    }

    @DeleteMapping("/facturas/delete/{id}")
    public String deleteFactura(@PathVariable Long id) {
        return facturasService.deleteById(id);
    }
}
