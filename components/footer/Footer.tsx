import {RxDividerVertical} from "react-icons/rx";
import styles from "../../styles/footer.module.scss";

export default function FooterComponent() {
    return (
        <footer className={styles.footerBox}>
            <div className={styles.footer}>
                <div className={styles.churchBox}>
                    <h1 className={styles.churchName}>예수비전교회</h1>
                    <p className={styles.churchNameEng}>Jesus Vision Church</p>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.content}>
                        <span>주소</span>
                        <RxDividerVertical></RxDividerVertical>
                        <span>인천 서구 검암로 30번길 3-24 (검암동 504-7)</span>
                    </div>
                    <div className={styles.content}>
                        <span>Address</span>
                        <RxDividerVertical></RxDividerVertical>
                        <span>3-24, Geomam-ro30 beon-gil, Seo-gu, Incheon, Korea</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentTel}>
                            <span>TEL</span>
                            <RxDividerVertical></RxDividerVertical>
                            <span>032-563-0019</span>
                        </div>
                        <div className={styles.contentTel}>
                            <span>FAX</span>
                            <RxDividerVertical></RxDividerVertical>
                            <span>070-8282-0019</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <span>온라인 헌금 계좌</span>
                        <RxDividerVertical></RxDividerVertical>
                        <span>(농협) 301-0263-3387-11 (예금주 : 예수비전교회)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}