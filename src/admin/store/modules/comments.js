export default {
  namespaced: true,
  state: {
    comments: [],
    showForm: false,
    editMode: false,
    editedComment: {}
  },
  mutations: {
    EDIT_MODE_ON(state) {
      state.editMode = true;
    },
    EDIT_MODE_OFF(state) {
      state.editMode = false;
    },
    SHOW_FORM(state) {
      state.showForm = true;
    },
    CLOSE_FORM(state) {
      state.showForm = false;
    },
    ADD_COMMENT(state, comment) {
      state.comments.unshift(comment);
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    REMOVE_COMMENT(state, commentId) {
      state.comments = state.comments.filter(
        comment => comment.id !== commentId
      );
    },
    SET_EDITED_COMMENT(state, comment) {
      state.editedComment = {...comment};
    },
    EDIT_COMMENT(state, editedComment) {
      state.comments = state.comments.map(
        comment => comment.id === editedComment.id ? editedComment : comment
      )
    }
  },
  actions: {
    async addComment({ commit }, comment) {
      try {
       const formData = new FormData();
        formData.append("author", comment.author);
        formData.append("occ", comment.occ);
        formData.append("text", comment.text);
        formData.append("photo", comment.photo);

        const { data } = await this.$axios.post("/reviews", formData);
        commit("ADD_COMMENT", data); 
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchComments({ commit }) {
      try {
        let responseUserId = await this.$axios.get("/user");
        let userId = responseUserId.data.user.id;
        
        const response = await this.$axios.get(`/reviews/${userId}`);
        commit("SET_COMMENTS", response.data.reverse());
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeComment({ commit }, commentId) {
      try {
        const response = await this.$axios.delete(`/reviews/${commentId}`);
        commit("REMOVE_COMMENT", commentId);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editComment({ commit }, editedCommentData) {
      try {
        const response = await this.$axios.post(`/reviews/${editedCommentData.id}`, editedCommentData.data);
        commit("EDIT_COMMENT", response.data.review)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};