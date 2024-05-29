# element-plus里的表单校验



### 自定义校验规则



**需要在el-form-item上绑定prop属性**

```js
// 表单校验规则
const rules = reactive({
  account: [
    { required: true, message: "账号为空，请重新输入", trigger: "blur" },
    { min: 6, max: 14, message: '长度应该在6位到14位之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: "密码为空，请重新输入", trigger: "blur" },
    { min: 6, max: 14, message: '长度应该在6位到14位之间', trigger: 'blur' },
  ],
  agree: [{
    validator: (rule, value, callback) => {
      if(value)callback()
      else callback(new Error("请同意相关协议"))
    }
  }]
})
```



### 提交表单时统一校验



**需要在el-form上绑定ref对象**

```js
// 提交表单
const onSubmit = () => {
  if (!formRef.value) return
  formRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
```



### 提交表单时,会调用接口,判断用户是否存在

**如果不存在,捕获错误信息,并通过ElMessage反馈出来**

**如果用户存在,就将用户数据存储在pinia当中,因为之后很多组件可能会使用到用户信息,所以把用户信息做一个持久化存储,再跳转首页**



```js
// 调用登录接口
const toLogin = async (params) => {
  const { account, password } = params
  // 调用pinia中获取用户信息的接口
  store.getUserInfo({ account, password }).then(() => {
    ElMessage({ message: '登录成功', type: 'success', })
    router.replace("/")
  }).catch(err => {
    ElMessage.error(err.response.data)
  })
}
```

