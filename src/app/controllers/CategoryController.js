const {
  addCategory,
  removeCategory,
  listCategories,
} = require('../use-cases/categories');

class CategoryController {
  async listCategories(req, res) {
    try {
      const categories = await listCategories();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to list categories.' });
    }
  }

  async createCategory(req, res) {
    try {
      const category = await addCategory(req.body);

      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to create category.' });
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
      return res.status(400).json({ error: 'Failed to delete category.' });
    }
  }
}

module.exports = new CategoryController();
