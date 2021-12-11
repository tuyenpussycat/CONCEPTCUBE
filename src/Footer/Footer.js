import React from 'react';
import './Footer.css'

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div>
            <section className='footer'>
                <div className='container'> 
                    <div className='footer__list'>
                    <div className='footer__whathappend'>
                        <h3>what happened</h3>
                        <p> [공지] 개인 정보 처리 방침 변경 사전 안내 <br></br>
                         
                            [공지] 29CM 강남 스토어 영업 종료 
                            <br></br>
                          

                            [공지] 개인 정보 처리 방침 변경 사전 안내 
                            <br></br>
                            
                            [공지] iOS 10 이하 버전 지원 중단 안내 
                            <br></br>
                            
                            [공지] 개인 정보 처리 방침 변경 사전 안내</p>
                    </div>
                  <div className='footer__contact'>
                      <ul>
                          <li>
                              <h3>about us</h3>
                              <p>회사 소개 
                                  <br></br>
                                  
                                인재 채용 
                                <br></br>
                                
                                상시 할인 혜택</p>
                          </li>
                          <li>
                            <h3>my order</h3>
                            <p>내 주문 
                               
                                <br></br>
                                주문 배송 
                              
                                <br></br>
                                취소 / 교환 / 반품 내역 
                                <br></br>
                             
                                상품 리뷰 내역 
                                <br></br>
                             
                                증빙 서류 발급</p>
                          </li>
                          <li>
                              <h3>my account</h3>
                              <p>
                              회원 정보 수정 
                             
                              <br></br>
                              회원 등급  
                              <br></br>
                             
                              마일리지 현황 
                              <br></br>
                          
                              쿠폰
                              </p>
                          </li>
                          <li>
                              <h3>help</h3>
                              <p>
                            1 : 1 상담 내역 
                            <br></br>
                      
                            상품 Q & A 내역 
                            <br></br>
                        
                            공지 사항 
                            <br></br>
                        
                            자주하는 질문 
                            <br></br>
                       
                            고객의 소리
                              </p>
                          </li>
                      </ul>
                  </div>
                    </div>
                    <div className='footer__text'>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br></br>
                        서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</div>
                </div>
                </section>
        </div>

    );
}

export default Footer;