---
title: Github Pull Request 템플릿을 사용해보자 - 실전 적용법
date: 2019-05-29 23:32:10
category: develop
draft: false
description: TEST
---

<img src="../../assets/2019-05-29/content.jpg">

## Github 템플릿 이란?
github에서 자체적으로 제공해주는 기본 기능이지만, 따로 설정을 하지 않으면 사용을 할 수가 없습니다.

기본적으로 새로운 이슈를 생성하거나 새로운 `Pull Request`를 전송할 때 다수의 작업자들과 함께 작업하는 프로젝트의 경우에는 보통 규칙이 있기 마련입니다.

위와 같은 프로젝트에서 모두가 각자의 양식으로 `Pull Request`를 하거나 `Issue` 등록을 한다면

내용을 파악하기가 어렵겠죠??

그래서 생긴 기능이 `Github Template`입니다.
해당 기능에 대한 깃헙 공식 문서는 이곳을 참고하시면 되고, 쉽게 쉽게 따라오고자 하시는 분들은 아래를 살펴봐주세요

## Github 템플릿 적용하는 방법 
Github에서 사용가능한 템플릿은 총 3가지입니다.

| Name      | Filename                 | Description                         |
| --------- | ------------------------ | ----------------------------------- |
| 컨트리뷰팅 템플릿 | CONTRIBUTING.md          | 프로젝트에 기여를 하기전 읽어야할 파일입니다.           |
| 이슈 템플릿    | ISSUE_TEMPLATE.md        | 새로운 이슈를 만들때 적용할 수 있는 템플릿 파일입니다.     |
| 풀리퀘스트 템플릿 | PULL_REQUEST_TEMPLATE.md | 새로운 풀리퀘스트를 생성할때 적용할 수 있는 템플릿 파일입니다. |

프로젝트 최상위 폴더에 `.github` 폴더를 만든 후 표에서 필요한 파일들을 생성하여 repo에 올려놓으면 끝입니다

템플릿 파일들은 마크다운으로 작성하여야 하며, 필요에 따라 다양한 예제들이 `github`에 많이 있으니
필요에 따라 사용하시면 될 것 같습니다

그래도 모르겠다 하시는 분들을 위해 github repo 주소를 공유드립니다. 
https://github.com/techinpark/github-template-tutorial/ 

즐거운 코딩 하세요!

