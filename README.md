# wx-promisify
A function that convert wx callback-form function to Promise

```javascript
//before
wx.chooseImage({
  count: 1,
  success: data => {
    //handle err
  },
  fail: err => {
    //handle data
  }
});


//after
promisify(wx.chooseImage)({
  count: 1
}).then(data => {
  //handle data
}).catch(err => {
  //handle err
})
```
