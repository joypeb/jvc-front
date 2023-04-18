import Link from "next/link";
import styles from "../../styles/header.module.scss";
import Image from "next/image";
import React, {useEffect} from "react";
import {AiOutlineUser} from "react-icons/ai";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {styled, keyframes} from '@stitches/react';
import {CaretDownIcon, ChevronRightIcon, DotFilledIcon} from '@radix-ui/react-icons';
import {violet, mauve, indigo, purple, blackA, gray} from '@radix-ui/colors';
import {FaUser} from "react-icons/fa";


export default function HeaderComponent() {
    useEffect(() => {
        window.onscroll = function () {
            let scrollTopHeader = document.getElementById('header');
            if (scrollTopHeader != null) {
                if (document.documentElement.scrollTop > 50) {
                    scrollTopHeader.style.backdropFilter = 'blur(10px)';
                } else {
                    scrollTopHeader.style.backdropFilter = 'blur(0)';
                }
            }
        };
    }, []);
    return (
        <header className={styles.header} id="header">
            <nav className={styles.nav}>
                <div className={styles.navLogo}>
                    {/*<Link href="/">
                        <Image
                            src="/logo.png"
                            alt="예수비전교회 로고"
                            width={60}
                            height={30}
                        />
                    </Link>*/}
                    <h1 className={styles.logo}>JVC</h1>
                </div>

                <NavigationMenuRoot>
                    <NavigationMenuList>
                        <NavigationMenu.Item>
                            <NavigationMenuTrigger>
                                교회안내 {/*<CaretDown aria-hidden />*/}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <List>
                                    {/*<li style={{ gridRow: 'span 3' }}>
                                <NavigationMenu.Link asChild>
                                    <Callout href="/">
                                        <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                                            <path d="M12 0H4V8H12V0Z"></path>
                                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                                        </svg>
                                        <CalloutHeading>Radix Primitives</CalloutHeading>
                                        <CalloutText>Unstyled, accessible components for React.</CalloutText>
                                    </Callout>
                                </NavigationMenu.Link>
                            </li>*/}

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
                                </List>
                            </NavigationMenuContent>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenuTrigger>
                                자료실 {/*<CaretDown aria-hidden />*/}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <List layout="one">
                                    <ListItem title="예수비전 갤러리" href="/docs/primitives/overview/introduction">
                                        예수비전교회의 사진을 모아둔 페이지입니다
                                    </ListItem>
                                    <ListItem title="새가족 소개" href="/docs/primitives/overview/getting-started">
                                        예수비전교회의 새가족이 되신것을 환영합니다
                                    </ListItem>
                                    <ListItem title="설교" href="/docs/primitives/overview/styling">
                                        예수비전교회 설교를 모아놓은 페이지입니다
                                    </ListItem>
                                    <ListItem title="예수비전 동영상" href="/docs/primitives/overview/animation">
                                        예수비전교회 동영상을 모아놓은 페이지입니다
                                    </ListItem>
                                </List>
                            </NavigationMenuContent>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenuTrigger>
                                기관모임 {/*<CaretDown aria-hidden />*/}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <List layout="one">
                                    <ListItem title="유치부" href="/docs/primitives/overview/introduction">
                                        예꼬 유치부
                                    </ListItem>
                                    <ListItem title="아동부" href="/docs/primitives/overview/getting-started">
                                        예닮 아동부
                                    </ListItem>
                                    <ListItem title="학생회" href="/docs/primitives/overview/styling">
                                        Unstyled and compatible with any styling solution.
                                    </ListItem>
                                    <ListItem title="청년회" href="/docs/primitives/overview/animation">
                                        Use CSS keyframes or any animation library of your choice.
                                    </ListItem>
                                </List>
                            </NavigationMenuContent>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenuLink href="https://github.com/radix-ui">교제의장</NavigationMenuLink>
                        </NavigationMenu.Item>

                        <NavigationMenuIndicator>
                            <Arrow/>
                        </NavigationMenuIndicator>
                    </NavigationMenuList>

                    <ViewportPosition>
                        <NavigationMenuViewport/>
                    </ViewportPosition>
                </NavigationMenuRoot>

                {/*<ul className={styles.navList}>
                    <li className={styles.navContent}>교회안내</li>
                    <li className={styles.navContent}>자료실</li>
                    <li className={styles.navContent}>기관모임</li>
                    <li className={styles.navContent}>교제의장</li>
                </ul>*/}

                <div className={styles.navUserBtnBox}>
                    {/*<button className={styles.navUserBtn}>
                        <AiOutlineUser size={24}/>
                    </button>*/}

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <IconButton aria-label="Customise options">
                                <FaUser size={20}/>
                            </IconButton>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenuContent sideOffset={5}>
                                <DropdownMenuItem>
                                    로그인
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    내 정보
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>
                                    관리자 페이지
                                </DropdownMenuItem>
                                <DropdownMenuArrow/>
                            </DropdownMenuContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>

                </div>
            </nav>
        </header>
    )
};

/*const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <List asChild>
            <a className={classNames(styles.ListItemLink, className)} {...props} ref={forwardedRef}>
                <div className={styles.ListItemHeading}>{title}</div>
                <p className={styles.ListItemText}>{children}</p>
            </a>
        </List>
    </li>
));*/

const enterFromRight = keyframes({
    from: {transform: 'translateX(200px)', opacity: 0},
    to: {transform: 'translateX(0)', opacity: 1},
});

const enterFromLeft = keyframes({
    from: {transform: 'translateX(-200px)', opacity: 0},
    to: {transform: 'translateX(0)', opacity: 1},
});

const exitToRight = keyframes({
    from: {transform: 'translateX(0)', opacity: 1},
    to: {transform: 'translateX(200px)', opacity: 0},
});

const exitToLeft = keyframes({
    from: {transform: 'translateX(0)', opacity: 1},
    to: {transform: 'translateX(-200px)', opacity: 0},
});

const scaleIn = keyframes({
    from: {transform: 'rotateX(-30deg) scale(0.9)', opacity: 0},
    to: {transform: 'rotateX(0deg) scale(1)', opacity: 1},
});

const scaleOut = keyframes({
    from: {transform: 'rotateX(0deg) scale(1)', opacity: 1},
    to: {transform: 'rotateX(-10deg) scale(0.95)', opacity: 0},
});

const fadeIn = keyframes({
    from: {opacity: 0},
    to: {opacity: 1},
});

const fadeOut = keyframes({
    from: {opacity: 1},
    to: {opacity: 0},
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
    display: 'flex',
    justifyContent: 'center',
    /*backgroundColor: 'white',*/
    padding: 4,
    borderRadius: 6,
    listStyle: 'none',
    /*boxShadow: `0 2px 10px ${blackA.blackA7}`,*/
    margin: 0,
    cursor: 'pointer'
});

const itemStyles = {
    padding: '8px 12px',
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 18,
    color: gray.gray12,
    /*'&:focus': { boxShadow: `0 0 0 2px ${gray.gray7}` },*/
    '&:hover': {color: gray.gray12},
};

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
    all: 'unset',
    ...itemStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    width: '100px'
});

const NavigationMenuLink = styled(NavigationMenu.Link, {
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    fontSize: 18,
    lineHeight: 1,
    width: '100px',
    textAlign: 'center'
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    '@media only screen and (min-width: 600px)': {width: 'auto'},
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': {animationName: enterFromLeft},
    '&[data-motion="from-end"]': {animationName: enterFromRight},
    '&[data-motion="to-start"]': {animationName: exitToLeft},
    '&[data-motion="to-end"]': {animationName: exitToRight},
});

const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 10,
    top: '100%',
    overflow: 'hidden',
    zIndex: 1,
    transition: 'width, transform 200ms ease',
    '&[data-state="visible"]': {animation: `${fadeIn} 200ms ease`},
    '&[data-state="hidden"]': {animation: `${fadeOut} 200ms ease`},
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
    position: 'relative',
    transformOrigin: 'top center',
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    height: 'var(--radix-navigation-menu-viewport-height)',
    transition: 'width, height, 200ms ease',
    '&[data-state="open"]': {animation: `${scaleIn} 200ms ease`},
    '&[data-state="closed"]': {animation: `${scaleOut} 200ms ease`},
    '@media only screen and (min-width: 600px)': {
        width: 'var(--radix-navigation-menu-viewport-width)',
    },
});

const List = styled('ul', {
    display: 'grid',
    padding: 22,
    margin: 0,
    columnGap: 10,
    listStyle: 'none',
    variants: {
        layout: {
            one: {
                '@media only screen and (min-width: 600px)': {
                    width: 500,
                    gridTemplateColumns: '.75fr 1fr',
                },
            },
            two: {
                '@media only screen and (min-width: 600px)': {
                    width: 600,
                    gridAutoFlow: 'column',
                    gridTemplateRows: 'repeat(3, 1fr)',
                },
            },
        },
    },
    defaultVariants: {
        layout: 'one',
    },
});

const ListItem = React.forwardRef(({children, title, ...props}, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <ListItemLink {...props} ref={forwardedRef}>
                <ListItemHeading>{title}</ListItemHeading>
                <ListItemText>{children}</ListItemText>
            </ListItemLink>
        </NavigationMenu.Link>
    </li>
));

const ListItemLink = styled('a', {
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    padding: 12,
    borderRadius: 12,
    fontSize: 15,
    lineHeight: 1,
    '&:focus': {boxShadow: `0 0 0 2px ${gray.gray7}`},
    '&:hover': {backgroundColor: gray.gray3},
});

const ListItemHeading = styled('div', {
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: 5,
    color: gray.gray12,
});

const ListItemText = styled('p', {
    all: 'unset',
    color: mauve.mauve11,
    lineHeight: 1.4,
    fontWeight: 'initial',
});

const Callout = styled('a', {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${purple.purple9} 0%, ${indigo.indigo9} 100%);`,
    borderRadius: 12,
    padding: 25,
    textDecoration: 'none',
    outline: 'none',
    userSelect: 'none',
    '&:focus': {boxShadow: `0 0 0 2px ${violet.violet7}`},
});

const CalloutHeading = styled('div', {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.2,
    marginTop: 16,
    marginBottom: 7,
});

const CalloutText = styled('p', {
    all: 'unset',
    color: mauve.mauve4,
    fontSize: 14,
    lineHeight: 1.3,
});

const ViewportPosition = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top: '100%',
    left: 0,
    perspective: '2000px',
});

const CaretDown = styled(CaretDownIcon, {
    position: 'relative',
    color: violet.violet10,
    top: 1,
    transition: 'transform 250ms ease',
    '[data-state=open] &': {transform: 'rotate(-180deg)'},
});

const Arrow = styled('div', {
    position: 'relative',
    top: '70%',
    backgroundColor: 'white',
    width: 10,
    height: 10,
    transform: 'rotate(45deg)',
    borderTopLeftRadius: 2,
});


const slideUpAndFade = keyframes({
    '0%': {opacity: 0, transform: 'translateY(2px)'},
    '100%': {opacity: 1, transform: 'translateY(0)'},
});

const slideRightAndFade = keyframes({
    '0%': {opacity: 0, transform: 'translateX(-2px)'},
    '100%': {opacity: 1, transform: 'translateX(0)'},
});

const slideDownAndFade = keyframes({
    '0%': {opacity: 0, transform: 'translateY(-2px)'},
    '100%': {opacity: 1, transform: 'translateY(0)'},
});

const slideLeftAndFade = keyframes({
    '0%': {opacity: 0, transform: 'translateX(2px)'},
    '100%': {opacity: 1, transform: 'translateX(0)'},
});

const DropContentStyles = {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 5,
    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    zIndex: 100,
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
        '&[data-side="top"]': {animationName: slideDownAndFade},
        '&[data-side="right"]': {animationName: slideLeftAndFade},
        '&[data-side="bottom"]': {animationName: slideUpAndFade},
        '&[data-side="left"]': {animationName: slideRightAndFade},
    },
};

const DropdownMenuContent = styled(DropdownMenu.Content, DropContentStyles);

const DropdownMenuArrow = styled(DropdownMenu.Arrow, {fill: 'white'});

const DropItemStyles = {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: gray.gray12,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 5px',
    position: 'relative',
    paddingLeft: 25,
    userSelect: 'none',
    cursor: 'pointer',

    '&[data-disabled]': {
        color: mauve.mauve8,
        pointerEvents: 'none',
    },

    '&[data-highlighted]': {
        backgroundColor: gray.gray3,
        color: gray.gray12,
    },
};

const DropdownMenuItem = styled(DropdownMenu.Item, DropItemStyles);

const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
    height: 1,
    backgroundColor: gray.gray6,
    margin: 5,
});

const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: gray.gray12,
    cursor: 'pointer'
})