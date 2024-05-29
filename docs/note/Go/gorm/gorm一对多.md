# gorm一对多



```go
package main

import (
	"fmt"
	"gorm.io/gorm"
)

type GGirlGod struct {
	gorm.Model
	Name string
	Dogs []Dogs
}
type Dogs struct {
	gorm.Model
	Name       string
	Info       Info
	GGirlGodID int
}
type Info struct {
	Money  int
	DogsID int
}

func HasMany() {
	DB.AutoMigrate(&Dogs{}, &GGirlGod{}, &Info{})
	d1 := Dogs{
		Name: "Dog1",
		Info: Info{
			Money: 10,
		},
	}
	d2 := Dogs{
		Name: "Dog2",
		Info: Info{
			Money: 20000,
		},
	}
	g1 := GGirlGod{
		Name: "G1",
		Dogs: []Dogs{d1, d2},
	}
	// 创建实例
	DB.Create(&g1)

	// 查找G1的舔狗+钱包
	var g GGirlGod
	DB.Preload("Dogs.Info").First(&g)
	fmt.Println("查找G1的舔狗+钱包")
	formatPrint(g)

	// 查看G1的舔狗(只含舔狗)
	var dogs []Dogs
	var girl = GGirlGod{Model: gorm.Model{ID: 1}}
	DB.Model(&girl).Preload("Info").Association("Dogs").Find(&dogs)
	fmt.Println("查看G1的舔狗(只含舔狗)")
	formatPrint(dogs)

	// 查看G1的舔狗--钱包余额大于200元的(使用Joins筛除不符合要求舔狗)
	var gg GGirlGod
	DB.Model(&girl).Preload("Dogs", func(db *gorm.DB) *gorm.DB {
		return db.Joins("Info").Where("money > ?", 2000)
	}).Find(&gg)
	fmt.Println("查看G1的舔狗--钱包余额大于200元的")
	formatPrint(gg)

	// 查看G1的舔狗--钱包余额大于200元的(包含不符合要求舔狗,钱包置0)
	var ggg GGirlGod
	DB.Preload("Dogs.Info", "money > ?", 200).First(&ggg)
	fmt.Println("查看G1的舔狗--钱包余额大于200元的")
	formatPrint(ggg)

	// 查看G1的舔狗--钱包余额大于200元的(只含舔狗)
	var dogs1 []Dogs
	DB.Model(&girl).Preload("Info", "money > ?", 200).Association("Dogs").Find(&dogs1)
	fmt.Println("查看G1的舔狗--钱包余额大于200元的(只含舔狗)")
	formatPrint(dogs1)

}
```

