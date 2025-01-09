当你遇到跨域问题，不要立刻就选择复制去尝试。请详细看完这篇文章再处理，我相信它能帮到你。

## 准备

- 前端网站地址：[http://localhost:8080/](https://link.segmentfault.com/?enc=%2FXC9JheOfxp%2BLR1fyTIrxw%3D%3D.8q4x2tJWDjwG8f%2FmgwZo3BflqaB%2FvG0noFqZ1QAXjFA%3D)
- 服务端网址：[http://localhost:59200/](https://link.segmentfault.com/?enc=HsEFMmABvTUIKwJxnTLnRA%3D%3D.VjI2djuPm%2FMFQ6tYDysCcVFa%2BlcTsIVwur6WX%2FgyzoY%3D)

首先保证服务端是没有处理跨域的，其次，先用postman测试服务端接口是正常的

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28966095-0050-4600-a354-ae9be96c69aa/1460000041794243

当网站8080去访问服务端接口时，就产生了跨域问题，那么如何解决？接下来我把跨域遇到的各种情况都列举出来并通过nginx代理的方式解决（后台也是一样的，只要你理解的原理）。

##