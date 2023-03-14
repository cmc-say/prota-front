import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";

export const FileUpload = () => {
  return (
    <FileUploadStyled.Container>
      <FileUploadStyled.FileImg
        src={"/icons/file_image.svg"}
        alt="file_image"
        width={36}
        height={36}
      />
      <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
        세계관을 대표할 사진이 필요해요!
      </Text>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
        대표 사진 추가하기
      </Text>
    </FileUploadStyled.Container>
  );
};

const FileUploadStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 24px;
    height: 200px;
    border: 2px dashed #6a7395;
    border-radius: 8px;
  `,
  FileImg: styled(Image)`
    margin-bottom: 15px;
  `,
};
