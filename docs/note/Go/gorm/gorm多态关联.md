# gorm多态关联



```go
package main

import (
    "gorm.io/gorm"
)

type OUser struct {
    gorm.Model
    Name    string
    Address Address `gorm:"polymorphic:Address"`
}
type Order struct {
    gorm.Model
    Name    string
    Address Address `gorm:"polymorphic:Address"`
}
type Address struct {
    ID          int `gorm:"primaryKey"`
    Location    string
    AddressID   int
    AddressType string
}

func Polymorphic() {
    DB.AutoMigrate(&OUser{}, &Order{}, &Address{})

    // 创建实例
    //ouser := OUser{Name: "pzj", Address: Address{Location: "location1"}}
    //order := Order{Name: "订单一号", Address: Address{Location: "location2"}}
    //DB.Create(&ouser)
    //DB.Create(&order)

    // 查找实例
    var order Order
    DB.Preload("Address").Find(&order, "id = 2")
    formatPrint(order)
}
```