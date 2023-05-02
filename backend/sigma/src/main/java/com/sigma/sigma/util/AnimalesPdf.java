package com.sigma.sigma.util;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;


import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.Document;
import com.itextpdf.text.*;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.sigma.sigma.entities.Animales;
import com.sigma.sigma.entities.Familias;
import com.sigma.sigma.entities.Trabajadores;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AnimalesPdf
{
//created PDF document instance

    private Familias familia;
    private Animales animal;
    private Trabajadores trabajador;

    public void generatePDF(){
        {
            try {

                //generate a PDF at the specified location
                PdfWriter writer;

                Functions functions = new Functions();
                String filename = "Contrato_" + familia.getNombre() + "_" + familia.getApellido1() + "-" + animal.getNombre();
//                String filename = "test";
                writer = new PdfWriter("src/generated/pdf/"+filename+".pdf");
                PdfDocument doc = new PdfDocument(writer);
                Document document = new Document(doc);

                Paragraph br = new Paragraph("\n");

                System.out.println("PDF created.");

                //adds paragraph to the PDF file
                Paragraph titulo1 = functions.setTitle1("CONTRATO ADOPCIÓN");
                document.add(titulo1);
                document.add(br);
                document.add(br);
                Paragraph titulo2 = functions.setTitulo2("COMPARECIENDO");
                document.add(titulo2);
                document.add(br);

                Paragraph p1 = functions.setParagraph1(familia);
                document.add(p1);
                document.add(br);

                Paragraph p2 = functions.setParagraph2(trabajador);
                document.add(p2);
                document.add(br);

                Paragraph text3 = functions.setText3();
                document.add(text3);

                Paragraph title3 = functions.setTitulo2("ESTIPULACIONES");
                document.add(title3);

                Paragraph text4 = functions.setText4();
                document.add(text4);

                Paragraph table = functions.setTable(animal);
                document.add(table);

                Paragraph p5 = functions.setParagraph5();

                //close the PDF file
                doc.close();
                //closes the writer
                //writer.close();
            }catch (FileNotFoundException e) {
                throw new RuntimeException(e);
            }
        }
    }
}

class Functions {

    public Paragraph setTitle1(String text){
        Text textTitulo1 = new Text(text);
        textTitulo1.setUnderline();
        textTitulo1.setBold();
        Paragraph titulo1 = new Paragraph();
        titulo1.add(textTitulo1);
        titulo1.setTextAlignment(TextAlignment.CENTER);

        return titulo1;
    }

    public Paragraph setTitulo2(String text){
        Text textTitulo1 = new Text(text);
        textTitulo1.setBold();
        Paragraph titulo1 = new Paragraph();
        titulo1.add(textTitulo1);
        titulo1.setTextAlignment(TextAlignment.CENTER);

        return titulo1;
    }

    public Paragraph setParagraph1(Familias familias){
        Paragraph p1 = new Paragraph(
            "De una parte, D./Dña. " + familias.getNombre() + " " + familias.getApellido1() + " " + familias.getApellido2()
            + ", en su propio nombre y Derecho con DNI " + familias.getDni() + ", con domicilio en " + familias.getDireccion()
            + " en " + familias.getPoblacion() + ", con teléfono " + familias.getTelefono() + " y email " + familias.getMail()
            + " en adelante el Adoptante."
        );


        return p1;
    }

    public Paragraph setParagraph2(Trabajadores trabajador){
        Paragraph p2 = new Paragraph(
            "Y, de otra parte, D./Dña. " + trabajador.getNombre() + " " + trabajador.getApellido() + " " + trabajador.getApellido2()
            + ", mayor de edad, con " + trabajador.getEdad() + ", en nombre y representación de SIGMA, con CIF A12345678, con domicilio"
            + " Carrer d'En Llàstics, 2, Barcelona, con teléfono 937895461 y con email contacto@sigma.com, en delante la Asocioación."
        );

        return p2;
    }

    public Paragraph setText3(){
        Paragraph textP3 = new Paragraph();

        Text text1 = new Text("Ambas partes acuerdan celebrar el presente ");
        Text text2 = new Text("CONTRATO");
        text2.setBold();
        Text text3 = new Text(", de aceuerdo con las siguientes estipulaciones");

        textP3.add(text1);
        textP3.add(text2);
        textP3.add(text3);

        return textP3;
    }

    public Paragraph setText4(){
        Paragraph paragraph = new Paragraph("1ª El Adoptante se compromete a adoptar al animal de la Asociación con los datos que se " +
                "reseñan a continuación: ");

        return paragraph;
    }

    public Paragraph setTable(Animales animal){
        Paragraph paragraph = new Paragraph();

        return paragraph;
    }

    public Paragraph setParagraph5() {

        Paragraph paragraph = new Paragraph();
        Text paragraphText1 = new Text(
            "2º El adoptante declara adoptar al animal única y exclusivamente como animal de compañía.\n" +
            "3º El animal entregado en adopción no podrá ser utilizado para:\n" +
            "  a.- Experimentación de cualquier tipo.\n" +
            "  b.- La participación en peleas o enfrentamientos con otros animales.\n" +
            "  c.- La cría.\n" +
            "  d.- Caza\n" +
            "  e.- Participación en cualquier tipo de espectáculo. \n"
        );

        Text paragraphText2 = new Text(
          "4º En ningún caso se podrá someter al animal a cualquier forma de maltrato, tratamiento " +
          "indebido o contrario a las disposiciones de la Ley de Protección Animal vigente, normativa " +
          "que la desarrolle, y Código Penal. Esto incluye la "
        );

        Text paragraphText3 = new Text("prohibición");
        paragraphText3.setUnderline();
        paragraphText3.setBold();

        Text paragraphText4 = new Text(" de realizar la ");

        Text paragraphText5 = new Text("desungulación").setBold();

        Text paragraphText6 = new Text(" al animal adoptado o el ");

        Text paragraphText7 = new Text("corte de rabo").setBold();

        Text paragraphText8 = new Text(
            ".\n"
            + "5º El adoptante se compromete a proporcionar al animal alimentación y bebida suficiente y " +
                    "adecuada, prestarle los cuidados de higiene necesarios, la debida asistencia veterinaria, " +
                    "cuidarlo y respetarlo.\n" +
                    "\n" +
                    "6º Asimismo se compromete a no regalar, vender o ceder por cualquier título al animal; en " +
                    "caso de no poder hacerse cargo de este por cualquier causa, se pondrá en contacto con la " +
                    "Asociación que recuperará la custodia y propiedad del mismo.\n" +
                    "7º Para proceder a la eutanasia del animal (por motivos diferentes a enfermedad terminal), se " +
                    "requerirá el consentimiento previo de la Asociación. En caso de discrepancia, esta última se " +
                    "hará cargo de aquél.\n" +
                    "8º La desaparición del animal, por robo, perdida, extravío o por cualquier otra causa, debe ser " +
                    "notificada a la Asociación, a fin de que colabore en su búsqueda. El Adoptante debe " +
                    "interponer la correspondiente denuncia en la Comisaría de la Policía Local.\n" +
                    "9º El adoptante se compromete a esterilizar al animal en caso de no estar esterilizado por " +
                    "motivos de salud o por no alcanzar la edad adecuada (cachorros) en el plazo máximo de un " +
                    "año. En caso de ignorar la norma y preñar el animal o usarlo para cría, la asociación podría " +
                    "reclamar la devolución del mismo para pasar a ser custodiado por la asociación.\n" +
                    "PROHIBICIÓN ABSOLUTA DE CRÍAR CON EL ANIMAL ADOPTADO.\n" +
                    "11º Las obligaciones anteriormente descritas, tendrán el carácter de condición resolutoria; es\n" +
                    "decir, el incumplimiento de cualquiera de ellas, producirá de pleno de derecho la resolución\n" +
                    "del contrato, recuperando la Asociación de forma inmediata la propiedad y posesión del\n" +
                    "animal. "
        );

        return paragraph;
    }
}