package com.sigma.sigma.util;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.Paragraph;
public class AnimalesPdf
{
//created PDF document instance   
        Document doc = new Document();

        //generate a PDF at the specified location
        PdfWriter writer;

        {
        try {
            writer = PdfWriter.getInstance(doc, new FileOutputStream("src/generated/pdf/Motivation.pdf"));

            System.out.println("PDF created.");
            //opens the PDF
            doc.open();
            //adds paragraph to the PDF file
            doc.add(new Paragraph("If you're offered a seat on a rocket ship, don't ask what seat! Just get on."));
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