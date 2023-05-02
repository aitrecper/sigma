package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Animales;
import com.sigma.sigma.entities.Facturas;
import com.sigma.sigma.entities.Familias;
import com.sigma.sigma.entities.Trabajadores;
import com.sigma.sigma.services.AnimalesService;
import com.sigma.sigma.services.FacturasService;
import com.sigma.sigma.services.FamiliasService;
import com.sigma.sigma.services.TrabajadoresService;
import com.sigma.sigma.util.AnimalesPdf;
import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/files")
public class FilesController {

    //https://www.devglan.com/spring-boot/spring-boot-file-upload-download


    @Autowired
    private ServletContext servletContext;

    @Autowired
    FamiliasService familiasService;

    @Autowired
    AnimalesService animalesService;

    @Autowired
    TrabajadoresService trabajadoresService;

    @Autowired
    private FacturasService facturasService;


    @GetMapping("/generateContract/{idFamilia}/{idAnimal}/{idTrabajador}")
    public ResponseEntity<ByteArrayResource> generateContract(@PathVariable Long idFamilia, @PathVariable Long idAnimal, @PathVariable Long idTrabajador) throws IOException {



        Familias familia = familiasService.findById(idFamilia).get();
        System.out.println(familia);
        Animales animal = animalesService.findById(idAnimal);
        System.out.println(animal);
        Trabajadores trabajador = trabajadoresService.findById(idTrabajador);

        Double costesVeterinarios = 0.0;

        List<Facturas> facturas = facturasService.findAll();

        for(Facturas factura : facturas){
            if(animal.getChip().equals(factura.getChip())){
                costesVeterinarios+=factura.getImporte();
            }
        }

        AnimalesPdf animalesPdf = new AnimalesPdf(familia, animal, trabajador, costesVeterinarios);
        animalesPdf.generatePDF();


        String filename = "Contrato_" + familia.getNombre() + "_" + familia.getApellido1() + "-" + animal.getNombre();
//        String filename = "test";

        File file = new File("src/generated/pdf/"+filename+".pdf");
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        headers.add("Content-Disposition", "attachment; filename=" + filename + ".pdf");
        MediaType mediaType = MediaType.parseMediaType("application/pdf");
        headers.setContentType(mediaType);
        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .body(resource);
    }

    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                String realPath = servletContext.getRealPath("src/uploads/images/");
                File uploadDir = new File(realPath);
                if (!uploadDir.exists()) {
                    uploadDir.mkdirs();
                }
                File serverFile = new File(uploadDir.getAbsolutePath() + File.separator + file.getOriginalFilename());
                file.transferTo(serverFile);
                return "redirect:/success";
            } catch (Exception e) {
                return "redirect:/error";
            }
        } else {
            return "redirect:/error";
        }
    }


    @PostMapping("/uploads")
    public ResponseEntity uploadToLocalFileSystem(@RequestParam("file") MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Path path = Paths.get("src/uploads/images/" + fileName);
        try {
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/files/download/")
                .path(fileName)
                .toUriString();
        return ResponseEntity.ok(fileDownloadUri);
    }

    @GetMapping("/download/{fileName:.+}")
    public void downloadFileFromLocal(@PathVariable String fileName) {
        Path path = Paths.get("src/uploads/images/" + fileName);
        Resource resource = null;
        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType())
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
//                .body(resource);
    }

    @PostMapping("/multi-upload")
    public ResponseEntity multiUpload(@RequestParam("files") MultipartFile[] files) {
        List<Object> fileDownloadUrls = new ArrayList<>();
        Arrays.asList(files)
                .stream()
                .forEach(file -> fileDownloadUrls.add(uploadToLocalFileSystem(file).getBody()));
        return ResponseEntity.ok(fileDownloadUrls);
    }
}
