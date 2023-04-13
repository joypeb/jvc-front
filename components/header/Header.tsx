import Link from "next/link";
import styles from "../../styles/header.module.scss";
import Image from "next/image";
import React from "react";
import {AiOutlineUser} from "react-icons/ai";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from "classnames";
import {List} from "@radix-ui/react-navigation-menu";

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLogo}>
                    <Link href="/" >
                        <Image
                            src="/logo.png"
                            alt="예수비전교회 로고"
                            width={60}
                            height={30}
                        />
                    </Link>
                </div>

                <NavigationMenu.Root className={styles.listRoot}>
                    <NavigationMenu.List className={styles.outList}>
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className={styles.listTrigger}>교회안내</NavigationMenu.Trigger>

                            <NavigationMenu.Content className={styles.NavigationMenuContent}>
                                <ul className={`${styles.List} ${styles.one}`}>
                                    <ListItem href="https://stitches.dev/" title="인사말">
                                        교회를 소개하는 내용입니다
                                    </ListItem>
                                    <ListItem href="https://stitches.dev/" title="담임목사 소개">
                                        담임목사를 소개하는 페이지입니다
                                    </ListItem>
                                    <ListItem href="https://stitches.dev/" title="선교의 교회">
                                        선교현황과 선교의 비전을 소개하는 페이지입니다
                                    </ListItem>
                                    <ListItem href="https://stitches.dev/" title="교회 행사">
                                        교회에서 진행하는 행사에 대해 소개하는 페이지입니다
                                    </ListItem>
                                    <ListItem href="/colors" title="교회 발자취">
                                        지금까지 교회가 걸어왔던 길을 소개하는 페이지입니다
                                    </ListItem>
                                    <ListItem href="https://icons.radix-ui.com/" title="예배와 약도">
                                        예배시간과 오시는 길을 소개하는 페이지입니다
                                    </ListItem>
                                </ul>
                            </NavigationMenu.Content>

                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className={styles.listTrigger}>자료실</NavigationMenu.Trigger>
                            <NavigationMenu.Content className={styles.NavigationMenuContent}>
                                <ul className={`${styles.List} ${styles.one}`}>
                                    <ListItem href="https://stitches.dev/" title="Stitches">
                                        CSS-in-JS with best-in-class developer experience.s
                                    </ListItem>
                                    <ListItem href="/colors" title="Colors">
                                        Beautiful, thought-out palettes with auto dark mode.
                                    </ListItem>
                                    <ListItem href="https://icons.radix-ui.com/" title="Icons">
                                        A crisp set of 15x15 icons, balanced and consistent.
                                    </ListItem>
                                </ul>
                            </NavigationMenu.Content>

                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className={styles.listTrigger}>기관모임</NavigationMenu.Trigger>
                            <NavigationMenu.Content className={styles.NavigationMenuContent}>
                                <ul className={`${styles.List} ${styles.one}`}>
                                    <ListItem href="https://stitches.dev/" title="Stitches">
                                        CSS-in-JS with best-in-class developer experience.a
                                    </ListItem>
                                    <ListItem href="/colors" title="Colors">
                                        Beautiful, thought-out palettes with auto dark mode.
                                    </ListItem>
                                    <ListItem href="https://icons.radix-ui.com/" title="Icons">
                                        A crisp set of 15x15 icons, balanced and consistent.
                                    </ListItem>
                                </ul>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <Link href="/" className={styles.NavigationMenuLink}>교제의장</Link>
                        </NavigationMenu.Item>

                        <NavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
                            {/*<div className={styles.Arrow} />*/}
                        </NavigationMenu.Indicator>

                    </NavigationMenu.List>


                    <div className={styles.ViewportPosition}>
                        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
                    </div>

                </NavigationMenu.Root>

                {/*<ul className={styles.navList}>
                    <li className={styles.navContent}>교회안내</li>
                    <li className={styles.navContent}>자료실</li>
                    <li className={styles.navContent}>기관모임</li>
                    <li className={styles.navContent}>교제의장</li>
                </ul>*/}

                <div>
                    <button className={styles.navUserBtn}>
                        <AiOutlineUser size={30}/>
                    </button>
                </div>
            </nav>
        </header>
    )
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <List asChild>
            <a className={classNames(styles.ListItemLink, className)} {...props} ref={forwardedRef}>
                <div className={styles.ListItemHeading}>{title}</div>
                <p className={styles.ListItemText}>{children}</p>
            </a>
        </List>
    </li>
));