# gorm一对一



```go
package main

import (
	"fmt"
	"gorm.io/gorm"
)

type Cuser struct {
	gorm.Model
	Name      string
	CompanyID int
	Company   Company
}

type Company struct {
	gorm.Model
	Name string
}

func BelongTo() {
	//_ = DB.AutoMigrate(&Cuser{}, &Company{})
	// 创建实例
	user := Cuser{
		Name: "user",
		Company: Company{
			Name: "Company",
		},
	}
	DB.Create(&user)

	// 查找实例
	var user1 = Cuser{}
	DB.Preload("Company").First(&user1)
	formatPrint(user1)

	// 清空一对一的关联关系
	err := DB.Model(&Cuser{
		Model: gorm.Model{
			ID: user1.ID,
		},
	}).Association("Company").Clear()

	if err == nil {
		fmt.Println("清空关联成功")
	} else {
		fmt.Println(err)
	}

	// 添加一对一的关联关系(需要&)
	err = DB.Model(&Cuser{
		Model: gorm.Model{
			ID: user1.ID,
		},
	}).Association("Company").Append(&Company{
		Model: gorm.Model{
			ID: 2,
		},
	})

	if err == nil {
		fmt.Println("绑定关联成功")
	} else {
		fmt.Println(err)
	}

	// 替换一对一的关联关系(需要&)
	err = DB.Model(&Cuser{
		Model: gorm.Model{
			ID: user1.ID,
		},
	}).Association("Company").Replace(&Company{
		Model: gorm.Model{
			ID: 2,
		},
	}, &Company{
		Model: gorm.Model{
			ID: 666,
		},
	})

	if err == nil {
		fmt.Println("替换关联成功")
	} else {
		fmt.Println(err)
	}

	// 删除一对一的关联关系(不需要&)
	err = DB.Model(&Cuser{
		Model: gorm.Model{
			ID: user1.ID,
		},
	}).Association("Company").Delete(Company{
		Model: gorm.Model{
			ID: 666,
		},
	})

	if err == nil {
		fmt.Println("删除关联成功")
	} else {
		fmt.Println(err)
	}
}

type GirlGod struct {
	gorm.Model
	Name  string
	DogID int
	Dog   Dog
}
type Dog struct {
	gorm.Model
	Name string
}

func HasOne() {
	_ = DB.AutoMigrate(&Dog{}, &GirlGod{})
	// 新建数据
	d := Dog{
		Name: "舔狗1号",
	}
	g := GirlGod{
		Name: "girl",
		Dog:  d,
	}
	DB.Create(&g)

	// 清空一对一关联
	d1 := Dog{
		Model: gorm.Model{
			ID: 1,
		},
	}
	g1 := GirlGod{
		Model: gorm.Model{
			ID: 1,
		},
	}

	_ = DB.Model(&g1).Association("Dog").Clear()

	// 新增关联
	_ = DB.Model(&g1).Association("Dog").Append(&d1)
}
```

