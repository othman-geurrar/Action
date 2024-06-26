const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app");

require("dotenv").config();

// MONGO_KEY="mongodb+srv://othmangourar:gothr123@action.goorovn.mongodb.net/?retryWrites=true&w=majority&appName=Action"

// /* Connecting to the database before each test. */
// beforeEach(async () => {
//   await mongoose.connect(MONGO_KEY);
// });

// /* Closing database connection after each test. */
// afterEach(async () => {
//   await mongoose.connection.close();
// });

// describe("GET /api/activities", () => {
//   it("should get all the activities", async () => {
//     const token = await request(app).post("/api/auth/login").send({
//       email: process.env.EMAIL,
//       password: process.env.PASSWORD,
//     });

//     const response = await request(app)
//       .get("/api/activities")
//       .set({
//         Authorization: "bearer " + token.body.token,
//         "Content-Type": "application/json",
//       });

//     expect(response.statusCode).toBe(200);
//     expect(response.body.length).toBeGreaterThan(0);
//   });
// });

describe("POST /api/activity", () => {
  it("should add an activity to the database", async () => {
    const token = await request(app).post("/api/auth/login").send({
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    });

    const response = await request(app)
      .post("/api/activity")
      .send({
        name: "Jogging",
        time: "3:00 PM",
      })
      .set({
        Authorization: "bearer " + token.body.token,
        "Content-Type": "application/json",
      });

    expect(response.statusCode).toBe(201);
  });
});
