package com.example.demo.util;

import com.github.sisyphsu.dateparser.DateParser;

import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;

public class agecalculation {
    int age;

    public static LocalDate convertToLocalDate(Date dateToConvert) {
        // usamos Instant para convertir Date a LocalDate
        return dateToConvert.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
    }

    public int agecalculation(String dateRAW){
        DateParser parser = DateParser.newBuilder().build();
        LocalDate date = convertToLocalDate(parser.parseDate(dateRAW));
        Date now = new Date();
        if ((date != null) && (now != null)) { //verificamos que las fechas no sean nulas
            //calculamos la diferencia entre las dos fechas con el objeto Period
            return Period.between(date, convertToLocalDate(now)).getYears();
        } else {
            return 0;
        }
    }

}