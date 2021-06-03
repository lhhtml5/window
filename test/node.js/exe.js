/*谈一谈定义模块
默认情况下模块内部代码对于外部来说都是不可见的，只能通过2种方式向外部暴露变量和函数
方法1为：module.exports是一个对象{}也是真正的暴露的对象，也就是module.exports指向的对象是谁，就暴露谁
方法2为：exports是一个对象是module.exports的一个引用，指向的是module.exports默认对象

谈一谈模块引入和模块标识
模块引入require方法
参数就是require中的参数
模块的标识
 就是require中的参数
 自定义模块
   需要添加路径信息（当前文件夹需要添加./）可以不写文件后缀依次默认为1.js 2.json 3.node
 node内部模块
   直接书写模块名称即可
 第3方模块引用（jqurey\vue等）
   首先需要npm下载，然后再直接书写当前模块名称
npm操作
初始化包npm init -y
全局下载包 npm i -g
本地生产环境 npm i xxx  -S
            npm i xxx -D
            npm  r 
            npm  i
*/