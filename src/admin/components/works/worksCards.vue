<template lang="pug">
  .works-cards
          ul.works-cards__list
            li.words-cards__item
              button(
                type="button"
                @click="showFormAdd"
              ).btn.btn--add-card
                .btn__card-icon
                .btn__card-title Добавить работу
            li.words-cards__item(
              v-for="work in works"
              :key="work.id"
            )
              works-card(
                :work="work"
              )
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    worksCard: () => import("./worksCard")
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapMutations("works", ["SHOW_FORM"]),
    ...mapActions("works", ["fetchWorks"]),
    showFormAdd() {
      console.log("show");
      this.SHOW_FORM();
    }
  },
  async created() {
    try {
      await this.fetchWorks();

      this.SHOW_TOOLTIP({
        type: "success",
        text: "Работы загружены"
      });
    } catch (error) {
      this.SHOW_TOOLTIP({
        type: "error",
        text: error.response.data.error
      });
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .works-cards__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    grid-gap: 30px;

     @include tablets {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
     }

      @include big-phones {
        grid-template-columns: 1fr;
        grid-gap: 10px;
      }
  }

  .words-cards__item {
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }

</style>