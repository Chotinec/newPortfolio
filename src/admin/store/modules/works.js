export default {
  namespaced: true,
  state: {
    works: [],
    showForm: false,
    editMode: false,
    editedWork: {},
    editedTags: []
  },
  mutations: {
    EDIT_MODE_ON(state, work) {
      state.editMode = true;
      state.editedWork = { ...work };
      state.editedTags = state.editedWork.techs.split(",");
    },
    EDIT_MODE_OFF(state) {
      state.editMode = false;
      state.editedWork = {};
      state.editedTags = [];
    },
    SHOW_FORM(state) {
      console.log("show")
      state.showForm = true;
    },
    CLOSE_FORM(state) {
      state.showForm = false;
    },
    ADD_WORK(state, work) {
      state.works.unshift(work);
    },
    REMOVE_WORK(state, workId) {
      state.works = state.works.filter(
        work => work.id !== workId
      );
    },
    FETCH_WORKS(state, works) {
      state.works = works;
    },
    SET_EDITED_WORK(state, work) {
      state.editedWork = {...work};
    },
    SET_EDITED_TAGS(state, tags) {
      state.editedTags = tags;
    },
    REMOVE_TAG: (state, deletedTag) => {
      state.editedTags = state.editedTags.filter(tag => tag !== deletedTag);
    },
    EDIT_WORK(state, editedWork) {
      state.works = state.works.map(
        work => work.id === editedWork.id ? editedWork : work
      );
    },
    ADD_TAGS: (state, addingTags) => {
      let tagsForAdd = addingTags.split(",");
      console.log(tagsForAdd.length);
      state.editedTags = [...state.editedTags, ...tagsForAdd];
    }
  },
  actions: {
    async addWork({ commit }, work) {
      try {
        const response = await this.$axios.post("/works", work);
        commit("ADD_WORK", response.data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchWorks({ commit }) {
      try {
        let responseUserId = await this.$axios.get("/user");
        let userId = responseUserId.data.user.id;
        console.log(userId);
        
        const response = await this.$axios.get(`/works/${userId}`);
        commit("FETCH_WORKS", response.data.reverse());
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editWork({ commit }, workData) {
      try {
        const response = await this.$axios.post(`/works/${workData.id}`, workData.data);
        commit("EDIT_WORK", response.data.work);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}