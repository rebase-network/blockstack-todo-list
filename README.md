### Blockstack Todo List

### 操作系统
推荐使用Mac或者Ubuntu。

如果使用 **Windows，可以使用虚拟机在Windows系统中安装一个Linux的Ubunut系统，** 2种做法都可以：
* 虚拟机VirtualBox官网下载 [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)，并安装ubunut镜像

* 开启 Windows 10 的 Linux 子系统并安装Ubunut镜像，切记是Windows10，不是Windows8，参考：[https://www.jianshu.com/p/UpwXzQ](https://www.jianshu.com/p/UpwXzQ)

### 安装node
直接下载[Node.js](https://nodejs.org/)

如果熟悉命令行，可以用 [nvm](https://github.com/creationix/nvm) 安装Node.js

命令如下：

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

nvm install v10.15.0 # 安装v10.15.0版本的nodejs
```

安装完之后，把npm的官方源替换为淘宝源，国内使用淘宝源下载速度会更快。

`npm config set registry http://registry.npm.taobao.org/`

### 安装代码编辑器 vscode 稳定版，即Stable版

[visual studio](https://code.visualstudio.com/)
