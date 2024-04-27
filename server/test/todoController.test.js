const chai = require("chai");
// const chai =  import("chai");
// const { expect } = require("chai");

const chaiHttp = require("chai-http");
const app = require("../index");
const Todo = require("../models/todo.model");

chai.use(chaiHttp);
const expect = chai.expect;
chai.expect(res).to.have.status(200);
chai.expect(res.body).to.be.an("array").that.is.empty;

describe("Todo Controller", () => {
  // Run this block of code before each test case
  beforeEach(async () => {
    // Clear the Todo collection before each test
    await Todo.deleteMany({});
  });

  describe("GET /todos", () => {
    it("should return an empty array when no todos exist", async () => {
      const res = await chai.request(app).get("/todos");
      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array").that.is.empty;
    });
  });

  describe("POST /todos", () => {
    it("should add a new todo", async () => {
      const todoData = {
        title: "Test Todo",
        description: "This is a test todo",
      };
      const res = await chai.request(app).post("/todos").send(todoData);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an("object").that.includes(todoData);
    });
  });
});
