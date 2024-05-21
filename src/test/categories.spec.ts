import request from "supertest";
import { app } from "../app";

describe("GET /categories", () => {
    it("should return 200 OK", () => {
        return request(app).get("/categories").expect(200);
    });

    it("should return 200 OK", () => {
        return request(app)
            .get("/categories?includeInactives=true")
            .expect(200);
    });

    it("should return 400 BAD REQUEST", () => {
        return request(app)
            .get("/categories?includeInactives=jajaja")
            .expect(400)
            .expect(res => {
                if (res.body.message !== "Invalid parameter") {
                    throw new Error(
                        `Expected 'Invalid parameter' but got ${res.body.message}`,
                    );
                }
            });
    });
});

describe("GET /categories/:id", () => {
    it("should return 200 OK", () => {
        return request(app).get("/categories/1").expect(200);
    });

    it("should return 404 NOT FOUND", () => {
        return request(app)
            .get("/categories/4000")
            .expect(404);
    });

    it("should return 400 BAD REQUEST due to negative number", () => {
        return request(app)
            .get("/categories/-1")
            .expect(400)
            .expect(res => {
                const errorMessage = "Invalid id";
                if (res.body.message !== errorMessage) {
                    throw new Error(
                        `Expected ${errorMessage} but got ${res.body.message}`,
                    );
                }
            });
    });
    
    it("should return 400 BAD REQUEST due to invalid number", () => {
        return request(app)
            .get("/categories/jajajaja")
            .expect(400)
            .expect(res => {
                const errorMessage = "Invalid id";
                if (res.body.message !== errorMessage) {
                    throw new Error(
                        `Expected ${errorMessage} but got ${res.body.message}`,
                    );
                }
            });
    });
});

describe("POST /categories", () => {
    it("should create a new category and return 201 CREATED", async () => {
        const newCategory = {
            title: "title test",
            active: true,
        };

        const response = await request(app)
            .post("/categories")
            .send(newCategory)
            .expect(201);
        
        expect(response.body.data.category).toEqual({
            id: expect.any(Number), // El ID debe ser un número
            title: newCategory.title,
            active: Boolean(newCategory.active),
        });
    });
    
    it("should try to create a new category and return 400 BAD REQUEST due to already exists", async () => {
        const newCategory = {
            title: "title test",
            active: "true",
        };

        const response = await request(app)
            .post("/categories")
            .send(newCategory)
            .expect(400);
        
        expect(response.body).toEqual({
            data: null,
            message: "Category already exists",
        });
    });

    it("should create a new category inactive and return 201 CREATED", async () => {
        const newCategory = {
            title: "title test inactive",
            active: false,
        };

        const response = await request(app)
            .post("/categories")
            .send(newCategory)
            .expect(201);
        
        expect(response.body.data.category).toEqual({
            id: expect.any(Number),
            title: newCategory.title,
            active: false,
        });
    });
});
