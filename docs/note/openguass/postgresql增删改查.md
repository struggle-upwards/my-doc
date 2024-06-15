## 进入数据库

gsql postgres

### （1）创建用户：

`create user 用户名 with password "用户密码";`

### （2）创建数据库：

`create database 数据库名 owner 用户名;`

### （3）进入数据库：

`gsql -d 数据库名 -p 15400 -r`

### （4）创建表：

`create table 表名 (字段名 字段类型,字段名 字段类型);`
例：create table mytable (number int,year int);

### （5）向表中添加数据：

`insert into 表名 values (字段值,字段值);`
例：insert into mytable values (1,100),(2,200);

### （6）查看数据表：

`select * from 表名;`

查询 pg_tables 表获取当前数据库中所有表的信息（pg_tables 是系统视图）

```
select * from pg_tables
```

通常我们只关注 public 中的表，只需要加上以下查询条件即可

```
select tablename from pg_tables where schemaname='public'
```

### （7）修改表中数据：

`update 表名 set 字段=修改后的字段值 where 字段=字段值;`
例：update mytable set year=300 where number=2;

### （8）删除数据表中的数据：

`delete 表名 where 字段=字段值;`
例：delete mytable where number=1;

### （9）增加表中的字段：

`alter table 表名 add 字段 字段名;`
例 1：alter table mytable add country char;
例 2：alter table mytable add mail char(20);

### （10）退出数据库：

`\q`

### （11）查看所有用户：

`\du`

