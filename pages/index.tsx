import {Fragment, useEffect} from "react";
import Header from '../components/header/Header';
import Nav from '../components/header/Nav';
import Image from "next/image";
import styles from "../styles/index.module.scss";
import churchPic from '../public/church.jpg';
import Dropdown from "@/components/header/Dropdown";


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

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (entry.target === introduceTitle) {
                        introduceTitle.style.opacity = "1";
                    } else if (entry.target === introduceContentBox) {
                        introduceContentBox.style.opacity = "1";
                    } else if (entry.target === introduceContentText) {
                        introduceContentText.style.opacity = "1";
                    }
                } else {
                    if (entry.target === introduceTitle) {
                        introduceTitle.style.opacity = "0";
                    } else if (entry.target === introduceContentBox) {
                        introduceContentBox.style.opacity = "0";
                    } else if (entry.target === introduceContentText) {
                        introduceContentText.style.opacity = "0";
                    }
                }
            },
            {
                threshold: 1 // 뷰포트 안에 들어온 비율이 50% 이상일 때 콜백 함수 실행
            }
        );

        observer.observe(introduceTitle);
        observer.observe(introduceContentBox);
        observer.observe(introduceContentText);

        return () => {
            observer.unobserve(introduceTitle);
            observer.unobserve(introduceContentBox);
            observer.unobserve(introduceContentText);
        };
    }, []);

return (
    <Fragment>
        <Header/>
        {/*<Nav/>*/}
        <div className={styles.mainImgBox}>
            <div className={styles.mainImgTextBox}>
                <div className={styles.mainImgTextTitleBox}>
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

        <div className={styles.youtubeBox}></div>
    </Fragment>
)
}