<template>
  <div class="login-wrap">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field
        name="mobile"
        v-validate="'required||digits:11'"
        v-model="user.mobile"
        label="手机号"
        placeholder="请输入手机号"
        clearable
        left-icon="phone-o"
        :error-message="errors.first('mobile')"
      />
      <van-field
        v-model="user.code"
        name="code"
        v-validate="'required||digits:6'"
        :error-message="
    errors.first('code')"
        label="验证码"
        placeholder="请输入验证码"
        clearable
        left-icon="comment-o"
      >
        <van-button slot="button" size="small" type="default">发送验证码</van-button>
      </van-field>
      <div class="login-btn">
        <van-button type="info" class="btn" @click="handleLogin()">登录</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () {
    const dict = {
      custom: {
        mobile: {
          required: '请输入手机号',
          digits: '手机号码必须是11位数字'
        },
        code: {
          required: '请输入验证码',
          digits: '验证码必须是6位数字'
        }
      }
    }
    this.$validator.localize('zh_CN', dict)
  },
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
      const valid = await this.$validator.validate()
      if (!valid) {
        return
      }
      // if (this.user.mobile.trim().length === 0) {
      //   this.mobileMessage = '请输入手机号'
      //   return
      // } else {
      //   this.mobileMessage = ''
      // }
      try {
        const data = await login(this.user)
        // console.log(data)

        this.$store.commit('setUser', data)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log('登录失败' + err)
      }
    }
  }
}
</script>

<style lang="less">
.login-btn {
  padding: 10px;
  .btn {
    width: 100%;
  }
}
</style>
