<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins";
  @import "../styles/layout/base";

  /* TITLE */
  .admin__title {
    font-size: 21px;
    font-weight: 700;
    color: #414c63;

    &--about {
      margin-right: 60px;
    }
  }
  
  /* BTN */
  .btn {
    font-size: 16px;
    font-weight: 600;
    color: rgba(65, 76, 99, 0.5);

    &--add-group {
      width: 21px;
      height: 21px;
      margin-right: 15px;
      color: #ffff;
      font-size: 15px;
      border-radius: 50%;
      background-image: linear-gradient(to right, #006aed, #3f35cb);
      
      &:hover {
        transform: scale(1.1);
      }
    }

    &--add-skill {
      width: 40px;
      height: 40px;
      background-image: linear-gradient(to right, #006aed, #3f35cb);
      border-radius: 50%;
      font-size: 30px;
      font-weight: 600;
      color: #fff;

      transition: transform .3s;

      &:hover {
        transform: scale(1.1);
      }
  }

    &--edit-skill-form {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: svg-load(
        "pencil.svg",
        fill=rgba(#000, 0.5),
        width=100%,
        height=100%
      )
      center center no-repeat;

      transition: all .3s;

      &:hover {
        background: svg-load(
          "pencil.svg",
          fill=rgba(#000, 1),
          width=100%,
          height=100%
        )
        center center no-repeat;
      }
    }

     &--remove-skill-form {
    display: inline-block;
    width: 14px;
    height: 12px;
    background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%)
      center center no-repeat;
    transition: transform .3s;

    &:hover {
      transform: scale(1.5);
    }
  }

    &--save-skill-form {
      display: inline-block;
      width: 15px;
      height: 12px;
      background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%)
        center center no-repeat;
      margin-right: 20px !important;
      transition: transform .3s;

      &:hover {
       transform: scale(1.5);
      }
    }

    
    &--edit-skill {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: svg-load(
        "pencil.svg",
        fill=rgba(#414c63, 0.5),
        width=100%,
        height=100%
      )
      center center no-repeat;
      margin-right: 20px !important;

      transition: all .3s;

      &:hover {
        background: svg-load(
        "pencil.svg",
          fill=rgba(#414c63, 1),
          width=100%,
          height=100%
        )
        center center no-repeat;
      }
    }

    &--trash-skill {
      display: inline-block;
      width: 12px;
      height: 15px;
      background: svg-load(
        "trash.svg",
        fill=rgba(#414c63, 0.5),
        width=100%,
        height=100%
      )
      center center no-repeat;

    transition: all .3s;

    &:hover {
        background: svg-load(
          "trash.svg",
          fill=rgba(#414c63, 1),
          width=100%,
          height=100%
        )
        center center no-repeat;
      }
    }
  }
  

  /* HEADER */
  .admin__container {
    height: 100%;
  }

  .header-section {
    background-image: linear-gradient(to right, #3e3e59, #454573);
    height: 80px;
  }
  
  .header {
    height: 100%;
    color: $text-color;
    margin-right: 20px;
    display: grid;
    align-items: center;
    grid-template: "left right" 1fr / 1fr 1fr;
  }

  .header__info {
    grid-area: left;
    display: flex;
    align-items: center;
  }

  .header__avatar {
    width: 44px;
    height: 44px;
    margin-right: 20px;
  }

  .header__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .header__content {
    display: flex;
    align-items: center;
  }

  .header__name {
    font-size: 18px;
    font-weight: 400;
    margin-right: 30px;
  }

  .header__title {
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
  }

  .header__btn {
    grid-area: right;
    justify-self: end;
    opacity: 0.7;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
  }

  /* NAVIGATION */
  .navigation-section {
    height: 80px;
  }

  .navigation {
    height: 100%;
    color: #414c63;
    display: flex;
    align-items: center;
  }

  .navigation__list {
    display: flex;
  }

  .navigation__item {
    margin-right: 60px;
    font-size: 16px;
    font-weight: 400;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transition: .3s;
      color: #383bcf;
    }
  }

  .navigation__item.active {
    position: relative;

    &:after {
      position: absolute;
      top: 30px;
      @include centered('x');
      content: "";
      width: 110px;
      height: 2px;
      background-color: #383bcf;
    }
  }

  /* ABOUT */
  .about-section {
    background: url('../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .about__header {
    display: flex;
    margin-bottom: 60px;
  }

  .about__header-add-group {
    display: flex;
   }

  .about__add-text {
    color: #383bcf;
    font-size: 16px;
    font-weight: 700;
  }

 
  /* SKILLS */
  .skill-forms__list {
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-gap: 30px;

    @include big-phones {
      grid-template-columns: 1fr;
      grid-gap: 30px 0;
    }
  }
  
  .skill-forms__item {
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }

  .skill-form {
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .skill-form__head-row {
    border-bottom: 1px solid rgba(#1f232d, .15);
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    position: relative;
  }

  .skill-form__head-btns {
    display: flex;
    align-items: center;
  }

  .skill-form__title {
    border: none;
    font-size: 18px;
    font-weight: 600;
    width: 60%;
    padding-bottom: 10px;
    /* border-bottom: 1px solid #000; */
    pointer-events: auto;

    @include tablets {
      width: 70%;
    } 

    @include phones {
      font-size: 16px;
    }
  }

  .skill-form__title.active {
    border-bottom: 1px solid #000;
  }

  .skill-form__edit-btns {
    display: none;
  }

  .skill-form__read-btns {
    display: inline-block;
  }

  .skill-form__table {
    width: 100%;
    flex: 1;
    overflow: auto;
    min-height: 50px;
    margin-bottom: 20px;
  }

  .skill-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 5px;
    overflow: auto;
  }

  .skill__row {

    &--edit {
      .skill__cell--title {
        border-bottom: 1px solid #000;
      }

      .skill__cell--percent {
        border-bottom: 1px solid #000;
      }

      .skill__edit-btns {
        display: inline-block;
      }

      .skill__read-btns {
        display: none;
      }
    }
  }

  .skill__cell {
    padding-top: 15px;
    padding-bottom: 5px;

    &--title {
      width: 60%;
    }

    &--percent {
      width: 45px;
    }

    &--btns {
      display: flex;
      justify-content: flex-end;
    }
  }


  .skill-form__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .skill__input {
    border: none;
    font-family: inherit;
    font-size: 16px;
    color: #414c63;;

     &--table {
      width: 100%;
    }

    &--new-title-wrapper {
      position: relative;
      margin-right: 12px;
    }

    &--new-title {
      width: 100%;
      border-bottom: 1px solid #000;
      padding-bottom: 0.7rem;
      margin-right: 10px;
      padding-left: 10px;
    }

    &--new-percent {
      width: 100%;
    }
  }

  .skill__percent {
    display: flex;
    align-items: center;
    position: relative;

    &--new-skill {
      width: 45px;
      margin-right: 30px;
      border-bottom: 1px solid #000;
      padding-bottom: 9px;
    }
  }

  .skill__percent-sign {
    font-family: inherit;
    font-size: 16px;
    color: rgba(65, 76, 99, 0.7);
  }

  .skill__edit-mode-btns {
    display: none;
  }

  .skill__read-btns {
    display: inline-block;
  }

  .skill__read-btns {
    display: inline-block;
  }

  .works-section {
    background: url('../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .works__header {
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

  .works-form--title {
    color: #414c63;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid rgba(#1f232d, 0.15);
    padding-bottom: 25px;
    padding-left: 10px;
    margin-bottom: 50px;
  }

  .works-form__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

     @include tablets {
       grid-template-columns: 1fr;
     }
  }

</style>

<template lang="pug">
  
  .wrapper.admin-wrapper
    .main-content
    
    //- HEADER
    section.section.header-section
       .container.admin__container
        header.header
          .header__info
            .header__avatar
              img(src="../images/content/user.jpg" alt="").header__img
            .header__content
              .header__name Хотинец Артем
              .header__title Панель администрирования
          a(href="#").header__btn Выйти

    //- NAVIGATION
    section.section.navigation-section
      .container.admin__container
        nav.navigation
          ul.navigation__list
            each item in ['Обо мне', 'Работы', 'Отзывы']
              li.navigation__item
                a.navigation__link(href="#")= item

    //- ABOUT
    section.section.about-section
      .container
        .about__header
          h2.admin__title.admin__title--about Блок «Обо мне»
          .about__header-add-group
            button(type="button").btn.btn--add-group +
            .about__add-text Добавить группу

        - 
          var skills = [
            {
              "skillsGroup": "Frontend",
              "skills": {
                "html5": 80,
                "css3": 80,
                "javascript": 70,
                "JavaScript & Vie.js": 50
              }
            },
            {
              "skillsGroup": "Workflow",
              "skills": {
                "GIT": 80,
                "Terminal": 70,
                "Gulp": 50,
                "Webpack": 30
              }
            }
          ]

        .about__forms
          .skill-forms
            ul.skill-forms__list

              li.skill-forms__item
                  .skill-form.skill-form-edit
                    .skill-form__head-row
                      input(
                        type="text" 
                        placeholder="Название новой группы"
                      ).skill-form__title
                      .skill-form__head-btns
                        .skill-form__edit-btns
                          button(
                            type='button'
                          ).btn.btn--save-skill-form
                          button(
                            type='button'
                          ).btn.btn--remove-skill-form
                        .skill-form__read-btns
                          button(
                            type='button'
                          ).btn.btn--edit-skill-form
                    .skill-form__table
                    //- empty table
                    .skill-form__footer
                      .skill__input--new-title-wrapper
                        input(
                          type="text" placeholder="Новый навык"
                        ).skill__input.skill__input--title.skill__input--new-title
                      .skill__percent.skill__percent--new-skill
                        input(
                          type="text" 
                          placeholder="100" 
                        ).skill__input.skill__input--percent.skill__input--new-percent
                        span.skill__percent-sign.skill__percent-sign--new-skill %
                      button(
                        type="button"
                      ).btn.btn--add-skill +     

              each item in skills
                li.skill-forms__item
                  .skill-form
                    .skill-form__head-row
                      input(
                        type="text" 
                        placeholder="Название новой группы"
                        value=`${item.skillsGroup}`).skill-form__title
                      .skill-form__head-btns
                        .skill-form__edit-btns
                          button(
                            type='button'
                          ).btn.btn--save-skill-form
                          button(
                            type='button'
                          ).btn.btn--remove-skill-form
                        .skill-form__read-btns
                          button(
                            type='button'
                          ).btn.btn--edit-skill-form
                    .skill-form__table
                      table.skill-table
                        each parcent, skill in item.skills
                          tr.skill__row
                            td.skill__cell.skill__cell--title
                              input(
                                type="text" 
                                placeholder="Новый навык" 
                                value=`${skill}`
                              ).skill__input.skill__input--table.skill__input--title
                            td.skill__cell.skill__cell--percent
                              .skill__percent
                                input(
                                  type="text" 
                                  placeholder="100" 
                                  value=`${parcent}`
                                ).skill__input.skill__input--table.skill__input--percent
                                span.skill__percent-sign %
                            td.skill__cell.skill__cell--btns
                              .skill__btn
                                .skill__edit-btns
                                    button(
                                      type='button'
                                    ).btn.btn--save-skill
                                    button(
                                      type='button'
                                    ).btn.btn--remove-skill
                                .skill__read-btns
                                  button(
                                    type='button'
                                  ).btn.btn--edit-skill
                                  button(
                                    type='button'
                                  ).btn.btn--trash-skill  
                    .skill-form__footer
                      .skill__input--new-title-wrapper
                        input(
                          type="text" placeholder="Новый навык"
                        ).skill__input.skill__input--title.skill__input--new-title
                      .skill__percent.skill__percent--new-skill
                        input(
                          type="text" 
                          placeholder="100" 
                        ).skill__input.skill__input--percent.skill__input--new-percent
                        span.skill__percent-sign.skill__percent-sign--new-skill %
                      button(
                        type="button"
                      ).btn.btn--add-skill +

    //- WORKS
    section.section.works-section
      .container
        .works__header
          h2.admin__title Блок «Работы»
        .works-form
          .works-form--title Редактирование работы
          form.form.works-form__content
            .works-form__photo



    //- COMMENTS
    section.comments-section


</template>