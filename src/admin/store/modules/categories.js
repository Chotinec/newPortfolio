export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.unshift(category);
    },
    REMOVE_CATEGORY(state, deletedCategory) {
      state.categories = state.categories.filter(
        category => category.id != deletedCategory.id
      );
    },
    EDIT_CATEGORY(state, editedCategory) {
      state.categories = state.categories.map(category =>
        category.id === editedCategory.id ? editedCategory : category
      );
    },
    ADD_SKILL(state, newSkill) {
      state.categories = state.categories.map(category => {
        if (category.id == newSkill.category) {
          category.skills.push(newSkill);
        }

        return category;
      })
    },
    REMOVE_SKILL(state, deletedSkill) {
      const removeSkill = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };

      const findRequiredCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkill(category);
        }

        return category;
      };

      state.categories = state.categories.map(findRequiredCategory);
    },
    EDIT_SKILL(state, editedSkill) {
      const editSkill = category => {
        category.skills = category.skills.map(skill => {
          skill.id == editedSkill.id ? editedSkill : skill
        })
      };

      const findRequiredCategory = category => {
        if (category.id === editedSkill.category) {
          editSkill(category);
        }

        return category;
      };

      state.categories = state.categories.map(findRequiredCategory);
    }
  },
  actions: {
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const userIdResponse = await this.$axios.get("/user"); //205
        const userId = userIdResponse.data.user.id;
       
        const { data } = await this.$axios.get("/categories/" + userId);
        commit("SET_CATEGORIES", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCategory({ commit }, category) {
      try {
        const { data } = await this.$axios.delete(`/categories/${category.id}`);
        commit("REMOVE_CATEGORY", category);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editCategory({ commit }, editedCategory) {
      try {
        const { data } = await this.$axios.post(`/categories/${editedCategory.id}`, {
          title: editedCategory.category
        });
        commit("EDIT_CATEGORY", editedCategory);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}