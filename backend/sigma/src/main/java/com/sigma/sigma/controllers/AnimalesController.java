package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Animales;
import com.sigma.sigma.services.AnimalesService;
import com.sigma.sigma.util.AnimalesPdf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AnimalesController {

    @Autowired
    private AnimalesService animalesService;

    @GetMapping("/animales")
    public List<Animales> getAnimales() {
        return animalesService.findAll();
    }

    @GetMapping("/animales/{id}")
    public Animales getAnimalesById(@PathVariable Long id) {
        return animalesService.findById(id);
    }

    @PostMapping("/animales")
    public Animales addAnimales(@RequestBody Animales animales) {
        return animalesService.save(animales);
    }

    @PutMapping("animales/{id}")
    public Animales updateAnimales(@PathVariable Long id, @RequestBody Animales animales) {
        return animalesService.update(id, animales);
    }

    @DeleteMapping("animales/")
    public String deleteAnimales( @RequestBody Animales animales) {
        return animalesService.delete(animales);
    }

    @DeleteMapping("animales/{id}")
    public String deleteAnimalesById(@PathVariable Long id) {
        return animalesService.deleteById(id);
    }

    @GetMapping("/pdf")
    public ResponseEntity<ByteArrayResource> getAnimalesPdf() throws IOException {
        AnimalesPdf animalesPdf = new AnimalesPdf();
        File file = new File("src/generated/pdf/Motivation.pdf");
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }

}
