const app = require("./app.js")
const supertest = require("supertest")
const request = supertest(app)

describe("/api/getall endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/api/getall")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello getall");
    })
})

describe("/api/getone endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/api/getone")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello getone");
    })
})


describe("/api/create endpoint", () => {
    it("should return a response", async () => {
        const response = await request.post("/api/create")
        expect(response.status).toBe(201)
        expect(response.text).toBe("Hello create");
    })
})

describe("/api/update endpoint", () => {
    it("should return a response", async () => {
        const response = await request.put("/api/update")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello update");
    })
})

describe("/api/delete endpoint", () => {
    it("should return a response", async () => {
        const response = await request.delete("/api/delete")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello delete");
    })
})


