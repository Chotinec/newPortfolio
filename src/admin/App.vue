<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins";
  @import "../styles/layout/base";

  /* TITLE */
  .admin__title {
    font-size: 21px;
    font-weight: 600;
    color: #414c63;

    &--about {
      margin-right: 60px;
    }

    &--form {
      color: #414c63;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid rgba(#1f232d, 0.15);
      padding-bottom: 25px;
      padding-left: 10px;
      margin-bottom: 50px;
    }
  }
  
  /* BTN */
  .btn {
    font-size: 16px;
    font-weight: 600;
    color: rgba(65, 76, 99, 0.5);

    &--login-submit {
      padding: 34px 120px;
      background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
      border-radius: 40px 5px;
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      transition: .3s;

      &:hover {
        opacity: 0.5;
      }

       @include phones {
        padding: 33px 90px !important;
      }
    }

    &--login-close {
      position: absolute;
      right: 30px;
      top: 30px;
      display: inline-block;
      width: 19px;
      height: 19px;
      background: svg-load(
        "remove.svg",
        fill=#414c63,
        width=100%,
        height=100%
      )
      center center no-repeat;
      transition: .3s;
      
      &:hover {
        opacity: 0.8;
      }
    }

    &--add-group {
      font-weight: 600;
      color: #383bcf;
      display: flex;
      align-items: center;

      &:before {
        content: "+";
        width: 21px;
        height: 21px;
        margin-right: 15px;
        color: #ffff;
        font-size: 15px;
        border-radius: 50%;
        background-image: linear-gradient(to right, #006aed, #3f35cb);
        margin-right: 12px;
        transition: margin-right .3s;
      }
      
      &:hover {
        &:before {
          margin-right: 20px;
        }
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

    &--work-form {
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      border-radius: 25px;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 40px;
      padding-right: 40px;
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      transition: opacity .3s;

      &:hover {
        opacity: 0.7;;
      }
    }

    &--work-cancel {
      color: #383bcf;
      font-size: 16px;
      font-weight: 600;
      margin-right: 60px;
      transition: .3s;

      &:hover {
        text-decoration: underline;
      }
    }

    &--card-edit {
      opacity: 0.5;
      color: #414c63;
      font-size: 16px;
      font-weight: 600;
       display: flex;
      align-items: center;
       transition: .3s;

      &:after {
        content: "";
        width: 17px;
        height: 17px;
        background: svg-load(
          "pencil.svg",
          fill=rgba(#383bcf, 0.5),
          width=100%,
          height=100%
        )
        center center no-repeat;
        margin-left: 10px;
      }

      &:hover {
        opacity: 1;
      }
    }
  
    &--card-remove {
      opacity: 0.5;
      color: #414c63;
      font-size: 16px;
      font-weight: 600;
       display: flex;
      align-items: center;
       transition: .3s;

      &:after {
        content: "";
        width: 17px;
        height: 17px;
        background: svg-load(
          "remove.svg",
          fill=rgba(#c92e2e, 0.5),
          width=100%,
          height=100%
        )
        center center no-repeat;
        margin-left: 10px;
      }

      &:hover {
        opacity: 1;
      }
    }

    &--add-card {
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 30px 0 !important;

      @include big-phones {
        padding: 7% !important;
      }
    }

    &--upload-comment-photo {
      color: #383bcf;
      font-size: 16px;
      font-weight: 600;
      transition: .3s;

      &:hover {
        text-decoration: underline;
      }
    }

    &__card-icon {
      width: 150px;
      height: 150px;
      border: 2px solid #ffffff;
      border-radius: 50%;
      position: relative;
      margin-bottom: 20px;

      &:after {
        content: "+";
        position: absolute;
        @include centered('both');
        color: #ffffff;
        font-size: 72px;
        font-weight: 300;

         @include big-phones {
           font-size: 62px;
         }
      }

      @include big-phones {
        width: 75px;
        height: 75px;
      }
    }

    &__card-title {
      color: #ffffff;
      font-family: "Open Sans";
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
  }
  

  /* HEADER */
  .admin__container {
    height: 100%;
  }

  .header-block {
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
    transition: .3s;

    &:hover {
       opacity: 1;
    }
  }

  /* NAVIGATION */
  .navigation-block {
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
    pointer-events: auto;
    pointer-events: none;

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
      width: 50%;
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

  /* COMMENTS */
  .comments-section {
    background: url('../images/content/bg/admin_bg.jpg') center center no-repeat;
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

  /* LOGIN */
  .login {
    background: linear-gradient(rgba(#2d3c4e, 0.9), rgba(#2d3c4e, 0.9)), 
      url('../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    z-index: 150;

    display: none;
  }

  .login__content {
    position: absolute;
    @include centered('both');
    background: #fff;
    padding: 50px 75px;
  
    @include phones {
      padding: 20% 15%;
    }
}

.login__title {
  color: #414c63;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;

  @include phones {
    font-size: 30px;
  }
}

.login__form {
  width: 100%;
}

.login__form-row {
  width: 100%;
  display: flex;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  &--btn {
    justify-content: center;
  }
}

.login__form-block {
  border-bottom: 1px solid #414c63;
  width: 100%;
  padding-bottom: 10px;
  position: relative;

  &--login {
    .login__form-block-input {
      display: inline-block;
      background: svg-load(
        "user.svg", 
        fill=rgba(#414c63, 0.3), 
        width=100%, 
        height=100%
      ) 
      0 0 no-repeat;
    }
  }

  &--password {
    .login__form-block-input{
      display: inline-block;
      background: svg-load(
       "key.svg", 
        fill=rgba(#414c63), 
        width=100%, 
        height=100%
      ) 
      0 0 no-repeat;
    }
  }
}

.login__form-block-title {
  opacity: 0.3;
  color: #414c63;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}

.login__form-block-input {
  border: none;
  /* background: none; */
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #414c63;
  padding-left: 30px;
}

</style>

<template lang="pug">
  
  .wrapper.admin-wrapper
    .main-content

    //- LOGIN
    .login
      .login__content
        a(href="#").btn.btn--login-close
        .login__title Авторизация
        .login__form
          .login__form-row
            .login__form-col
              label.login__form-block.login__form-block--login
                .login__form-block-title Логин
                input(
                  type="text"
                ).login__form-block-input
          .login__form-row
            .login__form-col
              label.login__form-block.login__form-block--password
                .login__form-block-title Пароль
                input(
                  type="password"
                ).login__form-block-input
          .login__form-row.login__form-row--btn
            button(
              type="submit"
            ).btn.btn--login-submit Отправить


    
    //- HEADER
    .header-block
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
    .navigation-block
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
            button(type="button").btn.btn--add-group Добавить группу

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
                  img(src="../images/content/preview/1.jpg" alt="work picture").works-card__img
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
      

    //- COMMENTS
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
                    img(src="../images/content/user.jpg" alt="author picture").comments-card__author-img
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