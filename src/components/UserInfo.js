export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const job = this._job.textContent;
    return { name, job };
  }

  setUserInfo(values) {
    this._name.textContent = values.name;
    this._job.textContent = values.job;
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