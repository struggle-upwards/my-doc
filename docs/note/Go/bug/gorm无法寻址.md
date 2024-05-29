# gorm无法寻址


这个错误是因为你在使用GORM时尝试将一个不可寻址（unaddressable）的值设置为整数。在Go语言中，`Value.SetInt`需要能够修改其底层的值，这意味着它需要一个可寻址的值（即一个指针）。当你直接操作非指针类型的结构体字段或者未赋值的变量时，就会出现这种错误。

例如，如果你有一个这样的定义：

```go
type User struct {
    ID int
}
```

然后你这样使用GORM：

```go
var user User
db.Model(&user).Update("ID", 123) // 正确的方式
```

而不是：

```go
user := User{}
db.Model(user).Update("ID", 123) // 错误的方式，因为user不是指针
```

要解决这个问题，你需要确保在调用`Model`方法时传入的是指向你的结构体实例的指针：

```go
var user User
db.Model(&user).Update("ID", 123)
```

或者，如果你是从查询结果中获取的用户，也需要确保返回的是指针：

```go
var user *User
db.First(&user, 1).Update("ID", 123)
```