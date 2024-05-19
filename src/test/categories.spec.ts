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
