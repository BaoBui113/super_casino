import React from "react";

const InformationNotice = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-5">
      <span className="font-bold text-[15px] leading-[21px]">{title}</span>
      {children}
    </div>
  );
};

export default function NoticeDeposit() {
  return (
    <div className="w-full bg-white px-5 pt-[10px] pb-5 text-[#111111] font-normal text-sm leading-5">
      <h4 className="font-bold text-lg leading-6 mb-3">충전방법</h4>
      <InformationNotice title="입금순서">
        <p>계좌이체 → 입금 → 입금신청 순으로 진행하시면</p>
        <p>가장 신속하게 입금 처리가 가능합니다. </p>
        <p>순서를 지키지 않으실 경우 입금 처리가 불가합니다.</p>
      </InformationNotice>
      <InformationNotice title="충전단위">
        <p>충전은 만원 단위로만 가능합니다. </p>
        <p>만원 이하 단위로 입금하실 경우 만원 단위에 맞추어 .</p>
        <p>
          추가 입금을 해 주시거나, M&M 고객센터로 이체 확인증을 제출하시어 확인
          후 처리 가능합니다.
        </p>
      </InformationNotice>
      <InformationNotice title="충전규정">
        <p>허위충전 시 경고없이 제제됩니다. </p>
        <p>
          입금 신청 후 최대 5분이내 입금이 완료되지 않을 경우 자동 취소됩니다.
        </p>
        <p>
          반복적인 허위 입금 신청 시 모든 게임 사용 및 이벤트 자격이 박탈됩니다.
        </p>
      </InformationNotice>
      <ul className="bg-[#F7F7FB] w-full list-disc py-4 pl-5 flex flex-col gap-1">
        <li>회원가입 시 기재된 본인 명의 계좌만 입금이 가능합니다.</li>
        <li>최소 충전 액수는 30,000원 입니다.</li>
      </ul>
    </div>
  );
}
