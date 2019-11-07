<template lang="pug">
  section.comments-section
      .container
        .section__header
          h2.admin__title Блок «Работы»
        
        //- COMMENTS FORM
        form.comments-form
          .admin__title.admin__title--form Новый отзыв
          .comments-form__content
            .comments-form__photo
              label.comments-form__upload-block
                .comments-form__upload-photo-container
                  input(
                    type="file"
                  ).comments-form__upload-photo-input
                .btn.btn--upload-comment-photo Добавить фото  
            .comments-form__desc
              .comments-form__row
                .comments-form__col
                  label.comments-form__block
                    .comments-form__block-title Имя автора
                    input(
                      type="text" 
                      name="name"
                      placeholder="Введите Имя автора"
                    ).comments-form__field
                .comments-form__col
                  label.comments-form__block
                    .comments-form__block-title Титул автора
                    input(
                      type="text" 
                      name="title"
                      placeholder="Основатель LoftSchool"
                    ).comments-form__field
              .comments-form__row.comments-form__row--comment
                .comments-form__col
                  label.comments-form__block
                    .comments-form__block-title Отзыв
                    textarea(
                      name="comment"
                      rows="4" 
                      placeholder="Введите отзыв"
                    ).comments-form__field.comments-form__field--textarea  
              .comments-form__row.works-form__row--btns
                .works-form__btns
                  button(
                    type="button"
                  ).btn.btn--work-cancel Отмена
                  button(
                    type="button"
                  ).btn.btn--work-form Сохранить    
       
        //- COMMENT CARDS
        .comments-cards
          ul.comments-cards__list
            li.comments-cards__item
              button(type="button").btn.btn--add-card
                .btn__card-icon
                .btn__card-title Добавить отзывы
            li.comments-cards__item
              .comments-card
                .comments-card__author
                  .comments-card__author-pic
                    img(src="../../../images/content/user.jpg" alt="author picture").comments-card__author-img
                  .comments-card__author-desc
                    .comments-card__author-name Владимир Сабанцев
                    .comments-card__author-position Преподаватель
                .comments-card__desc 
                  p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .comments-card__btns
                  button(
                    type="button"
                  ).btn.btn--card-edit Править
                  button(
                    type="button"
                  ).btn.btn--card-remove Удалить
</template>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

 .comments-section {
    background: url('../../../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .comments-form {
    width: 100%;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    padding: 30px;
    margin-bottom: 30px;
  }

  .comments-form__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;

    @include big-phones {
      grid-template-columns: 1fr;
    }
  }

  .comments-form__upload-block {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .comments-form__upload-photo-container {
    width: 200px;
    height: 200px;
    background: #dee4ed;
    border-radius: 50%;
    position: relative;
    margin-bottom: 30px;

    &:after {
      content: "";
      position: absolute;
      @include centered('both');
      width: 84px;
      height: 112px;
      background: svg-load("user.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
    }

     @include big-phones {
      width: 150px;
      height: 150px;
    }
  }

  .comments-form__upload-photo-input {
    position: absolute;
    top: 0;
    left: -9999999px;
  }

  .comments-form__desc {
    width: 70%;

    @include tablets {
      width: 100%;
    }
  }

  .comments-form__row {
    width: 100%;
    margin-bottom: 25px;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    &--comment {
      margin-bottom: 50px;
    }

    &--btns {
      justify-content: flex-end;
    }
  }

  .comments-form__col {
    flex: 1;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .comments-form__block-title {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .comments-form__field {
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

  .comments-cards__list {
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

  .comments-cards__item {
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }

  .comments-card {
    height: 100%;
    padding: 30px;
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

  .comments-card__desc {
    opacity: 0.7;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .comments-card__btns {
    display: flex;
    justify-content: space-between;
  }

  .comments-card__author {
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(#1f232d, 0.15);
    margin-bottom: 30px;
  }

  .comments-card__author-pic {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    flex-shrink: 0;
    background: center center no-repeat;
    background-size: cover;
  }

  .comments-card__author-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .comments-card__author-name {
    color: #414c63;
    font-size: 18px;
    font-weight: 700;
  }

  .comments-card__author-position {
    font-size: 16px;
    font-weight: 600;
    color: rgba(65, 76, 99, 0.5);
  }

</style>