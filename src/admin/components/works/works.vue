<template lang="pug">
  section.section.works-section
      .container
        .section__header
          h2.admin__title Блок «Работы»

          //- WORK FORM
        form.works-form
          .admin__title.admin__title--form Редактирование работы
          .works-form__content
            .works-form__photo
              label.works-form__upload-block
                .form__upload-photo-container
                  input(
                    type="file"
                  ).form__upload-photo-input
                  .form__upload-photo-content
                    span.form__upload-photo-desc Перетащите или загрузите для загрузки изображения
                    button.btn.btn--work-form ЗАГРУЗИТЬ
            .works-form__desk
              .works-form__row
                .works-form__col
                  label.works-form__block
                    .works-form__block-title Название
                    input(
                      type="text" 
                      name="name"
                      placeholder="Введите название"
                    ).works-form__field
              .works-form__row
                .works-form__col
                  label.works-form__block
                    .works-form__block-title Ссылка
                    input(
                      type="text" 
                      name="link"
                      placeholder="Вставьте ссылку"
                    ).works-form__field
              .works-form__row
                .works-form__col
                  label.works-form__block
                    .works-form__block-title Описание
                    textarea(
                      name="description"
                      rows="4" 
                      placeholder="Введите описание работы"
                    ).works-form__field.works-form__field--textarea
              .works-form__row.works-form__row--add-tags
                .works-form__col
                  label.works-form__block
                    .works-form__block-title Добавление тэга
                    input(
                      type="text" 
                      name="tags"
                      placeholder="Вставьте ссылку"
                    ).works-form__field
              .works-form__row.works-form__row--tags
                .works-form__col
                  .works-form__tags
                    .tags
                      .tags__list
              .works-form__row.works-form__row--btns
                  .works-form__btns
                    button(
                      type="button"
                    ).btn.btn--work-cancel Отмена
                    button(
                      type="button"
                    ).btn.btn--work-form Сохранить

        //- WORKS CARDS
        .works-cards
          ul.works-cards__list
            li.words-cards__item
              button(type="button").btn.btn--add-card
                .btn__card-icon
                .btn__card-title Добавить работу
            li.words-cards__item
              .works-card
                .works-card__picture
                  img(src="../../../images/content/preview/1.jpg" alt="work picture").works-card__img
                  .works-card__tags
                    .tags
                      .tags__list
                        each tag in ['html', 'css', 'js']
                          .tags__item= tag                     
                .works-card__content
                  .works-card__title Сайт школы образования
                  .works-card__desc
                    p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a(href="#").works-card__link= 'http://loftschool.ru'
                  .works-card__btns
                    button(
                      type="button"
                    ).btn.btn--card-edit Править
                    button(
                      type="button"
                    ).btn.btn--card-remove Удалить
</template>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .works-section {
    background: url('../../../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .section__header {
    margin-bottom: 60px;
  }

  .works-form {
    width: 100%;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-bottom: 30px;
    padding: 30px;

    @include phones {
      padding: 5%;
    }
  }

  /* .works-form--title {
    color: #414c63;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid rgba(#1f232d, 0.15);
    padding-bottom: 25px;
    padding-left: 10px;
    margin-bottom: 50px;
  } */

  .works-form__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

     /* @include tablets {
       grid-template-columns: 1fr;
     } */
  }

  .works-form__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

     @include tablets {
       grid-template-columns: 1fr;
     }
  }

  .works-form__upload-block {
    cursor: pointer;
  }

  .form__upload-photo-container {
    height: 50%;
    width: 100%;
    min-height: 250px;
    max-height: 350px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form__upload-photo-input {
    position: absolute;
    top: 0;
    left: -9999999px;
  }

  .form__upload-photo-content {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form__upload-photo-desc {
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 33.89px;
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }

  .works-form__desk {
    width: 100%;
  }

  .works-form__row {
    width: 100%;
    margin-bottom: 25px;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    &--add-tags {
      margin-bottom: 15px;
    }

    &--tags {
      margin-bottom: 40px;
    }

    &--btns {
      justify-content: flex-end;
    }
  }

  .works-form__col {
    flex: 1;
  }

  .works-form__block-title {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .works-form__field {
    background: none;
    border: none;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 20px;
    border-bottom: 1px solid #414c63;

    &::placeholder {
      opacity: 0.3;
    }

    &--textarea {
      resize: vertical;
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      border: solid 1px rgba(#414c63, 0.3);
      border-bottom: 0;
    }
  }

  /*WORKS TAGS */
  .tags__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  
  .tags__item {
    border-radius: 14.9px;
    padding: 7px 13px;
    background: #fff;
    font-size: 13px;
    font-weight: 600;
    color: rgba(40, 51, 64, 0.7);
    margin-right: 8px;
    margin-bottom: 5px;
  }

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

  .works-card {
    height: 100%;
    position: relative;

    &--edit {
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .works-card__picture {
    position: relative;
  }

  .works-card__content {
    padding: 40px 30px;
  }

  .works-card__title {
    color: #414c63;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .works-card__desc {
    opacity: 0.7;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .works-card__link {
    color: #383bcf;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 45px;
    transition: .3s;

    &:hover {
      text-decoration: underline;
    }
  }

  .works-card__btns {
    display: flex;
    justify-content: space-between;
  }

  .works-card__tags {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .tags__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .tags__item {
    opacity: 0.7;
    color: #283340;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 15px;
    background-color: #ffffff;
    padding: 7px 13px;
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
</style>