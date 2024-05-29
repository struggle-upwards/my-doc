# Gorm学习（五）进阶：多态关联、关联标签以及事务


#### 目录



## 前言

>
>   感谢开源项目，以及 本人学识尚浅，如有错误，请评论指出，谢谢！ 详细可见个人博客： 


## 一、多态关联

### 1、多态关联概述

什么是多态？

多态的概念：通俗来说，就是多种形态，具体点就是去完成某个行为，当不同的对象去完成时会产生出不同的状态。

什么是多态表？ 假设我们有一张地址表，其中的地址可能是来自User中的，也可能是来自Orders中的。而区分不同的对象则用type字段。如：type=User时对象是文章表。

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/c9e6b9ae62cc46ec98e16cc1b551a15f-1716901678047-1.png" alt="在这里插入图片描述">

### 2、为什么用多态关联？

出现需要外键引用多个表的情况，不可能删除原来表结构，重新添加一个外键ID再建表，所以我们可以建立一个交叉表。让Addres不再依赖于User表或者Order表。 <img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/a35bad81e6f04d9ababfc8967d32e78a-1716901678047-3.png" alt="在这里插入图片描述"> `has one`的情况解决方案，如果我们希望一个给定的地址，只能够在一张交叉表中出现一次，上面的复合主键已经做到了。

`has many`的情况解决方案,如果希望一个地址可以在一张交叉表中出现多次，可以取消Address的复合主键。

### 3、Has One

GORM 为 `has one` 和 `has many` 提供了多态关联支持，它会将拥有者实体的表名、主键值都保存到多态类型的字段中。

```go
type User struct {
	ID      int
	Name    string
	//polymorphic指定多态类型，比如模型名
	Address Address `gorm:"polymorphic:Owner;"`
}

type Order struct {
	ID      int
	Name    string
	Address Address `gorm:"polymorphic:Owner;"`
}

type Address struct {
	ID        int
	Name      string
	OwnerID   int
	OwnerType string
}

func main() {
	db.AutoMigrate(User{}, Order{}, Address{})
}
```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/42109d8b5dc4428584c4aee5a60cd638-1716901678048-5.png" alt="在这里插入图片描述">

```go
db.Create(User{
	Name: "linzy",
	Address: Address{
		Name: "翻斗花园",
	},
})
db.Create(Order{
	Name: "忘崽牛奶",
	Address: Address{
		Name: "火星幼儿园",
	},
})
```

<img src="https://img-blog.csdnimg.cn/f21222a9265c4f6b83dec8289e8903bc.png" alt="在这里插入图片描述"> <img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/3fd7287122ea4dcd97881b1dfd5a34ef-1716901678048-9.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/a0de07b93151442aa8d6c3013178c0a6.png" alt="在这里插入图片描述">

>
>   owner_type就是关联的那张表。 owner_id就是关联的表的主键。 


### 4、Has Many

```go
type User struct {
	ID      int
	Name    string
	Address []Address `gorm:"polymorphic:Owner;"`
}

type Order struct {
	ID      int
	Name    string
	Address Address `gorm:"polymorphic:Owner;"`
}

type Address struct {
	ID        int
	Name      string
	OwnerID   int
	OwnerType string
}

func main() {
	db.AutoMigrate(User{}, Order{}, Address{})
	db.Create(User{
		Name: "linzy",
		Address: []Address{
			{Name: "翻斗花园"},
			{Name: "杭州西湖"},
		},
	})
}

```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/46c14c4ee4984760b1dc262ffe963741-1716901678048-13.png" alt="在这里插入图片描述">

## 二、关联标签

### 1、polymorphic  polymorphicValue

```go
type User struct {
	ID   int
	Name string
	//polymorphic：通俗讲用来指定id与type的前缀
	Address []Address `gorm:"polymorphic:Address;"`
}

type Order struct {
	ID      int
	Name    string
	//polymorphicValue用来告诉关联表我是谁，默认都是表名
	Address Address `gorm:"polymorphic:Address;polymorphicValue:master"`
}

type Address struct {
	ID          int
	Name        string
	AddressID   int
	AddressType string
}

func main() {
	db.AutoMigrate(User{}, Order{}, Address{})
	db.Create(User{
		Name: "linzy",
		Address: []Address{
			{Name: "翻斗花园"},
			{Name: "杭州西湖"},
		},
	})

	db.Create(Order{
		Name: "忘崽牛奶",
		Address: Address{
			Name: "火星幼儿园",
		},
	})
}
```

<img src="https://img-blog.csdnimg.cn/af6eda1f702a4e7690d4d11d51c5dc16.png" alt="在这里插入图片描述"> <img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/891530b81c494625acbbd03e971e7547-1716901678048-17.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/32b6465508944d2fa659aa2d41710355.png" alt="在这里插入图片描述">

### 2、foreignKey  references

GORM里默认是连接表和引用表的主键来作为做外键以及外键映射的。

Has One的例子：

```go
type CreditCard struct {
	gorm.Model
	Number string
	//外键指向CreditCardNumber
	Info   Info `gorm:"foreignKey:CreditCardNumber"`
}

type Info struct {
	ID               uint
	Name             string
	Age              int
	CreditCardNumber string
}

func main() {
	db.AutoMigrate(CreditCard{}, Info{})
	db.Create(CreditCard{
		Number: "123456",
		Info: Info{
			Name: "linzy",
			Age:  18,
		},
	})

	db.Create(CreditCard{
		Number: "456789",
		Info: Info{
			Name: "slyyy",
			Age:  66,
		},
	})
}
```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/b52045e09e974dec82e074ce4dd4cd12-1716901678048-21.png" alt="在这里插入图片描述">

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/501eea72d7624710bf8efba4c6f5bcd2-1716901678048-23.png" alt="在这里插入图片描述">

>
>   注意：credit_card_number并没有自动指向creditcard表里的number字段，他还是会默认指向引用表里的主键，所以在用`foreignKey`的时候最好类型相同或者使用`references`搭配使用。 


```go
type CreditCard struct {
	ID uint
	//设置唯一和固定长度
	Number string `gorm:"index:unique;size:255"`
	Info   Info   `gorm:"foreignKey:CreditCardNumber;references:Number"`
}

type Info struct {
	ID   uint
	Name string
	Age  int
	//设置唯一和固定长度
	CreditCardNumber string `gorm:"index:unique;size:255"`
}

func main() {
	db.AutoMigrate(CreditCard{}, Info{})
	db.Create(CreditCard{
		ID:     1,
		Number: "123456",
		Info: Info{

			Name: "linzy",
			Age:  18,
		},
	})

	db.Create(CreditCard{
		ID:     2,
		Number: "456789",
		Info: Info{
			Name: "slyyy",
			Age:  66,
		},
	})
}

```

>
>   注意： 某些数据库只允许在唯一索引字段上创建外键，如果在迁移时会创建外键，则需要指定 `index:unique` 标签。 


<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/9edc60ed7d5e492b95f8649d7a24f4d3-1716901678048-25.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/345e5edd73b24541999b82aa34a6c167.png" alt="在这里插入图片描述">

>
>   错误： 
>   `Error 1170: BLOB/TEXT column 'credit_card_number' used in key specification without a key length` 出现这个问题是因为你的外键或者外键映射的字段是text类型也就是不固定长度string类型，不能作为外键或外键映射，必须通过标签`size`设置固定长度。`Error 1215: Cannot add foreign key constraint` 这个错误是不能创建外键，主要原因可能是你外键映射的字段不是引用表的主键，建议标签设置为唯一 `index:unique`。 


### 3、Many to Many

```go
type CreditCard struct {
	ID     uint
	Number string `gorm:"index:unique;size:255"`
	Infos  []Info `gorm:"many2many:card_infos;foreignKey:Number;references:Name;"`
}

type Info struct {
	ID   uint
	Name string `gorm:"index:unique;size:255"`
	Age  int
}

func main() {
	db.AutoMigrate(CreditCard{}, Info{})
	db.Create(CreditCard{
		Number: "123456",
		Infos: []Info{
			{
				ID:   1,
				Name: "linzy",
				Age:  18,
			},
		},
	})

	db.Create(CreditCard{
		Number: "456789",
		Infos: []Info{
			{
				ID:   2,
				Name: "slyyy",
				Age:  66,
			},
			{
				ID:   3,
				Name: "qhgwueiq",
				Age:  1,
			},
		},
	})
}

```

<img src="https://img-blog.csdnimg.cn/d5b965e97917407f88bb51376b7d6918.png" alt="在这里插入图片描述"> <img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/f9c47da108ee46b0bca3f92e00539486-1716901678048-31.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/5e2333aff2044aa6a7a791d0b7fef6f1.png" alt="在这里插入图片描述">

>
>   注意：在`Many to Many`的情况下，foreignKey指向的是`引用表的外键映射字段`，references指向的是`关联表的外键字段`，一定不要搞混了。 


### 4、joinForeignKey  joinReferences

```go
type CreditCard struct {
	ID     uint
	Number string `gorm:"index:unique;size:255"`
	Infos  []Info `gorm:"many2many:card_infos;foreignKey:Number;joinForeignKey:card_number;references:Name;joinReferences:name"`
}

type Info struct {
	ID   uint
	Name string `gorm:"index:unique;size:255"`
	Age  int
}

func main() {
	db.AutoMigrate(CreditCard{}, Info{})
	db.Create(CreditCard{
		Number: "123456",
		Infos: []Info{
			{
				ID:   1,
				Name: "linzy",
				Age:  18,
			},
		},
	})

	db.Create(CreditCard{
		Number: "456789",
		Infos: []Info{
			{
				ID:   2,
				Name: "slyyy",
				Age:  66,
			},
			{
				ID:   3,
				Name: "qhgwueiq",
				Age:  1,
			},
		},
	})
}


```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/4f2821bed156416d8d56fe884fec9758-1716901678048-35.png" alt="在这里插入图片描述">

## 三、事务

### 1、事务概述

数据库事务( transaction)是访问并可能操作各种数据项的一个`数据库操作序列`，这些操作要么全部执行，要么全部不执行，是一个不可分割的工作单位。 事务由事务开始与事务结束之间执行的全部数据库操作组成。

数据库事务必须具备的四个特性：

### 2、事务操作

要在事务中执行一系列操作，一般流程如下：

```go
type User struct {
	gorm.Model
	Name string
}

func main() {
	db.AutoMigrate(User{})
	db.Transaction(func(tx *gorm.DB) error {
		// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db'）
		if err := tx.Create(User{Name: "Giraffe"}).Error; err != nil {
			// 返回任何错误都会回滚事务
			return err
		}

		if err := tx.Create(User{Name: "Lion"}).Error; err != nil {
			return err
		}

		// 返回 nil 提交事务
		return nil
	})
}
```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/9c0bdf35a2794bcbb88ef85c9ab5e154-1716901678049-37.png" alt="在这里插入图片描述">

#### 1）回滚

>
>   注意：返回任何错误都会回滚事务。回滚则事务内的操作一律不执行。 


```go
func main() {
	db.AutoMigrate(User{})
	db.Transaction(func(tx *gorm.DB) error {
		// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db'）
		if err := tx.Create(User{Name: "linzy"}).Error; err != nil {
			// 返回任何错误都会回滚事务
			return err
		}

		if err := tx.Create(User{Name: "slyyy"}).Error; err != nil {
			return err
		}

		if true {
			return errors.New("回滚")
		}

		// 返回 nil 提交事务
		return nil
	})
}
```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/c28e84c61dbf44b19d19864f5859e234-1716901678049-39.png" alt="在这里插入图片描述">

#### 2）嵌套事务

嵌套事务的作用在于较大的事务中，你只想回滚一部分操作，例如你去银行转账，已经通过银行卡号和密码登录了，转账的过程是你的银行账户扣去多少钱，同时别人的银行账户加上多少钱，如果中途发生错误，需要回滚，应该回滚到你账号登录后的状态，而不是直接回滚到你账号登录前。

```go

type User struct {
	gorm.Model
	Name   string
	Number int
}

func main() {
	db.AutoMigrate(User{})
	db.Transaction(func(tx *gorm.DB) error {
		tx.Create(User{
			Name:   "linzy",
			Number: 100,
		})
		tx.Create(User{
			Name:   "slyyy",
			Number: 100,
		})
		fmt.Println("登陆后")
		tx.Transaction(func(tx2 *gorm.DB) error {
			// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db')
			if err := tx2.Model(User{}).Where("name = ?", "linzy").Update("number", 80).Error; err != nil {
				// 返回任何错误都会回滚事务
				return err
			}

			if err := tx2.Model(User{}).Where("name = ?", "slyyy").Update("number", 120).Error; err != nil {
				return err
			}
			return nil
		})
		fmt.Println("转账结束")
		// 返回 nil 提交事务
		return nil
	})
}
```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/23b30a9f0f254197a524c8bb5d788998-1716901678049-43.png" alt="在这里插入图片描述">

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/9a49f4a4baaf4b41a3f5e61c980b8824-1716901678049-41.png" alt="在这里插入图片描述"> 正常的过程应该是这样，如果说嵌套事务发生回滚操作之后的情况呢？

```go
func main() {
	db.AutoMigrate(User{})
	db.Transaction(func(tx *gorm.DB) error {
		tx.Create(User{
			Name:   "linzy",
			Number: 100,
		})
		tx.Create(User{
			Name:   "slyyy",
			Number: 100,
		})
		fmt.Println("登陆后")
		tx.Transaction(func(tx2 *gorm.DB) error {
			// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db')
			if err := tx2.Model(User{}).Where("name = ?", "linzy").Update("number", 80).Error; err != nil {
				// 返回任何错误都会回滚事务
				return err
			}

			if true {
				fmt.Println("转账失败，对面是骗子不能转！！")
				return errors.New("转账失败")
			}

			if err := tx2.Model(User{}).Where("name = ?", "slyyy").Update("number", 120).Error; err != nil {
				return err
			}
			return nil
		})
		fmt.Println("转账结束")
		// 返回 nil 提交事务
		return nil
	})
}


```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/bbcfbc6e5c3540a0ae554a9e0347fa3a-1716901678049-45.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/a403cb86338044609bb79bfa7c708f8f.png" alt="在这里插入图片描述">

### 3、手动事务

Gorm 支持直接调用事务控制方法（commit、rollback），例如：

| 事务方法         | 说明                     |
| ---------------- | ------------------------ |
| tx := db.Begin() | 开始事务                 |
| tx.（db操作）    | 在事务中执行一些 db 操作 |
| tx.Rollback()    | 遇到错误时回滚事务       |
| tx.SavePoint()   | 设置保存点标记           |
| tx.RollbackTo()  | 回滚到保存点标记         |
| tx.Commit()      | 提交事务                 |




```go
type User struct {
	gorm.Model
	Name   string
	Number int
}

func main() {
	db.AutoMigrate(User{})
	// 开始事务
	tx := db.Begin()

	// 在事务中执行一些 db 操作（从这里开始，您应该使用 'tx' 而不是 'db'）
	tx.Create(User{
		Name:   "linzy",
		Number: 100,
	})
	tx.Create(User{
		Name:   "slyyy",
		Number: 100,
	})
	fmt.Println("登陆后")
	//设置回滚标记
	tx.SavePoint("登录了")
	flag := true
	{
		if err := tx.Model(User{}).Where("name = ?", "linzy").Update("number", 80).Error; err != nil {
			flag = true
		}

		if err := tx.Model(User{}).Where("name = ?", "slyyy").Update("number", 120).Error; err != nil {
			flag = true
		}

		//出现问题了得写在一系列事务之后进行回滚
		if flag {
			fmt.Println("转账失败，对面是骗子不能转！！")
			//回滚到指定标记
			tx.RollbackTo("登录了")
		}
	}
	// 遇到错误时回滚事务
	fmt.Println("转账结束")
	// 否则，提交事务
	tx.Commit()
}

```

<img src="C:/Users/pzj/Desktop/university%20code/code_resourse/NoteBook/cloud-imgs/5cf8bdf745d9477daebb4585335b4526-1716901678049-49.png" alt="在这里插入图片描述">

####  官方示例：

```go
func CreateAnimals(db *gorm.DB) error {
  // 再唠叨一下，事务一旦开始，你就应该使用 tx 处理数据
  tx := db.Begin()
  //延迟函数一定要写上，因为出现panic错误时事务可能没办法回滚，需要手动再回滚
  defer func() {
    if r := recover(); r != nil {
      tx.Rollback()
    }
  }()

  if err := tx.Error; err != nil {
    return err
  }

  if err := tx.Create(Animal{Name: "Giraffe"}).Error; err != nil {
     tx.Rollback()
     return err
  }

  if err := tx.Create(Animal{Name: "Lion"}).Error; err != nil {
     tx.Rollback()
     return err
  }

  return tx.Commit().Error
}

```

### 4、禁用默认事务

为了确保数据一致性，GORM 会在事务里执行写入操作（创建、更新、删除）。如果没有这方面的要求，您可以在初始化时禁用它，这将获得大约 30%+ 性能提升。

```go
// 全局禁用
db, err := gorm.Open(sqlite.Open("gorm.db"), gorm.Config{
  SkipDefaultTransaction: true,
})

// 持续会话模式
tx := db.Session(Session{SkipDefaultTransaction: true})
tx.First(user, 1)
tx.Find(users)
tx.Model(user).Update("Age", 18)

```

## 四、小结

本章拓展了GORM对数据库的更多支持，关联标签与事务是很重要的内容。

| 标签 | 描述 |
| :--- | ---- |
|foreignKey | 指定当前模型的列作为连接表的外键 |
|references | 指定引用表的列名，其将被映射为连接表外键 |
|polymorphic | 指定多态类型，比如模型名 |
|polymorphicValue | 指定多态值、默认表名 |
|many2many | 指定连接表表名 |
|joinForeignKey |  指定连接表的外键列名，其将被映射到当前表 |
|joinReferences |指定连接表的外键列名，其将被映射到引用表 |

手动事务适用于小事务操作，出错了直接全部回滚会更好，虽然提供了 `SavePoint`、`Rollbackto`方法，来提供保存点以及回滚至保存点功能，但是有一些同步操作操作很不方便。 GORM自带事务适用大事务操作，可以使用嵌套事务。

>
>   若有写的错误的或者需要改进的地方，希望能直接指出，再次感谢GVA淼哥的教程！ 