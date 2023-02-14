class TodosController {
    index(req, res) {
        return res.json("SHOW EVERY DATA IN DB");
    }
    show(req, res) {
        const { id } = req.params;
        return res.json(`SHOW ID ${id}`);
    }
    create(req, res) {
        return res.json("CREATE COLUMN");
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
}
export default new TodosController();
