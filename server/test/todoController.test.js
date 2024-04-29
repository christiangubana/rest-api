(async () => {
  // test/todoController.test.js
  const chai = require("chai");
  const chaiHttp = require("chai-http");
  const app = require("../index");
  const Todo = require("../models/todo.model");

  chai.use(chaiHttp);
  const expect = chai.expect;

  describe("Todo Controller", () => {
    beforeEach(async () => {
      // Clear the Todo collection before each test
      await Todo.deleteMany({});
    });

    describe("GET /api/todos", () => {
      it("should return an empty array when no todos exist", async () => {
        const res = await chai.request(app).get("/api/todos");
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array").that.is.empty;
      });
    });

    describe("POST /api/todos", () => {
      it("should add a new todo", async () => {
        const todoData = {
          title: "Test Todo",
          description: "This is a test todo",
        };
        const res = await chai.request(app).post("/api/todos").send(todoData);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object").that.includes(todoData);
      });
    });

    describe("PUT /api/todos/:id", () => {
      it("should update an existing todo", async () => {
        // First, create a todo
        const todoData = {
          title: "Test Todo",
          description: "This is a test todo",
        };
        const createRes = await chai
          .request(app)
          .post("/api/todos")
          .send(todoData);
        const todoId = createRes.body.id;

        // Update the todo
        const updatedTodoData = {
          title: "Updated Test Todo",
          description: "This is an updated test todo",
        };
        const updateRes = await chai
          .request(app)
          .put(`/api/todos/${todoId}`)
          .send(updatedTodoData);
        expect(updateRes).to.have.status(200);
        expect(updateRes.body).to.deep.include(updatedTodoData);
      });
    });

    describe("DELETE /api/todos/:id", () => {
      it("should delete an existing todo", async () => {
        // First, create a todo
        const todoData = {
          title: "Test Todo",
          description: "This is a test todo",
        };
        const createRes = await chai
          .request(app)
          .post("/api/todos")
          .send(todoData);
        const todoId = createRes.body.id;

        // Delete the todo
        const deleteRes = await chai
          .request(app)
          .delete(`/api/todos/${todoId}`);
        expect(deleteRes).to.have.status(200);
        expect(deleteRes.body).to.deep.equal({
          msg: "Todo deleted successfully",
        });

        // Verify the todo is deleted
        const verifyRes = await chai.request(app).get(`/api/todos/${todoId}`);
        expect(verifyRes).to.have.status(404);
        expect(verifyRes.body).to.deep.equal({ message: "Todo not found" });
      });
    });
  });
})();
