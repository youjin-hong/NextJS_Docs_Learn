// 애플리케이션 전체에서 사용될 글꼴을 보관하는 데 사용되는 파일

// Inter 모듈에서 글꼴 가져오기
import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

// 하위 집합을 지정 (이 경우: 'latin')
export const inter = Inter({ subsets: ["latin"] });

// 보조 글꼴 추가하기
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
