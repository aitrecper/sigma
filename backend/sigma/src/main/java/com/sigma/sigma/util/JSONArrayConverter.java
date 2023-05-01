package com.sigma.sigma.util;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;


import org.slf4j.LoggerFactory;

import ch.qos.logback.classic.Logger;
import org.springframework.boot.configurationprocessor.json.JSONArray;

@Converter(autoApply = true)
public class JSONArrayConverter implements AttributeConverter<JSONArray, String> {

    private static final Logger logger = (Logger) LoggerFactory.getLogger(JSONArrayConverter.class);

    @Override
    public String convertToDatabaseColumn(JSONArray array)
    {
        String data = null;
        try
        {
            data = array.toString();
        }
        catch (final Exception e)
        {
            logger.error("JSON writing error", e);
        }

        return data;
    }

    @Override
    public JSONArray convertToEntityAttribute(String data)
    {
        JSONArray array = null;

        try
        {
            array = new JSONArray(data);
        }
        catch (final Exception e)
        {
            logger.error("JSON reading error", e);
        }

        return array;
    }
}
