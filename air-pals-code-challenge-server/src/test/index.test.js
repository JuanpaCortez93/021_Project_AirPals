import request from "supertest";
import app from "../app.js"

describe('POST /getAddressByName', () => {

    test('Should respond with a 200 status code', async () => {
        const response = await request(app).post('/getAddressByName').send({addressTextInput: "Quito"});
        expect(response.statusCode).toBe(200);
    });

    test('Should have a Content-Type: json', async () => {
        const response = await request(app).post('/getAddressByName').send({ addressTextInput: "Quito" });
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });

});

describe('POST /getZipCodeByPlaceId', () => {

    test('Should respond with a 200 status code', async () => {
        const response = await request(app).post('/getZipCodeByPlaceId').send({placeIdAddress: "ChIJn3xCAkCa1ZERclXvWOGRuUQ"});
        expect(response.statusCode).toBe(200);
    });

    test('Should have a Content-Type: json', async () => {
        const response = await request(app).post('/getZipCodeByPlaceId').send({ placeIdAddress: "ChIJn3xCAkCa1ZERclXvWOGRuUQ" });
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });

});

