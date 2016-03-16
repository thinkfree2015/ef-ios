/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import <UIKit/UIKit.h>

#import "AppDelegate.h"

int main(int argc, char * argv[]) {
  @autoreleasepool {
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    NSLog(@"1234");
  }
}

/*
 fetchData() {
 console.log('执行fetchLoginData方法');
 fetch('http://192.168.1.69:8001/app/login.do', {
 method: 'POST',
 headers: {
 
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({
 username: this.state.inputPhone,
 password: this.state.inputPass,
 timestamp:GetTimesTamp,
 signmsg:'339bac90e40176cd68e46abcbd0d9dc3',
 })
 })
 .then((response) => response.text())
 .then((responseText) => {
 console.log('数据开始');
 console.log(responseText);
 console.log('数据--------');
 })
 .catch((error) => {
 console.log('login error 开始');
 console.warn(error);
 console.log('login error--------');
 });
 }
 
 
 'charset':'utf8',
 */
