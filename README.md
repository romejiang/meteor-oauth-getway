# wechat mp getway
让 Meteor 中 oauth 相关的包支持跳转模式，配合[这个项目wechat-mp-getway](https://github.com/romejiang/wechat-mp-getway)可以方便的调试微信网页授权回调。（因为微信网页授权回调地址必须绑定到一个ICP认证过的域名商，所以调试和实际应用上线都很麻烦，这个组件就是为了解决这个问题而存在的）

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
