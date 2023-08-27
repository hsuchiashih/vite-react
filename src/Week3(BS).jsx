function Week3() {
  return <div className="container justify-content-center align-items-center">
    <form>
      {/* 註冊 */}
      <div className="form-row row mt-5">
        <h1>註冊</h1>
        <div className="form-group col-3">
          <label htmlFor="signUpEmail">Email</label>
          <input type="email" className="form-control" id="signUpEmail" placeholder="Email"/>
        </div>
        <div className="form-group col-3">
          <label htmlFor="signUpPassword">Password</label>
          <input type="password" className="form-control" id="signUpPassword" placeholder="Password"/>
        </div>
        <div className="form-group col-3">
          <label htmlFor="signUpNickname">Nickname</label>
          <input type="nickname" className="form-control" id="signUpNickname" placeholder="nickname"/>
        </div>
        <div className="form-group col-3 align-self-end">
         <button type="button" className="btn btn-primary ">sign up</button>
        </div>
      </div>

      {/* 登入 */}
      <div className="form-row row mt-5">
        <h1>登入</h1>
        <div className="form-group col-3">
          <label htmlFor="signInEmail">Email</label>
          <input type="email" className="form-control" id="signInEmail4" placeholder="Email"/>
        </div>
        <div className="form-group col-3">
          <label htmlFor="signInPassword4">Password</label>
          <input type="password" className="form-control" id="signInPassword4" placeholder="Password"/>
        </div>
        <div className="form-group col-3 align-self-end">
         <button type="button" className="btn btn-primary">sign in</button>
        </div>
      </div>

      {/* 驗證 */}
      <div className="form-row row mt-5">
        <h1>驗證</h1>
        <div className="form-group col-3">
          <input type="text" className="form-control" id="checkoutToken" placeholder="Token"/>
        </div>
        <div className="form-group col-3 align-self-end">
         <button type="button" className="btn btn-primary">checkout</button>
        </div>
      </div>


      {/* 登出 */}
      <div className="form-row row mt-5">
        <h1>登出</h1>
        <div className="form-group col-3">
          <input type="text" className="form-control" id="signOutToken" placeholder="Token"/>
        </div>
        <div className="form-group col-3 align-self-end">
         <button type="button" className="btn btn-primary">sign out</button>
        </div>
      </div>

      <hr />
      <h1>TO DO LIST</h1>
    </form>
  </div>

  
}

export default Week3