# go文件操作



```go
package main

import (
	"fmt"
	"os"
)

func main() {
	// 创建文件
	f, err := os.Create("file/文件.txt")

	fmt.Println(f, err)   // &{0xc00007ca08} <nil>
	fmt.Printf("%T\n", f) // *os.File

	if err != nil {
		fmt.Println("文件创建失败")
		return
	}

	// 写文件
	wLength1, err1 := f.Write([]byte("hello\n")) // 转换成字节切片写入
	wLength2, err2 := f.WriteString("world\n")   // 字符串写入

	if err1 != nil || err2 != nil {
		fmt.Println("无法写入文件")
		return
	}

	fmt.Println("wLength1写入字符串的长度为:", wLength1) // wLength1写入字符串的长度为: 6
	fmt.Println("wLength2写入字符串的长度为:", wLength2) // wLength2写入字符串的长度为: 6

	// 关闭文件对象
	_ = f.Close()
	// 读文件
	f, _ = os.Open("file/文件.txt")
	buffer := make([]byte, 1024) // 通过byte切片读取文件内容
	rLength, err3 := f.Read(buffer)

	if err3 != nil {
		fmt.Println("无法读取文件")
		return
	}

	fmt.Println("读取的文件长度为:", rLength)
	fmt.Println("读取的文件内容为:", string(buffer))

	_ = f.Close()

}
```

