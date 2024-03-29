import React from "react";
import styled from "styled-components";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

function Pictures() {
  const cat1 =
    "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200309_166%2F1583725050886CTWAw_JPEG%2F19860647745281435_-647047757.jpeg";
  const cat2 =
    "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200209_243%2F1581229366427K8FiM_JPEG%2F359951579074603513.jpg";
  const cat3 =
    "https://search.pstatic.net/common?type=f&size=304x304&quality=95&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2Fshop%2F20221108_76%2F1667834683413ORffR_JPEG%2F52EF5F1E-B25C-4AF0-B744-01E5B371C0FD.jpeg";
  const cat4 =
    "https://search.pstatic.net/common?type=f&size=304x304&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200905_241%2F15992635416632Q8hQ_JPEG%2F35399159127148360_-1692391312.jpeg";
  const cat5 =
    "https://search.pstatic.net/common?type=f&size=304x304&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200310_244%2F1583766717072iiXPK_JPEG%2F19902326350949103_1945857219.jpeg";

  const Catbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const Cats = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Catbox>
      {/* 노르웨이숲고양이 */}
      <Cats>
        <Link to="about/1">
          <img src={cat1} width="150px" height="130px"></img>
          <br></br>
          <i>노르웨이숲고양이</i>
        </Link>
      </Cats>

      {/* 스핑크스 */}
      <Cats>
        <Link to="about/2">
          <img src={cat2} width="150px" height="130px"></img>
          <br></br>
          <i>스핑크스</i>
        </Link>
      </Cats>

      {/* 러시안블루 */}
      <Cats>
        <Link to="about/3">
          <img src={cat3} width="150px" height="130px"></img>
          <br></br>
          <i>러시안블루</i>
        </Link>
      </Cats>

      {/* 코리안쇼트헤어 */}
      <Cats>
        <Link to="about/4">
          <img src={cat4} width="150px" height="130px"></img>
          <br></br>
          <i>코리안쇼트헤어</i>
        </Link>
      </Cats>

      {/* 먼치킨 */}
      <Cats>
        <Link to="about/5">
          <img src={cat5} width="150px" height="130px"></img>
          <br></br>
          <i>먼치킨</i>
        </Link>
      </Cats>
    </Catbox>
  );
}

export default Pictures;
