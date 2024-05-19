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
