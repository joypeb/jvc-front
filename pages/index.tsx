import {Fragment, useEffect} from "react";
import Header from '../components/header/Header';
import Nav from '../components/header/Nav';
import Image from "next/image";
import styles from "../styles/index.module.scss";
import churchPic from '../public/church.jpg';
import Dropdown from "@/components/header/Dropdown";
import {RxDividerVertical} from "react-icons/rx";
import $ from "jquery";
import Link from "next/link";


export default function Home() {
    useEffect(() => {

    /*let observer = new IntersectionObserver((e) => {
        e.forEach((text) => {
            if(text.isIntersecting) {
                text.target
            } else {
                target.style.opacity = "0";
            }
        });
    },{threshold:0.1});

    let introduceTitle = document.getElementById("introduceTitle");
    let introduceContentBox = document.getElementById("introduceContentBox");
    let introduceContent = document.querySelectorAll("div");
    let introduceContentText = document.getElementById("introduceContentText");

    observer.observe(introduceTitle);
    introduceContent.forEach((e) => {
        observer.observe(e);
    })
    observer.observe(introduceContentText);*/

        const introduceTitle = document.getElementById("introduceTitle");
        let introduceContentBox = document.getElementById("introduceContentBox");
        let introduceContent = document.querySelectorAll("div");
        let introduceContentText = document.getElementById("introduceContentText");

        let youtubeVideoBox = document.getElementById("youtubeVideoBox");
        let youtubeTitleBox = document.getElementById("youtubeTitleBox");
        let youtubeSermonBox = document.getElementById("youtubeSermonBox");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (entry.target === introduceTitle) {
                        introduceTitle.style.opacity = "1";
                    } else if (entry.target === introduceContentBox) {
                        introduceContentBox.style.opacity = "1";
                    } else if (entry.target === introduceContentText) {
                        introduceContentText.style.opacity = "1";
                    } else if (entry.target === youtubeVideoBox) {
                        youtubeVideoBox.style.opacity = "1";
                    } else if (entry.target === youtubeTitleBox) {
                        youtubeTitleBox.style.opacity = "1";
                    } else if (entry.target === youtubeSermonBox) {
                        youtubeSermonBox.style.opacity = "1";
                    }
                } else {
                    if (entry.target === introduceTitle) {
                        introduceTitle.style.opacity = "0";
                    } else if (entry.target === introduceContentBox) {
                        introduceContentBox.style.opacity = "0";
                    } else if (entry.target === introduceContentText) {
                        introduceContentText.style.opacity = "0";
                    } else if (entry.target === youtubeVideoBox) {
                        youtubeVideoBox.style.opacity = "0";
                    } else if (entry.target === youtubeTitleBox) {
                        youtubeTitleBox.style.opacity = "0";
                    } else if (entry.target === youtubeSermonBox) {
                        youtubeSermonBox.style.opacity = "0";
                    }
                }
            },
            {
                threshold: 1 // 뷰포트 안에 들어온 비율이 50% 이상일 때 콜백 함수 실행
            }
        );

        const observerYoutube = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (entry.target === youtubeVideoBox) {
                        youtubeVideoBox.style.transitionDelay = "400ms";
                        youtubeVideoBox.style.opacity = "1";
                    } else if (entry.target === youtubeTitleBox) {
                        youtubeTitleBox.style.transitionDelay = "200ms";
                        youtubeTitleBox.style.opacity = "1";
                    } else if (entry.target === youtubeSermonBox) {
                        youtubeSermonBox.style.transitionDelay = "600ms";
                        youtubeSermonBox.style.opacity = "1";
                    }
                } else {
                    if (entry.target === youtubeVideoBox) {
                        youtubeVideoBox.style.transitionDelay = "0ms";
                        youtubeVideoBox.style.opacity = "0";
                    } else if (entry.target === youtubeTitleBox) {
                        youtubeTitleBox.style.transitionDelay = "0ms";
                        youtubeTitleBox.style.opacity = "0";
                    } else if (entry.target === youtubeSermonBox) {
                        youtubeSermonBox.style.transitionDelay = "0ms";
                        youtubeSermonBox.style.opacity = "0";
                    }
                }
            },
            {
                threshold: 0.5 // 뷰포트 안에 들어온 비율이 50% 이상일 때 콜백 함수 실행
            }
        );

        observer.observe(introduceTitle);
        observer.observe(introduceContentBox);
        observer.observe(introduceContentText);
        observerYoutube.observe(youtubeVideoBox);
        observerYoutube.observe(youtubeTitleBox);
        observerYoutube.observe(youtubeSermonBox);

        return () => {
            observer.unobserve(introduceTitle);
            observer.unobserve(introduceContentBox);
            observer.unobserve(introduceContentText);
            observerYoutube.unobserve(youtubeVideoBox);
            observerYoutube.unobserve(youtubeTitleBox);
            observerYoutube.unobserve(youtubeSermonBox);
        };

    }, []);

return (
    <Fragment>
        <Header/>
        {/*<Nav/>*/}
        <div className={styles.mainImgBox}>
            <div className={styles.mainImgTextBox}>
                <div className={styles.mainImgTextTitleBox} id="mainImgTextTitleBox">
                    <h1 className={styles.mainImgTextTitle} id="mainImgTextTitle">사랑과 나눔이 있는 예수비전교회</h1>
                </div>
                <p className={styles.mainImgTextContent}>'오직예수' 의 마음으로 검암의 아름다운 이웃을 섬기고 그들과 함께 할 것입니다</p>
            </div>
            <Image
                className={styles.mainImg}
                src={churchPic}
                alt="교회 사진"
                placeholder="blur"
                fill
                objectFit="cover"
                objectPosition="left"
                quality={100}
            />
        </div>

        <div className={styles.introduce}>
            <div className={styles.introduceTextBox}>
                <h1 className={styles.introduceTitle} id="introduceTitle">하나님이 기뻐하시고 성도가 행복한 교회</h1>
                <div className={styles.introduceContentBox} id="introduceContentBox">
                    <div className={styles.introduceContent}>믿음</div>
                    <div className={styles.introduceContent}>소망</div>
                    <div className={styles.introduceContent}>사랑</div>
                    <div className={styles.introduceContent}>나눔</div>
                    <div className={styles.introduceContent}>섬김</div>
                </div>
                <p className={styles.introduceContentText} id="introduceContentText">우리는 이러한 마음으로 교회를 만들어 나갑니다</p>
            </div>
        </div>

        <div className={styles.youtubeBox}>
            <div className={styles.youtubeBoxInner}>
                <div className={styles.youtubeVideoBox} id="youtubeVideoBox">
                    <iframe width="600" height="337" src="https://www.youtube.com/embed/wZUgrmMyNMw"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className={styles.youtubeTextBox}>
                    <div className={styles.youtubeTitleBox} id="youtubeTitleBox">
                        <h1 className={styles.youtubeTitle}>이 주의 설교</h1>
                        <p className={styles.youtubeContent}>하나님께서 주시는 말씀의 은혜를 나눕시다</p>
                    </div>
                    <div className={styles.youtubeSermonBox} id="youtubeSermonBox">
                        <div className={styles.youtubeSermonCategory}>
                            <span>제목</span>
                            <RxDividerVertical></RxDividerVertical>
                            <span>복음의 증인들</span>
                        </div>
                        <div className={styles.youtubeSermonCategory}>
                            <span>말씀</span>
                            <RxDividerVertical ></RxDividerVertical>
                            <span>사도행전 17장 1-9절</span>
                        </div>
                        <div className={styles.youtubeSermonCategory}>
                            <span>설교자</span>
                            <RxDividerVertical></RxDividerVertical>
                            <span>박창흥 목사</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.snsBox}>
            <div className={styles.sns}>
                <h1 className={styles.snsTitle}>유튜브와 인스타그램으로 말씀과 소식을 확인하세요</h1>
                <div className={styles.snsList}>
                    <div className={styles.snsYoutube}>
                        <Link href="https://www.youtube.com/@joypch7" className={styles.snsLinkYoutube}>예수비전교회</Link>
                    </div>
                    <div className={styles.snsYoutube}>
                        <Link href="https://www.youtube.com/@user-jg2dq5ku8e" className={styles.snsLinkYoutube}>예닮아동부</Link>
                    </div>
                    <div className={styles.snsYoutube}>
                        <Link href="https://www.youtube.com/@user-ft2op3jb7j" className={styles.snsLinkYoutube}>VISION FOREST</Link>
                    </div>
                    <div className={styles.snsYoutube}>
                        <Link href="https://www.youtube.com/@user-gk8it7zq4i" className={styles.snsLinkYoutube}>꿈땅 작은 도서관</Link>
                    </div>

                    <div className={styles.snsInstagram}>
                        <Link href="https://www.instagram.com/forest__worship/" className={styles.snsLink}>
                            <span className={styles.snsLinkText}>VISION FOREST</span>
                        </Link>
                    </div>

                    <div className={styles.snsInstagram}>
                        <Link href="https://www.instagram.com/jvc_visionup/" className={styles.snsLink}>
                            <span className={styles.snsLinkText}>VISION UP</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)
}