package com.sigma.sigma.util;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;


import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import com.sigma.sigma.entities.Animales;
import com.sigma.sigma.entities.Familias;
import lombok.Setter;

@Setter
public class AnimalesPdf
{
//created PDF document instance

    private Familias familia;
    private Animales animal;


        Document doc = new Document();

        //generate a PDF at the specified location
        PdfWriter writer;

        Functions functions = new Functions();

        {
        try {
            //String filename = "Contrato_" + familia.getNombre() + "_" + familia.getApellido1() + "-" + animal.getNombre();
            String filename = "test";
            writer = PdfWriter.getInstance(doc, new FileOutputStream("src/generated/pdf/"+filename+".pdf"));

            System.out.println("PDF created.");
            //opens the PDF
            doc.open();
            //adds paragraph to the PDF file
            Paragraph titulo1 = functions.setTitle1();
            doc.add;
            doc.add(Chunk.NEWLINE);
            doc.add(Chunk.NEWLINE);
            Paragraph titulo2 = new Paragraph("COMPARECIENDO");

            //close the PDF file
            doc.close();
            //closes the writer
            writer.close();
        } catch (DocumentException e) {
            throw new RuntimeException(e);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}

class Functions {

    public Paragraph setTitle1(){
        Text textTitulo1 = new Text("CONTRATO ADOPCIÓN");
        textTitulo1.setUnderline();
        Paragraph titulo1 = new Paragraph();
        titulo1.add(textTitulo1.toString());
        titulo1.setTextAlignment(TextAlignment.CENTER);

        return titulo1;
    }
}