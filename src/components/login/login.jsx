import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <div className={styles.left}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + "./images/poster.jpg"}
          alt=""
        />
        <p className={styles.inner}>
          최근 재밌게 보았던 영화 ‘everything everywhere all at once’ 를 <br />{" "}
          테마로 만든 프로젝트입니다. ‘멀티버스’, <br />즉 다중 우주 세계관이
          핵심인 이 영화는 순간 순간의 선택으로 다른 삶을 살아가고 있는 주인공
          ‘에블린’의 수많은 모습들이 존재합니다. <br />
          영화를 보고 다중 우주 속 저의 모습들을 카드 형식으로 만들어 보고
          싶었습니다.
          <span className={styles.strong}>
            뭐든 되고 뭐든 할 수 있는 수많은 우주 속 ‘나’를 만들어보세요!
          </span>
        </p>
      </div>
      <div className={styles.right}>
        <Header />
        <section>
          <h1>
            Login
          </h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
