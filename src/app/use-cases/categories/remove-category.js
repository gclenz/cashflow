module.exports = function makeRemoveCategory({ categoryDb }) {
  function categoryNotFound() {
    return {
      message: 'Category not found.',
    };
  }

  async function deleteCategory(category) {
    await categoryDb.remove(category);
    return {
      message: 'Category deleted.',
    };
  }

  return async function removeCategory({ id } = {}) {
    if (!id) {
      throw new Error('You must supply a category id.');
    }

    const categoryToDelete = await categoryDb.findById({ id });

    if (!categoryToDelete) {
      return categoryNotFound();
    }

    return deleteCategory(categoryToDelete);
  };
};
