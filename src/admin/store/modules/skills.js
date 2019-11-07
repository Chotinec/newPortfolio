export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {

  },
  actions: {
    async addSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post("/skills", skill);
        
        commit("categories/ADD_SKILL", data, {root: true});
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    async removeSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.delete(`/skills/${skill.id}`);
        
        commit("categories/REMOVE_SKILL", skill, {root: true});
      } catch (error) {
        throw new Error(error);
      }
    },
    async editSkill({ commit }, editedSkill) {
      try {
        const { data } = await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill);

        commit("categories/EDIT_SKILL", data, {root: true});
      } catch (error) {
        throw new Error(error);
      }
    }
  }
}