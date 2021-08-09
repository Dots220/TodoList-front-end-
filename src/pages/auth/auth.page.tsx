import React, { useState } from 'react'

export const AuthPage = () => {
   return (
      <div className="row">
         <div className="col s6 offset-s3">
            <h1>Сократи ссылку </h1>
            <div className="card blue darken-1">
               <div className="card-content white-text">
                  <span className="card-title">Авторизация</span>
                  <div>
                     <div className="input-field">
                        <input
                           placeholder="Введите email"
                           id="email"
                           type="text"
                           name="email"
                           className="yellow-input"
                           // onChange={}
                        />

                        <label htmlFor="first_name">Email</label>
                     </div>

                     <div className="input-field">
                        <input
                           placeholder="Введите пароль"
                           id="password"
                           type="text"
                           name="password"
                           className="yellow-input"
                        />

                        <label htmlFor="first_name">Пароль</label>
                     </div>
                  </div>
               </div>
               <div className="card-action">
                  <button
                     className="btn yellow darken-4"
                     style={{ marginRight: 10 }}
                     // disabled={}
                  >
                     Войти
                  </button>
                  <button
                     className="btn yellow lighten-1 black-text"
                     // onClick={}
                     // disabled={}
                  >
                     Регистрация
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AuthPage
