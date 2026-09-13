import React from 'react'
import { Layout } from '../../components/Layout'
import { SEO } from '../../components/SEO'
import './moments.scss'

const MomentsPrivacyPage: React.FC = () => (
  <Layout>
    <article className="privacy-page">
      <SEO
        title="moments Android 개인정보처리방침"
        description="moments - Timestamp Camera Android 앱의 개인정보처리방침"
      />
      <h1>moments - Timestamp Camera Android 개인정보처리방침</h1>
      <p className="privacy-page__updated">시행일: 2026년 9월 14일</p>

      <p>
        이 방침은 Android 앱 <strong>moments - Timestamp Camera</strong>
        (패키지 이름: <code>com.tmsae.momentPhoto</code>)에 적용됩니다. 이
        방침은 별도 코드와 서비스 구성을 가진 iOS 앱에는 적용되지 않습니다.
      </p>

      <h2>1. 앱에서 기기에 저장하는 정보</h2>
      <p>
        사진을 촬영하거나 기기 사진 보관함에서 선택하면, 편집한 사진과 사진의
        캡션, 카테고리 이름·이모지, 날짜, D-Day 및 앱 설정이 기기 내 앱 저장소에
        저장됩니다. 사용자가 저장을 선택한 경우에만 원본 또는 편집된 사진이 기기
        사진 보관함에도 저장됩니다.
      </p>
      <p>
        이 앱은 사진 파일, 캡션 또는 기기 내 사진·카테고리 데이터베이스를 당사의
        서버, Firebase 또는 Amplitude로 업로드하지 않습니다. 앱은 위치 권한을
        요청하거나 위치 정보를 기록하지 않습니다.
      </p>

      <h2>2. 기기 밖으로 전송되는 정보</h2>
      <p>
        앱은 기능 운영, 안정성 확인 및 사용 방식 분석을 위해 아래 서비스 SDK를
        사용합니다. 이 정보에는 앱·기기 식별자와 기술 정보가 포함될 수 있으나,
        위 1항의 사진 파일과 캡션은 포함하지 않습니다.
      </p>
      <ul>
        <li>
          <strong>Firebase Analytics 및 Firebase Installations</strong>: 앱 실행,
          화면 조회, 앱·기기 정보 및 Firebase 설치 식별자를 분석과 앱 기능
          측정에 사용합니다.
        </li>
        <li>
          <strong>Firebase Crashlytics</strong>: 앱 오류와 비정상 종료를 조사하기
          위한 진단 정보 및 기기·앱 상태를 처리합니다.
        </li>
        <li>
          <strong>Firebase Cloud Messaging</strong>: 알림을 제공하기 위해 푸시
          알림 등록 토큰과 알림 상호작용 정보를 처리합니다. 토큰은 이 앱 코드에서
          별도 개발자 서버로 전송하지 않습니다.
        </li>
        <li>
          <strong>Firebase Remote Config</strong>: 앱 설정을 내려주기 위해
          Firebase 설치 식별자 및 앱·기기 정보를 사용합니다.
        </li>
        <li>
          <strong>Amplitude</strong>: 앱 시작, 화면·기능 사용 및 오류 분석을 위해
          기기 식별자와 사용 이벤트를 처리합니다. 현재 구현의 이벤트에는 사진
          선택 출처, 사용자가 만든 카테고리 이름·이모지, 선택한 날짜 형식 또는
          D-Day 설정 같은 기능 사용 값이 포함될 수 있습니다.
        </li>
      </ul>

      <h2>3. 사용 목적 및 제3자 처리</h2>
      <p>
        위 정보는 앱 기능 제공, 알림 전송, 오류 수정, 안정성 개선 및 사용 패턴
        분석에만 사용합니다. 당사는 광고 SDK를 사용하지 않으며, 앱 코드에서 이
        정보를 광고주나 데이터 브로커에게 판매하거나 제공하지 않습니다.
      </p>
      <p>
        Firebase 서비스는 Google, Amplitude 서비스는 Amplitude가 각각 당사를
        위해 처리합니다. 각 제공자는 서비스 제공을 위한 하도급 처리자를 이용할 수
        있습니다. 관련 처리와 보관 기간은 각 서비스의 정책 및 프로젝트 설정에
        따라 적용됩니다.
      </p>
      <ul>
        <li>
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            Firebase 개인정보 및 보안 정보
          </a>
        </li>
        <li>
          <a href="https://amplitude.com/privacy" target="_blank" rel="noopener noreferrer">
            Amplitude 개인정보처리방침
          </a>
        </li>
      </ul>

      <h2>4. 권한</h2>
      <p>
        사진을 선택하거나 촬영할 때 Android가 제공하는 사진 보관함 또는 카메라
        접근을 사용합니다. 편집한 사진을 사진 보관함에 저장하는 기능에는 미디어
        저장 접근이 필요할 수 있습니다. 푸시 알림은 Android 알림 권한을 요청하며,
        허용 여부는 언제든지 기기 설정에서 변경할 수 있습니다.
      </p>

      <h2>5. 보관 및 삭제</h2>
      <p>
        기기 내 사진·카테고리·설정은 사용자가 삭제할 때까지 남습니다. 개별 사진과
        카테고리는 앱에서 삭제할 수 있고, 설정의 <strong>모든 데이터 삭제</strong>
        기능으로 앱 내 데이터를 지울 수 있습니다. 사용자가 사진 보관함에 별도로
        저장한 파일은 앱 데이터 삭제와 별개이므로 사진 보관함에서 직접 삭제해야
        합니다. 앱을 삭제하거나 Android 설정에서 앱 저장공간을 삭제하면 앱 전용
        로컬 데이터가 삭제됩니다.
      </p>
      <p>
        앱은 사용자 계정이나 자체 클라우드 사진 저장소를 운영하지 않습니다. 위
        분석·진단·알림 서비스가 처리하는 데이터의 삭제 또는 개인정보 관련 요청은
        아래 연락처로 보내 주시면, 적용 가능한 서비스 제공자 절차에 따라 검토하고
        처리하겠습니다.
      </p>

      <h2>6. 외부 링크</h2>
      <p>
        앱에서 외부 웹사이트나 링크를 열면 해당 사이트의 운영자가 일반적인 웹
        요청 정보를 처리할 수 있습니다. 이 방침은 외부 사이트의 처리 방식에는
        적용되지 않습니다.
      </p>

      <h2>7. 문의 및 방침 변경</h2>
      <p>
        개인정보 또는 삭제 요청은{' '}
        <a href="mailto:tmsaeapp@gmail.com">tmsaeapp@gmail.com</a>으로
        문의해 주세요. 앱의 데이터 처리 방식이 바뀌면 이 페이지의 시행일과 내용을
        함께 갱신합니다.
      </p>
    </article>
  </Layout>
)

export default MomentsPrivacyPage
