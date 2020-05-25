const { addCategory, removeCategory } = require('../use-cases/categories');

class CategoryController {
  async createCategory(req, res) {
    try {
      const category = await addCategory(req.body);

      return res.status(201).json(category);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Category creation failed.' });
    }
  }

  async deleteCategory(req, res) {
    const { id } = req.params;

    try {
      await removeCategory({ id });

      return res
        .status(200)
        .json({ message: 'Category successfully deleted.' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Failed to delete category.' });
    }
  }
}

module.exports = new CategoryController();
