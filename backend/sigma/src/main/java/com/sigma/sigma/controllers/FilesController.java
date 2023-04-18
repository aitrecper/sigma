package com.sigma.sigma.controllers;

import com.sigma.sigma.storage.StorageFileNotFoundException;
import com.sigma.sigma.storage.StorageService;
import com.sigma.sigma.util.AnimalesPdf;
import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/files")
public class FilesController {

    //https://www.devglan.com/spring-boot/spring-boot-file-upload-download

    private final StorageService storageService;

    @Autowired
    private ServletContext servletContext;

    @Autowired
    public FilesController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/generateContract/{nombreAnimal}")
    public ResponseEntity<ByteArrayResource> generateContract() throws IOException {
        AnimalesPdf animalesPdf = new AnimalesPdf();
        File file = new File("src/generated/pdf/Motivation.pdf");
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        headers.add("Content-Disposition", "attachment; filename=test.pdf");
        MediaType mediaType = MediaType.parseMediaType("application/pdf");
        headers.setContentType(mediaType);
        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .body(resource);
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @PostMapping("/upload/image/")
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
                                   RedirectAttributes redirectAttributes) {

        storageService.store(file);
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "redirect:/";
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

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }

//    @PostMapping("/multi-upload")
//    public ResponseEntity multiUpload(@RequestParam("files") MultipartFile[] files) {
//        List<Object> fileDownloadUrls = new ArrayList<>();
//        Arrays.asList(files)
//                .stream()
//                .forEach(file -> fileDownloadUrls.add(handleFileUpload(file).getBody()));
//        return ResponseEntity.ok(fileDownloadUrls);
//    }
}
