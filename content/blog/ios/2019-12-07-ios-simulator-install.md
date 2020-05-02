---
title: iOS 버전별 Simulator 설치 가이드
date: 2019-12-07 11:20:02
category: ios
draft: false
description: 실무에서 다양한 버전의 시뮬레이터를 사용하는 방법을 소개합니다
---

![](../../assets/2019-12-07/simulator.png)   

## 설치 가이드? 

iOS 테스트를 위해서는 다양한 버전의 기기와 OS 별 테스트를 거쳐야 하는 경우가 많아 설치를 해야하는데  
버전별 `Simulator`을 설치하는 방법에 대한 가이드는 찾기 어려워서 정리합니다.

[https://developer.apple.com/download/more/?=xcode](https://developer.apple.com/download/more/?=xcode)

첫번째, Apple 공식 사이트로 들어가 구버전의 Xcode를 다운로드 합니다.

현재 (19.10.2) 기준으로 Xcode 9.4.1 까지 설치하시면 iOS 9.0 SDK까지 설치하실 수 있습니다.  
위 처럼 사이트를 통한 다운로드 방법이 있고, CLI로 설치하는 방법 또한 존재합니다.

```bash
$ gem install xcode-install 
```

위의 Command 를 터미널에 입력합니다. 설치가 끝났다면 준비끝! 이제 아래의 명령어로 xcode를 확인 하실 수 있습니다.

```bash 
Fernando 🔑  $  xcversion list
4.3 for Lion
4.3.1 for Lion
4.3.2 for Lion
4.3.3 for Lion
4.4
4.4.1
4.5
4.5.1
4.5.2
4.6
4.6.1
4.6.2
4.6.3
5.0.1
5
5.0.2
5.1
5.1.1
6.0.1
6.1
6.1.1
6.2
6.3
6.3.1
6.3.2
6.4
7
7.0.1
7.1.1
7.1
7.2
7.2.1
7.3
7.3.1
8
8.1
8.2
8.2.1
8.3
8.3.1
8.3.2
8.3.3
9
9.0.1
9.1
9.2
9.3
9.3.1
9.4
9.4.1 (installed)
10
10.1
10.2
10.2.1
10.3 (installed)
11 (installed)
11 GM Seed 2 (installed)
11.1 GM Seed
```

설치가 되어있는 xcode 같은 경우 `(installed)` 로 표시가 되기 때문에 편리합니다.

여기서 미세한 꿀팁을 드리자면, 설치 되지 않은 버전만 보고 싶다면 다음과 같이 입력합니다.

```bash
 $ xcversion list | grep -v "installed"
```

참 쉽죠? grep 명령어를 통해 `installed` 된 항목을 제외하고 출력하면 됩니다. 반대의 경우로 현재 PC에 설치된 xcode 버전만 보고 싶다면 다음과 같이 입력합니다.

```bash
Fernando 🔑  $ xcversion installed
9.4.1	(/Users/fernando/Downloads/Xcode_9.4.1.app)
10.3	(/Applications/Xcode.app)
11.0	(/Users/fernando/Downloads/Xcode_11_GM.app)
```

위의 명령을 통해 현재 설치된 `Xcode` 버전과 `Path` 를 확인하실 수 있습니다

설치 가능한 xcode 버전을 확인 했다면 설치는 다음과 같이 진행합니다.

```bash
$ xcversion install "받고자하는 버전"
```

해당 명령어를 입력하게되면 Apple 개발자 정보로 인증을 거친 이후 다운로드가 진행됩니다.

설치를 하게되면 기본적으로 현재 사용중인 `xcode-command-line tool` 이 설치한 버전으로 변경이 되는데  
이때 `--no-switch` 옵션을 이용 하게되면 변경 없이 설치만 하게 됩니다.

**설치한 xcode Version**

-   xcode 9.4.1 (iOS 9 ~ iOS 10)

-   xcode 10.3 (iOS11.0 ~ iOS 12.2)

-   xcode 11.0 (iOS12.4 ~ )

설치를 한 이후에는 `simulator` 설치를 진행합니다.

```bash
$ xcversion simulators --install='iOS 10.0'
```

설치하고 싶은 버전을 입력하시면 끝.

만약 설치가 안되고 에러메세지가 나온다면 다음과 같이 진행합니다.

```bash
$ xcversion selected 

$ xcversion select VERSION
```

현재 설정 되어있는 xcode의 버전을 확인하고 버전이 맞지 않다면 변경 해줍니다.

`selected` 명령을 통해 현재 선택된 `xcode tool` 버전을 확인 할 수 있습니다.