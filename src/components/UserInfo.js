export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const about = this._about.textContent;
    return { name, about };
  }

  setUserInfo(values) {
    this._name.textContent = values.name;
    this._about.textContent = values.about;
  }
}





/* 
export default class UserInfo {
  constructor(nameSelector, jobSelector/* , avatarSelector *//* ) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector); */
    /* this._avatar = document.querySelector(avatarSelector); */
    ///this._avatar = avatar;
  /* }

  getUserInfo() {
    const name = this._name.textContent;
    const job = this._job.textContent; */
    /* const avatar = this._avatar.src; */
   /*  return { name, job *//* , avatar  *//* };
  }

  setUserInfo(values) {
    this._name.textContent = values.name;
    this._job.textContent = values.job; */
    /* this._avatar.src = values.avatar; */
/*   }
}  */