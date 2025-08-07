---
sidebar_position: 2
description: HTTP API 访问指南
title: HTTP API 访问指南
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-data-platform/api/http-api/http-api-access-guide
aliases:
  - /Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## HTTP 请求与响应

  请求通过 HTTP 基本认证进行身份验证。

### HTTP HOST

- 中国站点: https://sensecap.seeed.cn/openapi
- 全球站点: https://sensecap.seeed.cc/openapi

### HTTP HEADER
 #### 请求
<table >
<tr>
<th> 键 </th>
<th> 描述 </th>
</tr>
<tr>
<td width="300"> API-VERSION </td>
<td width="300"> API 版本 </td>
</tr>
</table>

 #### 响应
<table >
<tr>
<th> 键 </th>
<th> 描述 </th>
</tr>
<tr>
<td width="300"> api-gateway-excute-second </td>
<td width="300"> 执行 API 所需的时间（秒） </td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume </td>
<td width="300"> 执行 API 消耗的配额 </td>
</tr>
</table>

 #### HTTP 基本认证
  [HTTP 基本认证](https://en.wikipedia.org/wiki/Basic_access_authentication) 是 RESTful API 身份验证最常见的方式之一。我们使用 Access ID 作为用户名，Access Key 作为密码。每个 HTTP 客户端库都应内置对基本认证的支持，在本文档中我们使用 curl，通过 –user 选项指定基本认证凭据。

  您可以通过 SenseCAP Portal 创建访问密钥。请参考快速入门以了解如何获取访问密钥。

 #### API 响应
 所有响应键均遵循小写和下划线命名规则。

  #### 成功响应（字符串）
  ```cpp
    {
       "code":"0",
       "data":"
           // string
       "
   }
  ```
  #### 成功响应（对象）
  ```cpp
      {
       "code":"0",
       "data":{
           // object
       }
   }
  ```
  #### 成功响应（数组）
  ```cpp
      {
       "code":"0",
       "data":[
           // Array
       ]
   }
  ```
  #### 错误响应
  ```cpp
   {
       "code":"1001",
       "msg":"error message"
   }
  ```
## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>