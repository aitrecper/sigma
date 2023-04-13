package com.sigma.sigma.services;

import com.sigma.sigma.entities.Facturas;
import com.sigma.sigma.repositories.FacturasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturasService {

    @Autowired
    private FacturasRepository facturasRepository;

    public List<Facturas> findAll(){
        return facturasRepository.findAll();
    }

    public Facturas findById(Long id){
        return facturasRepository.findById(id).get();
    }

    public Facturas save(Facturas facturas){
        return facturasRepository.save(facturas);
    }

    public String delete(Facturas facturas){
        facturasRepository.delete(facturas);
        return "Factura eliminada";
    }

    public String deleteById(Long id){
        facturasRepository.deleteById(id);
        return "Factura eliminada";
    }

    public Facturas update(Facturas facturas){
        return facturasRepository.save(facturas);
    }
}
