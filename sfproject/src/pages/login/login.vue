<template>
  <div class = "backgroundimage">
    <img style="position:absolute;width:100%;height:100%;" src = "../../assets/login.jpg" />
    <div class = "login">
      <div class = "login-title">四川师范大学数字迎新系统</div>
      <div class = "login-input">
        <form>
          <div class = "user">
            <input class = "user-input" type="text" placeholder="用户名" @focus="deletePlaceholder1" @blur="getPlaceholder1"/>
          </div>
          <div class = "user">
            <input class = "user-input" type="text" placeholder="密码" @focus="deletePlaceholder2" @blur="getPlaceholder2"/>
          </div>
          <input class = "login-submit" type="submit" value="登录"/>
        </form>
      </div>
      <div class = "login-func">
        <input class = "savePassword" type = "checkbox" name = "save" />记住密码
        <div class = "forgetPassword">忘记密码</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    deletePlaceholder1 (e) {
      e.target.form.elements[0].placeholder=''
    },
    deletePlaceholder2 (e) {
      e.target.form.elements[1].placeholder=''
    },
    getPlaceholder1 (e) {
      e.target.form.elements[0].placeholder='用户名'
    },
    getPlaceholder2 (e) {
      e.target.form.elements[1].placeholder='密码'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .backgroundimage
    width 100%
    height 100%
    .login
      display flex
      position relative
      flex-direction column
      align-items center
      height 7rem
      width 7rem
      left 50%
      top 50%
      transform translate(-50% ,-50%)
      color #ffffff
      .login-title
        position absolute
        top 25%
      .login-input
        position absolute
        font-size .2rem
        top 50%
        transform translateY(-50%)
        .user
          width 3.5rem
          height .45rem
          border-radius .2rem
          margin-bottom .2rem
          background rgba(255,255,255,0.55)
          color #ffffff
          .user-input
            width 3rem
            height .45rem
            margin-left .5rem
            background rgba(255,255,255,0)
            color #ffffff
          .user-input::-webkit-input-placeholder
            color #ffffff
            font-size .18rem
            position relative
            left .1rem
        .login-submit
          width 3.5rem
          height .45rem
          border-radius .2rem
          margin-bottom .2rem
          color #ffffff
          background #0099ff
      .login-func
        display flex
        position absolute
        width 3.5rem
        top 65%
        left 25%
        font-size .15rem
        input[type="checkbox"]
          zoom 120%
        .forgetPassword
          position absolute
          right 0
</style>
