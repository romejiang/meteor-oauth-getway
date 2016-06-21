# wechat mp getway
让 Meteor 的 oauth 项目支持转发模式，配合 [https://github.com/romejiang/wechat-mp-getway](这个项目wechat-mp-getway)可以方便的调试微信网页授权回调。

## Installation
`meteor add romejiang:oauth-getway`

## guide

```js

ServiceConfiguration.configurations.upsert({
            service: "wechat-mp"
        }, {
            $set: {
                appId: 'wxe497c6c588ad771c',
                secret: '346be54919a370bf8d72abc6c170e37b',
                scope: 'base_userinfo',
                loginStyle: 'redirect',
                mainId: 'openId',
                getway: 'http://www.meteorup.cn/mp/g.html'
            }
        });

```
